import { SafeAreaView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import NoticeList from "../components/NoticeList";
import { Context as AuthContext } from "../context/auth/authContext";
const HomeScreen = () => {
  const authContext = useContext(AuthContext);
  const { state } = authContext;

  return (
    <SafeAreaView>
      <NoticeList enableAdd={state.userType === "Admin"} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
