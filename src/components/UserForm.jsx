import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  Button,
  Divider,
  Icon,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import Spacer from "./Spacer";
import { Picker, PickerIOS } from "@react-native-picker/picker";

const routeDetailDefault = {
  name: "",
  description: "",
  occupant: "",
  floor: "",
  elevation: "",
  eta: "",
  directions: "",
  createdAt: new Date().toISOString(),
};

const UserForm = ({
  onSubmit,
  title,
  routeDetail = { ...routeDetailDefault },
}) => {
  const theme = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [route, setRoute] = useState(routeDetail);
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
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
          label="First Name"
          placeholder="John"
          mode="outlined"
        />
        <TextInput
          value={route.description}
          onChangeText={(val) => setRoute((p) => ({ ...p, description: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="Last Name"
          placeholder="Doe"
          mode="outlined"
          multiline
        />
        <TextInput
          value={route.floor}
          onChangeText={(val) => setRoute((p) => ({ ...p, floor: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="Email"
          placeholder="johndoe@company.com"
          mode="outlined"
        />
        <TextInput
          value={route.elevation}
          onChangeText={(val) => setRoute((p) => ({ ...p, elevation: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          placeholder="0245214521"
          label="Phone"
          mode="outlined"
        />
        <TextInput
          value={route.eta}
          onChangeText={(val) => setRoute((p) => ({ ...p, eta: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="EmployeeId"
          placeholder="CMP19999"
          mode="outlined"
        />
        <TextInput
          value={route.occupant}
          onChangeText={(val) => setRoute((p) => ({ ...p, occupant: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="UserType"
          placeholder="Employee occupant"
          mode="outlined"
        />
        <PickerIOS
          enabled={true}
          mode="dropdown"
          ref={pickerRef}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </PickerIOS>
        <Spacer />

        <TouchableOpacity onPress={() => onSubmit(route, route.id)}>
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
