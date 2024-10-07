import { StyleSheet } from "react-native";
import { useState } from "react";

const AuthForm = ({ errMsg, submitAction, link, formTitle }) => {
  const [signUp, setSignUp] = useState({ email: "", password: "" });

  const onSubmit = async () => {
    await submitAction(signUp.email, signUp.password);
  };

  const onInputChange = (key, val) => {
    setSignUp((prev) => ({ ...prev, [key]: val }));
  };

  return null;
};

export default AuthForm;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  transparentOverlay: {
    height: 300,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  errMsg: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    color: "#fff",
    marginBottom: 10,
  },
  button: {
    marginTop: 5,
    borderRadius: 5,
  },
  buttonContent: {
    paddingVertical: 5,
  },
  linkContainer: {
    marginTop: 15,
    alignItems: "center",
  },
});
