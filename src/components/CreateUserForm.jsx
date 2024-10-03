import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "react-native-paper";
import Spacer from "./Spacer";

const CreateUserForm = () => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.title} variant="titleLarge">
        Enter User Details
      </Text>
      <TextInput
        style={styles.textInput}
        clearButtonMode="always"
        label="Route Name"
        placeholder="Room 112"
        mode="outlined"
      />
      <TextInput
        style={styles.textInput}
        clearButtonMode="always"
        label="Floor"
        placeholder="floor number"
        mode="outlined"
      />
      <TextInput
        style={styles.textInput}
        clearButtonMode="always"
        placeholder="Stairs, Elevator, None"
        label="Elevation"
        mode="outlined"
      />
      <TextInput
        style={styles.textInput}
        clearButtonMode="always"
        label="ETA"
        placeholder="Estimated arrival time"
        mode="outlined"
      />
      <TextInput
        style={styles.textInput}
        clearButtonMode="always"
        label="Occupant"
        placeholder="Employee occupant"
        mode="outlined"
      />
      <Spacer />
      <TouchableOpacity>
        <Button style={{ borderRadius: 10 }} mode="contained">
          Create User
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default CreateUserForm;

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  title: {
    alignSelf: "center",
    marginVertical: 10,
  },
  textInput: {
    marginVertical: 5,
  },
});
