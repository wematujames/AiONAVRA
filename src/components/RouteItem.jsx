import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const RouteItem = ({ routeItem }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RouteDetails", { id: routeItem._id })}
    >
      <Text>RouteItem</Text>
    </TouchableOpacity>
  );
};

export default RouteItem;

const styles = StyleSheet.create({});
