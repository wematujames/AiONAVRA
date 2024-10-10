import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import UserForm from "../components/UserForm";
import { Context as UsersContext } from "../context/users/userContext";

const EditUserScreen = ({ route }) => {
  const { userDetail } = route.params;
  const usersContext = useContext(UsersContext);
  const { updateUser } = usersContext;
  return (
    <View>
      <UserForm
        userDetail={{
          fName: userDetail.fName,
          lName: userDetail.lName,
          email: userDetail.email,
          phone: userDetail.phone,
          employeeId: userDetail.employeeId,
          userType: userDetail.userType,
          active: userDetail.active + "",
          createdBy: userDetail.createdBy,
        }}
        userId={userDetail._id}
        title="Update User"
        onSubmit={updateUser}
      />
    </View>
  );
};

export default EditUserScreen;

const styles = StyleSheet.create({});
