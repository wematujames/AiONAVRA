import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  View,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Context as AppointmentContext } from "../context/appointments/appointmentContext";
import Spinner from "./Spinner";
import AddContentFAB from "./AddContentFAB";
import AppointmentItem from "./AppointmentItem";
import { IconButton, Text } from "react-native-paper";
import { useIsFocused, useNavigation } from "@react-navigation/native";

const PendingRoute = () => {
  const appointmentContext = useContext(AppointmentContext);
  const { state } = appointmentContext;

  return (
    <Spinner loading={state.loading}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={state.appointments.filter((a) => a.status === "pending")}
        renderItem={({ item }) => <AppointmentItem appointment={item} />}
      />
    </Spinner>
  );
};

const ConfirmedRoute = () => {
  const appointmentContext = useContext(AppointmentContext);
  const { state } = appointmentContext;

  return (
    <Spinner loading={state.loading}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={state.appointments.filter((a) => a.status === "confirmed")}
        renderItem={({ item }) => <AppointmentItem appointment={item} />}
      />
    </Spinner>
  );
};

const CancelledRoute = () => {
  const appointmentContext = useContext(AppointmentContext);

  const { state } = appointmentContext;

  return (
    <Spinner loading={state.loading}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={state.appointments.filter((a) => a.status === "cancelled")}
        renderItem={({ item }) => <AppointmentItem appointment={item} />}
      />
    </Spinner>
  );
};

const AppointmentList = ({ enableAdd }) => {
  const navigation = useNavigation();
  const appointmentContext = useContext(AppointmentContext);
  const { getAppointments } = appointmentContext;
  const isFocused = useIsFocused();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "confirmed", title: "CONFIRMED" },
    { key: "pending", title: "PENDING" },
    { key: "cancelled", title: "CANCELED" },
  ]);

  useEffect(() => {
    getAppointments();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        onIndexChange={setIndex}
        navigationState={{ index, routes }}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderScene={SceneMap({
          pending: PendingRoute,
          confirmed: ConfirmedRoute,
          cancelled: CancelledRoute,
        })}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            labelStyle={styles.label}
            renderLabel={({ route, focused }) => (
              <View style={styles.tabLabelContainer}>
                <IconButton
                  icon={
                    route.key === "pending"
                      ? "clock"
                      : route.key === "confirmed"
                        ? "check"
                        : "close"
                  }
                  size={20}
                  iconColor={focused ? "#663399" : "#000"}
                  centered
                />
                <Text
                  style={{
                    ...styles.label,
                    color: focused ? "#663399" : "#000",
                  }}
                >
                  {route.title}
                </Text>
              </View>
            )}
          />
        )}
      />
      <AddContentFAB
        showFAB={enableAdd}
        onAdd={() => navigation.navigate("CreateAppointment")}
      />
    </SafeAreaView>
  );
};

export default AppointmentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#fff",
  },
  tabLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  indicator: {
    backgroundColor: "#663399",
  },
  label: {
    color: "#663399",
    fontWeight: "bold",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
