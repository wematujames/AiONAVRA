import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { useContext } from "react";
import { Context as AuthContext } from "../context/auth/authContext";
import { Button, Icon, Text } from "react-native-paper";
import Spacer from "../components/Spacer";
import Center from "../components/Center";
import { BlurView } from "expo-blur";

const SelectUserTypeScreen = () => {
  const authContext = useContext(AuthContext);
  const { setUserType } = authContext;

  return (
    <ImageBackground
      source={require("../../assets/login_1.jpg")}
      style={styles.background}
    >
      <BlurView intensity={15} style={styles.blurContainer}>
        <Center style={styles.container}>
          <View style={[styles.logoContainer, { alignSelf: "center" }]}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.logo}
            />
          </View>

          <Text style={styles.heading} variant="headlineLarge">
            Who are you ?
          </Text>

          <Spacer>
            <Button
              mode="contained"
              onPress={() => setUserType("Visitor")}
              style={styles.button}
              labelStyle={[styles.buttonLabel, { color: "blue" }]}
              icon={() => <Icon source="account" size={30} color="blue" />}
            >
              A Visitor
            </Button>
          </Spacer>
          <Spacer>
            <Button
              mode="contained"
              onPress={() => setUserType("Employee")}
              style={[styles.button]}
              labelStyle={[styles.buttonLabel, { color: "green" }]}
              icon={() => <Icon source="account-tie" size={30} color="green" />}
            >
              An Employee
            </Button>
          </Spacer>
          <Spacer>
            <Button
              mode="contained"
              onPress={() => setUserType("Admin")}
              style={styles.button}
              labelStyle={[styles.buttonLabel, { color: "purple" }]}
              icon={() => (
                <Icon source="shield-account" size={30} color="purple" />
              )}
            >
              An Administrator
            </Button>
          </Spacer>
        </Center>
      </BlurView>
    </ImageBackground>
  );
};

export default SelectUserTypeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  heading: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
    letterSpacing: 1.5,
    marginBottom: 10,
    textAlign: "center",
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 200,
  },
  button: {
    borderRadius: 5,
    paddingVertical: 5,
    backgroundColor: "#fefefe",
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
