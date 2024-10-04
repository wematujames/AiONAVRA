import React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const Spinner = ({ children, loading }) => {
  if (loading) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <View style={styles.container}>{children}</View>;
};

export default Spinner;

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
});
