import { Image, ImageBackground, StyleSheet, View } from "react-native";
import React, { useContext, useState } from "react";
import { Context as AuthContext } from "../context/auth/authContext";
import { BlurView } from "expo-blur";
import { Button, Icon, Text, TextInput } from "react-native-paper";

const SignInScreen = ({ navigation }) => {
  const [signUp, setSignUp] = useState({ email: "", password: "" });

  const authContext = useContext(AuthContext);
  const { signIn, state } = authContext;

  const onInputChange = (key, val) => {
    setSignUp((prev) => ({ ...prev, [key]: val }));
  };

  const onSubmit = async () => {
    await signIn(signUp.email, signUp.password);
  };

  return (
    <ImageBackground
      source={require("../../assets/login_1.jpg")}
      style={styles.background}
    >
      <BlurView intensity={10} style={styles.container}>
        <View style={styles.formContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 300, height: 200, alignSelf: "center" }}
          />

          <Text style={styles.heading}>Sign In</Text>

          {state.errMsg ? (
            <Text style={styles.errMsg}>
              <Icon source="information" color="red" size={20} />
              <Text style={{ color: "red", marginRight: 30 }}>
                {" " + state.errMsg}
              </Text>
            </Text>
          ) : null}

          <TextInput
            mode="outlined"
            label="Email"
            value={signUp.email}
            onChangeText={(val) => onInputChange("email", val)}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Password"
            value={signUp.password}
            onChangeText={(val) => onInputChange("password", val)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            style={styles.input}
          />

          <Button
            mode="contained"
            onPress={onSubmit}
            contentStyle={styles.buttonContent}
            style={styles.button}
          >
            Sign In
          </Button>
        </View>
      </BlurView>
    </ImageBackground>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  transparentOverlay: {
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent white background
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    paddingTop: -50,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    marginBottom: 150,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  errMsg: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    color: "#fff",
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    borderRadius: 5,
  },
  buttonContent: {
    paddingVertical: 5,
  },
});
