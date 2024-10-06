import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NoficationIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ marginRight: 15 }}
      onPress={() => navigation.navigate("Notifications")}
    >
      <MaterialIcons size={20} name="notifications" />
    </TouchableOpacity>
  );
};

export default NoficationIcon;

const styles = StyleSheet.create({});
