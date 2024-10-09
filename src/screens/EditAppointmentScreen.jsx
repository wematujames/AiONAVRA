import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import AppointmentForm from "../components/AppoinmentForm";
import { Context as AppointmentContext } from "../context/appointments/appointmentContext";
const EditAppointmentScreen = ({ route }) => {
  const { appointment } = route.params;

  const appointmentContext = useContext(AppointmentContext);
  const { updateAppointment } = appointmentContext;

  return (
    <AppointmentForm
      _appointment={appointment}
      title="Update Appointment"
      onSubmit={updateAppointment}
    />
  );
};

export default EditAppointmentScreen;

const styles = StyleSheet.create({});
