import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import UserForm from "../components/UserForm";
import { Context as UsersContext } from "../context/users/userContext";
const CreateUserScreen = () => {
  const usersContext = useContext(UsersContext);
  const { state, creatUser } = usersContext;

  return (
    <View>
      <UserForm title="Employee Details" onSubmit={creatUser} />
    </View>
  );
};

export default CreateUserScreen;

const styles = StyleSheet.create({});
