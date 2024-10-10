import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { FAB, Portal } from "react-native-paper";

const ContentAction = ({ showFAB, onEdit, onDelete, showDel }) => {
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const buttons = [
    {
      icon: "book-edit",
      label: "Edit",
      onPress: onEdit,
    },
  ];

  showDel &&
    buttons.push({
      icon: "delete",
      label: "Delete",
      onPress: onDelete,
    });

  if (!showFAB) return null;

  return (
    <Portal>
      <FAB.Group
        visible
        open={open}
        onStateChange={onStateChange}
        icon={"unfold-more-vertical"}
        actions={buttons}
      />
    </Portal>
  );
};

export default ContentAction;

const styles = StyleSheet.create({});
