import { SafeAreaView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context as AuthContext } from "../context/auth/authContext";
import { Button } from "react-native-paper";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const authContext = useContext(AuthContext);

  const { logout, state } = authContext;

  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <Button mode="outlined" onPress={logout} title="Logout">
          Logout
        </Button>
      </Spacer>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // marginBottom: 200
  },
});
