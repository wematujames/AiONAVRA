import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const Center = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Center;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 100,
  },
});
