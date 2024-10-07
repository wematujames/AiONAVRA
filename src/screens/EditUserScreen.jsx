import { StyleSheet, View } from "react-native";
import React from "react";
import UserForm from "../components/UserForm";

const EditUserScreen = () => {
  return (
    <View>
      <UserForm title="Update User" />
    </View>
  );
};

export default EditUserScreen;

const styles = StyleSheet.create({});
