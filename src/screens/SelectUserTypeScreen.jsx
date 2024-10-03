import { StyleSheet } from "react-native";
import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/auth/authContext";
import { ActivityIndicator, Button, Text } from "react-native-paper";
import Spacer from "../components/Spacer";
import Center from "../components/Center";

const SelectUserTypeScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext);

  const { state, authenticate } = authContext;

  useEffect(() => {
    authenticate(state.userType);
  }, [state.userType]);

  if (state.loading) return <ActivityIndicator size={50} />;

  return (
    <Center>
      <Text style={styles.heading} variant="headlineMedium">
        Select Type Of User
      </Text>
      <Spacer>
        <Button
          mode="contained"
          onPress={() => {
            authenticate("Visitor");
          }}
        >
          Visitor
        </Button>
      </Spacer>
      <Spacer>
        <Button
          mode="contained"
          onPress={() => {
            authenticate("Employee");
          }}
        >
          Employee
        </Button>
      </Spacer>
      <Spacer>
        <Button
          mode="contained"
          onPress={() => {
            authenticate("Administrator");
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
