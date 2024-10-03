import { SafeAreaView, StyleSheet } from "react-native";
import { useContext } from "react";
import { Context as AuthContext } from "../context/auth/authContext";
import { Button, Text } from "react-native-paper";
import Spacer from "../components/Spacer";

const SelectUserTypeScreen = ({ navigation }) => {
  const authContext = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading} variant="headlineMedium">
        Select user Type
      </Text>
      <Spacer>
        <Button mode="contained" onPress={() => navigation.navigate("Visitor")}>
          Visitor
        </Button>
      </Spacer>
      <Spacer>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("Employee")}
        >
          Employee
        </Button>
      </Spacer>
      <Spacer>
        <Button mode="contained" onPress={() => navigation.navigate("Admin")}>
          Administrator
        </Button>
      </Spacer>
    </SafeAreaView>
  );
};

export default SelectUserTypeScreen;

const styles = StyleSheet.create({
  heading: {
    alignSelf: "center",
  },
  container: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 100,
  },
});
