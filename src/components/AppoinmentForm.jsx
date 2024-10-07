import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";

const AppointmentForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [employee, setEmployee] = useState("");
  const [visitor, setVisitor] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [status, setStatus] = useState("Scheduled");
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    // Example validation
    if (!title || !description || !employee || !visitor || !date || !duration) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    // Logic to save the appointment can be implemented here
    const appointmentData = {
      title,
      description,
      employee,
      visitor,
      date,
      duration,
      status,
      createdAt: new Date().toISOString(),
    };

    // For now, just log the appointment data
    console.log("Appointment Created:", appointmentData);
    Alert.alert("Success", "Appointment created successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Appointment</Text>

      <TextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Employee"
        value={employee}
        onChangeText={setEmployee}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Visitor"
        value={visitor}
        onChangeText={setVisitor}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Duration (minutes)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
        mode="outlined"
        style={styles.input}
      />

      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Create Appointment
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
