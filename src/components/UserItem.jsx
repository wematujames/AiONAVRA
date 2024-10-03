import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const UserItem = ({ user }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("UserDetail", { id: user._id })}
    >
      <Text>UserItem</Text>
    </TouchableOpacity>
  );
};

export default UserItem;

const styles = StyleSheet.create({});
