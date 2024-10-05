import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Chip, List, Text } from "react-native-paper";

const RouteItem = ({ routeItem }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RouteDetail", { id: routeItem.id })}
    >
      <List.Item
        title={() => (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text variant="titleLarge">{routeItem.name}</Text>
            <Chip icon="information">{routeItem.elevation}</Chip>
          </View>
        )}
        description={routeItem.description.substring(0, 100)}
        left={(props) => <List.Icon {...props} icon="road-variant" />}
      />
    </TouchableOpacity>
  );
};

export default RouteItem;

const styles = StyleSheet.create({});
