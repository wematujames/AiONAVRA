import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Spacer from "./Spacer";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const LinkInfo = ({ title, to, specialText }) => {
  const navigation = useNavigation();

  return (
    <Spacer>
      <TouchableOpacity
        onPress={() => navigation.navigate(to)}
        style={styles.linkContainer}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.navLink}>{specialText}</Text>
      </TouchableOpacity>
    </Spacer>
  );
};

export default LinkInfo;

const styles = StyleSheet.create({
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: "#fff",
  },
  navLink: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: "#663399",
  },
});
