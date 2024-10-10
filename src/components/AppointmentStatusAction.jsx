import { StyleSheet, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const AddContentFAB = ({ status, onCancel, onReject, onConfirm }) => {
  return (
    <View>
      {status === "pending" && (
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Button mode="outlined" onPress={onConfirm}>
            Confirm
          </Button>
          <Button textColor="red" mode="outlined" onPress={onReject}>
            Reject
          </Button>
        </View>
      )}
      {status === "confirmed" && (
        <Button textColor="red" mode="outlined" onPress={onCancel}>
          Cancel
        </Button>
      )}
    </View>
  );
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
