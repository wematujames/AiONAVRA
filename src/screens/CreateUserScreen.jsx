import { StyleSheet, View } from "react-native";
import React from "react";
import UserForm from "../components/UserForm";
const CreateUserScreen = () => {
  return (
    <View>
      <UserForm title="Enter User Details" onSubmit={() => {}} />
    </View>
  );
};

export default CreateUserScreen;

const styles = StyleSheet.create({});
