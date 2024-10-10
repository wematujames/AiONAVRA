import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Divider,
  Icon,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import Spacer from "./Spacer";
import { Context as AuthContext } from "../context/auth/authContext";
import { Context as UsersContext } from "../context/users/userContext";
import { Dropdown } from "react-native-paper-dropdown";
const routeDetailDefault = {
  name: "",
  description: "",
  occupant: "",
  floor: "",
  elevation: "None",
  eta: "",
  directions: "",
};

const RouteForm = ({
  onSubmit,
  title,
  routeDetail = { ...routeDetailDefault },
  routeId,
}) => {
  const theme = useTheme();
  const authContext = useContext(AuthContext);
  const usersContext = useContext(UsersContext);

  const { state: authState } = authContext;
  const { state: usersState, getUsers } = usersContext;

  const [route, setRoute] = useState({
    ...routeDetail,
    occupant: routeDetail.occupant?._id || usersState.users[0]?._id,
    createdBy: routeDetail.createdBy || authState.user?._id,
  });

  useEffect(() => {
    getUsers();
  }, []);

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
          value={route.name}
          onChangeText={(val) => setRoute((p) => ({ ...p, name: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="Route Name"
          placeholder="Room 112"
          mode="outlined"
        />
        <TextInput
          value={route.description}
          onChangeText={(val) => setRoute((p) => ({ ...p, description: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="Route description"
          placeholder="The CEO's Office"
          mode="outlined"
          multiline
        />
        <TextInput
          value={route.floor}
          onChangeText={(val) => setRoute((p) => ({ ...p, floor: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="Floor"
          placeholder="floor number"
          mode="outlined"
        />
        <Dropdown
          label="Elevation"
          mode="outlined"
          placeholder="Stairs, Elevator, None"
          options={[
            { label: "None", value: "None" },
            { label: "Stairs", value: "Stairs" },
            { label: "Elevator", value: "Elevator" },
          ]}
          value={route.elevation}
          onSelect={(val) => setRoute((p) => ({ ...p, elevation: val }))}
        />
        <TextInput
          value={route.eta}
          onChangeText={(val) => setRoute((p) => ({ ...p, eta: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="ETA"
          placeholder="Estimated arrival time"
          mode="outlined"
        />
        <Dropdown
          label="Occupant"
          mode="outlined"
          placeholder="Select Occupant"
          options={usersState.users.map((u) => ({
            label: u.fName + " " + u.lName,
            value: u._id,
          }))}
          value={route.occupant}
          onSelect={(val) => setRoute((p) => ({ ...p, occupant: val }))}
        />
        <TextInput
          value={route.directions}
          onChangeText={(val) => setRoute((p) => ({ ...p, directions: val }))}
          multiline
          style={styles.textInput}
          clearButtonMode="always"
          label="Directions"
          placeholder="Multile step by step directions to destination"
          mode="outlined"
        />
        <Spacer />
        <TouchableOpacity onPress={() => onSubmit(route, routeId)}>
          <Button style={{ borderRadius: 10 }} mode="contained">
            Save Route
          </Button>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RouteForm;

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
