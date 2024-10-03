import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { FAB, Searchbar } from "react-native-paper";
import UserItem from "../components/UserItem";

const UsersListScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.conatainer}>
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
        renderItem={({ item }) => <UserItem routeItem={item} />}
      />

      <FAB
        style={styles.fab}
        onPress={() => navigation.navigate("CreateUser")}
        icon="plus"
      />
    </SafeAreaView>
  );
};

export default UsersListScreen;

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
