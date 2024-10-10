import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import {
  Button,
  Divider,
  Icon,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import Spacer from "./Spacer";
import { Dropdown } from "react-native-paper-dropdown";
import { Context as AuthContext } from "../context/auth/authContext";

const userDefault = {
  fName: "",
  lName: "",
  email: "",
  phone: "",
  employeeId: "",
  userType: "",
  active: "true",
};

const UserForm = ({
  onSubmit,
  title,
  userDetail = { ...userDefault },
  userId,
}) => {
  const theme = useTheme();

  const authContext = useContext(AuthContext);
  const { state } = authContext;

  const [user, setUser] = useState({
    ...userDetail,
    createdBy: userDetail.createdBy || state.user?._id,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView
        style={{
          ...styles.formContainer,
          backgroundColor: theme.colors.background,
        }}
      >
        <View style={styles.title}>
          <Icon source="details" color={theme.colors.primary} size={25} />
          <Text
            style={{ marginLeft: 10, color: theme.colors.primary }}
            variant="headlineMedium"
          >
            {title}
          </Text>
        </View>
        <Divider bold horizontalInset />
        <TextInput
          value={user.fName}
          onChangeText={(val) => setUser((p) => ({ ...p, fName: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="First Name"
          placeholder="John"
          mode="outlined"
        />
        <TextInput
          value={user.lName}
          onChangeText={(val) => setUser((p) => ({ ...p, lName: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="Last Name"
          placeholder="Doe"
          mode="outlined"
        />
        <TextInput
          value={user.email}
          onChangeText={(val) => setUser((p) => ({ ...p, email: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="Email"
          autoCapitalize="none"
          autoCorrect={false}
          inputMode="email"
          placeholder="johndoe@company.com"
          mode="outlined"
        />
        <TextInput
          value={user.phone}
          onChangeText={(val) => setUser((p) => ({ ...p, phone: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          placeholder="233245214521"
          label="Phone"
          inputMode="tel"
          mode="outlined"
        />
        <TextInput
          value={user.employeeId}
          onChangeText={(val) => setUser((p) => ({ ...p, employeeId: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="EmployeeId"
          placeholder="CMP19999"
          mode="outlined"
        />
        <Dropdown
          label="User Type"
          mode="outlined"
          placeholder="Admin, Employee"
          options={[
            { label: "Admin", value: "Admin" },
            { label: "Employee", value: "Employee" },
          ]}
          value={user.userType}
          onSelect={(val) => setUser((p) => ({ ...p, userType: val }))}
        />
        <Dropdown
          label="Status"
          mode="outlined"
          placeholder="Active, Inactive"
          options={[
            { label: "Active", value: "true" },
            { label: "Inactive", value: "false" },
          ]}
          value={user.active}
          onSelect={(val) => setUser((p) => ({ ...p, active: val }))}
        />
        <Spacer />
        <TouchableOpacity onPress={() => onSubmit(user, userId)}>
          <Button style={{ borderRadius: 10 }} mode="contained">
            Save
          </Button>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "red",
    padding: 5,
    height: "100%",
  },
  title: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: {
    marginVertical: 5,
  },
});
