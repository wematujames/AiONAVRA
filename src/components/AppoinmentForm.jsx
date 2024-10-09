import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Alert, Platform } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { Context as AuthContext } from "../context/auth/authContext";
import { Context as UsersContext } from "../context/users/userContext";
import { Dropdown } from "react-native-paper-dropdown";

const apmntDefProp = {
  title: "",
  description: "",
  date: new Date(),
  status: "pending",
  duration: "",
};

const AppointmentForm = ({ title, onSubmit, _appointment = apmntDefProp }) => {
  const authContext = useContext(AuthContext);
  const usersContext = useContext(UsersContext);

  const { state: usersState, getUsers } = usersContext;
  const { state: authState } = authContext;

  const [appointment, setAppointment] = useState({
    title: _appointment.title || "",
    description: _appointment.description || "",
    date: _appointment.date ? new Date(_appointment.date) : new Date(),
    employee: _appointment?.employee?._id || usersState.users[0]?._id,
    visitor: _appointment?.visitor?._id || authState.user?._id,
    duration: _appointment?.duration + "" || "0",
  });

  console.log(appointment);

  const onChange = (key, val) =>
    setAppointment((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = () => {
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

    onSubmit(appointment, _appointment?._id);
    Alert.alert("Success", "Appointment saved!");
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
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

      <Dropdown
        label="Employee"
        mode="outlined"
        placeholder="Select Gender"
        options={usersState.users.map((u) => ({
          label: u.fName + " " + u.lName,
          value: u._id,
        }))}
        value={appointment.employee}
        onSelect={(val) => onChange("employee", val)}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
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
