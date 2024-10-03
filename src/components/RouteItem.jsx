import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";

const RouteItem = ({ routeItem }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RouteDetail", { id: routeItem._id })}
    >
      <List.Item
        title={routeItem.name}
        description={routeItem.description}
        left={(props) => <List.Icon {...props} icon="road-variant" />}
      />
    </TouchableOpacity>
  );
};

export default RouteItem;

const styles = StyleSheet.create({});
