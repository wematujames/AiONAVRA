import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/auth/authContext";
import { Context as AppointmentContext } from "../context/appointments/appointmentContext";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import {
  Text,
  Card,
  Avatar,
  Title,
  Subheading,
  IconButton,
} from "react-native-paper";
import Spinner from "../components/Spinner";
import ContentAction from "../components/ContentAction";
import AppoinmentStatusAction from "../components/AppointmentStatusAction";
const AppointmentDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { id: appointmentId } = route.params;

  const isFocused = useIsFocused();
  const authContext = useContext(AuthContext);
  const appointmentContext = useContext(AppointmentContext);

  const { state: authState } = authContext;
  const {
    getAppointment,
    state: appointmentState,
    updateAppointment,
  } = appointmentContext;

  useEffect(() => {
    getAppointment(appointmentId);
  }, [isFocused, appointmentId]);

  if (!appointmentState.appointment) return <Spinner loading={true} />;

  const appointment = appointmentState.appointment;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        <ScrollView style={{ flex: 1, height: "1000" }}>
          <Card mode="contained" style={styles.card}>
            <Card.Content>
              <View style={styles.headerContainer}>
                <Avatar.Icon size={60} icon="calendar" />
                <View style={styles.headerTextContainer}>
                  <Title style={styles.title}>{appointment.title}</Title>
                  <Subheading style={styles.subtitle}>
                    With {appointment.employee.fName}{" "}
                    {appointment.employee.lName}
                  </Subheading>
                </View>
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsLabel}>Visitor:</Text>
                <Text style={styles.detailsText}>
                  {appointment.visitor.fName} {appointment.visitor.lName}
                </Text>
                <IconButton icon="account" size={20} onPress={() => {}} />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsLabel}>Date:</Text>
                <Text style={styles.detailsText}>{appointment.date}</Text>
                <IconButton
                  icon="calendar-today"
                  size={20}
                  onPress={() => {}}
                />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsLabel}>Duration:</Text>
                <Text style={styles.detailsText}>
                  {appointment.duration} mins
                </Text>
                <IconButton icon="clock-outline" size={20} onPress={() => {}} />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsLabel}>Status:</Text>
                <Text style={styles.statusText(appointment.status)}>
                  {appointment.status.charAt(0).toUpperCase() +
                    appointment.status.slice(1)}
                </Text>
                <IconButton
                  icon={
                    appointment.status === "confirmed"
                      ? "check-circle"
                      : "alert-circle"
                  }
                  size={20}
                  onPress={() => {}}
                />
              </View>

              {["Admin", "Employee"].includes(authState.user?.userType) && (
                <AppoinmentStatusAction
                  onCancel={() =>
                    updateAppointment({ status: "canceled" }, appointmentId)
                  }
                  onConfirm={() =>
                    updateAppointment({ status: "confirmed" }, appointmentId)
                  }
                  onReject={() =>
                    updateAppointment({ status: "rejected" }, appointmentId)
                  }
                  status={appointment.status}
                />
              )}
            </Card.Content>
            <Card.Actions style={styles.actionsContainer}>
              <ContentAction
                showFAB
                onEdit={() =>
                  navigation.navigate("EditAppointment", { appointment })
                }
                onDelete={() => deleteNotice(appointment.id)}
              />
            </Card.Actions>
          </Card>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AppointmentDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTextContainer: {
    marginLeft: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  detailsLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  detailsText: {
    fontSize: 16,
    color: "#444",
    flex: 1,
    marginLeft: 10,
  },
  statusText: (status) => ({
    fontSize: 16,
    color:
      status === "confirmed"
        ? "green"
        : status === "rejected"
          ? "red"
          : "orange",
    fontWeight: "bold",
  }),
  actionsContainer: {
    justifyContent: "space-between",
  },
});
