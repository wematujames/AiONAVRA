import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";

const UserItem = ({ user }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("UserDetail", { id: user._id })}
    >
      <List.Item
        title={user.username}
        description={user.employeeId}
        left={(props) => <List.Icon {...props} icon="account" />}
      />
    </TouchableOpacity>
  );
};

export default UserItem;

const styles = StyleSheet.create({});
