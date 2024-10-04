import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { FAB, Searchbar } from "react-native-paper";
import UserItem from "../components/UserItem";
import { Context as UsersContext } from "../context/users/userContext";

const UsersListScreen = ({ navigation }) => {
  const usersContext = useContext(UsersContext);
  const { state } = usersContext;

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
        data={state.users}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <UserItem user={item} />}
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
