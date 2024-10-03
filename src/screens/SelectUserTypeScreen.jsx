import { StyleSheet } from "react-native";
import { useContext } from "react";
import { Context as AuthContext } from "../context/auth/authContext";
import { Button, Text } from "react-native-paper";
import Spacer from "../components/Spacer";
import Center from "../components/Center";

const SelectUserTypeScreen = () => {
  const authContext = useContext(AuthContext);

  const { state, setUserType } = authContext;

  return (
    <Center>
      <Text style={styles.heading} variant="headlineMedium">
        Select Type Of User
      </Text>
      <Spacer>
        <Button
          mode="contained"
          onPress={() => {
            setUserType("Visitor");
          }}
        >
          Visitor
        </Button>
      </Spacer>
      <Spacer>
        <Button
          mode="contained"
          onPress={() => {
            setUserType("Employee");
          }}
        >
          Employee
        </Button>
      </Spacer>
      <Spacer>
        <Button
          mode="contained"
          onPress={() => {
            setUserType("Admin");
          }}
        >
          Administrator
        </Button>
      </Spacer>
    </Center>
  );
};

export default SelectUserTypeScreen;

const styles = StyleSheet.create({
  heading: {
    alignSelf: "center",
  },
});
