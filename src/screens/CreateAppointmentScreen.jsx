import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import AppointmentForm from "../components/AppoinmentForm";
import { Context as AppointmentContext } from "../context/appointments/appointmentContext";
const CreateAppointmentScreen = () => {
  const appointmentContext = useContext(AppointmentContext);
  const { createAppointment } = appointmentContext;
  return (
    <AppointmentForm onSubmit={createAppointment} title="Create Appointment" />
  );
};

export default CreateAppointmentScreen;

const styles = StyleSheet.create({});
