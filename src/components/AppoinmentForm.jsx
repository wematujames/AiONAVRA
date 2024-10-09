import React, { useContext, useState } from "react";
import { StyleSheet, View, Alert, Platform } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { Context as AuthContext } from "../context/auth/authContext";

const AppointmentForm = () => {
  const authContext = useContext(AuthContext);
  const { state } = authContext;
  console.log(state.user);
  const [appointment, setAppointment] = useState({
    title: "",
    description: "",
    date: new Date(),
    status: "pending",
    visitor: state.user?._id,
    employee: "",
    duration: "",
  });

  const onChange = (key, val) =>
    setAppointment((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = () => {
    // Example validation
    if (
      !appointment.title ||
      !appointment.description ||
      !appointment.employee ||
      !appointment.visitor ||
      !appointment.date ||
      !appointment.duration
    ) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    console.log("Appointment Created:", appointment);
    Alert.alert("Success", "Appointment created successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Appointment</Text>
      <TextInput
        label="Title"
        value={appointment.title}
        onChangeText={(val) => onChange("title", val)}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Description"
        value={appointment.description}
        onChangeText={(val) => onChange("description", val)}
        mode="outlined"
        multiline
        style={styles.input}
      />

      <TextInput
        label="Employee"
        value={appointment.employee}
        onChangeText={(val) => onChange("employee", val)}
        mode="outlined"
        style={styles.input}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 18 }}>Date: </Text>
          {Platform.OS === "ios" && (
            <DateTimePicker
              testID="dateTimePicker"
              value={appointment.date}
              mode="date"
              is24Hour
              onChange={(e, val) => onChange("date", val)}
            />
          )}
          {Platform.OS === "android" && (
            <Button
              mode="text"
              onPress={() =>
                DateTimePickerAndroid.open({
                  value: appointment.date,
                  onChange: (e, val) => onChange("date", val),
                  mode: "date",
                  is24Hour: true,
                })
              }
            >
              {appointment.date.toDateString()}
            </Button>
          )}
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 18 }}>Time: </Text>
          {Platform.OS === "ios" && (
            <DateTimePicker
              testID="dateTimePicker"
              value={appointment.date}
              mode="time"
              is24Hour
              onChange={(e, val) => onChange("date", val)}
            />
          )}
          {Platform.OS === "android" && (
            <Button
              mode="text"
              onPress={() =>
                DateTimePickerAndroid.open({
                  value: appointment.date,
                  onChange: (e, val) => onChange("date", val),
                  mode: "time",
                  is24Hour: true,
                })
              }
            >
              {appointment.date.toTimeString()}
            </Button>
          )}
        </View>
      </View>

      <TextInput
        label="Duration (minutes)"
        value={appointment.duration}
        onChangeText={(val) => onChange("duration", val)}
        keyboardType="numeric"
        mode="outlined"
        inputMode="numeric"
        style={styles.input}
      />

      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Save Appointment
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    marginBottom: 150,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    marginBottom: 15,
  },
  picker: {
    marginBottom: 20,
  },
  button: {
    borderRadius: 5,
    marginTop: 10,
  },
});

export default AppointmentForm;
