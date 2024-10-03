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
import { Context as RouteContext } from "../context/directions/directionContext";

const CreateRouteForm = () => {
  const theme = useTheme();
  const routeContext = useContext(RouteContext);

  const [route, setRoute] = useState({
    name: "",
    description: "Rela",
    occupant: "",
    floor: "",
    elevation: "",
    eta: "",
    directions: "",
    createdAt: new Date().toISOString(),
  });

  const { state, createRoute } = routeContext;

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
            Enter Route Details
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
        <TextInput
          value={route.elevation}
          onChangeText={(val) => setRoute((p) => ({ ...p, elevation: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          placeholder="Stairs, Elevator, None"
          label="Elevation"
          mode="outlined"
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
        <TextInput
          value={route.occupant}
          onChangeText={(val) => setRoute((p) => ({ ...p, occupant: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="Occupant"
          placeholder="Employee occupant"
          mode="outlined"
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
        <TouchableOpacity onPress={() => console.log(route)}>
          <Button style={{ borderRadius: 10 }} mode="contained">
            Create Route
          </Button>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateRouteForm;

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
