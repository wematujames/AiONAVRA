import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import AppointmentList from "../components/AppoinmentList";
import { Context as AuthContext } from "../context/auth/authContext";

const AppointmentsScreen = () => {
  const authContext = useContext(AuthContext);
  const { state } = authContext;

  return <AppointmentList enableAdd={state.userType === "Visitor"} />;
};

export default AppointmentsScreen;

const styles = StyleSheet.create({});
