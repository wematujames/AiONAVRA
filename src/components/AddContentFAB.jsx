import { StyleSheet } from "react-native";
import React from "react";
import { FAB } from "react-native-paper";

const AddContentFAB = ({ showFAB, onAdd }) => {
  if (!showFAB) return null;

  return <FAB style={styles.fab} onPress={onAdd} icon="plus" />;
};

export default AddContentFAB;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 35,
  },
});
