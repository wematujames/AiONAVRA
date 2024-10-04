import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { FAB, Portal } from "react-native-paper";

const ContentAction = ({ showFAB, onEdit, onDelete }) => {
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  if (!showFAB) return null;

  return (
    <Portal>
      <FAB.Group
        visible
        open={open}
        onStateChange={onStateChange}
        icon={"unfold-more-vertical"}
        actions={[
          {
            icon: "book-edit",
            label: "Edit",
            onPress: onEdit,
          },
          {
            icon: "delete",
            label: "Delete",
            onPress: onDelete,
          },
        ]}
      />
    </Portal>
  );
};

export default ContentAction;

const styles = StyleSheet.create({});
