import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  Button,
  Divider,
  Icon,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import Spacer from "./Spacer";

const routeDetail = {
  name: "",
  description: "",
  occupant: "",
  floor: "",
  elevation: "",
  eta: "",
  directions: "",
  createdAt: new Date().toISOString(),
};

const RouteForm = ({ onSubmit, title, routeDetail = { ...routeDetail } }) => {
  const theme = useTheme();

  const [route, setRoute] = useState(routeDetail);

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
        <TouchableOpacity onPress={() => onSubmit(route)}>
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
