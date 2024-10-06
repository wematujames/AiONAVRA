import React, { useContext, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Context as AppointmentContext } from "../context/appointments/appointmentContext";
import Spinner from "./Spinner";
import AddContentFAB from "./AddContentFAB";
import AppointmentItem from "./AppointmentItem";

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

const AppointmentList = ({ enableAdd, navigation }) => {
  const appointmentContext = useContext(AppointmentContext);
  const { getAppointments } = appointmentContext;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "confirmed", title: "Confirmed" },
    { key: "pending", title: "Pending" },
    { key: "cancelled", title: "Cancelled" },
  ]);

  useEffect(() => {
    getAppointments();
  }, []);

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
  indicator: {
    backgroundColor: "#6200ee",
  },
  label: {
    color: "#8250df", // Change to your desired text color
    fontWeight: "bold", // Optional: Make text bold
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
