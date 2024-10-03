import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { FAB, Searchbar } from "react-native-paper";
import RouteItem from "../components/RouteItem";

const RouteListScreen = ({ navigation }) => {
  return (
    <View style={styles.conatainer}>
      <Searchbar
        autoCapitalize="none"
        autoCorrect={false}
        mode="bar"
        clearButtonMode="always"
        style={styles.searchBar}
      />

      <FlatList
        data={[]}
        keyExtractor={(i) => i._id}
        renderItem={({ item }) => <RouteItem routeItem={item} />}
      />

      <FAB
        style={styles.fab}
        onPress={() => navigation.navigate("CreateRoute")}
        icon="plus"
      />
    </View>
  );
};

export default RouteListScreen;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  searchBar: {
    borderRadius: 10,
  },
});
