import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { FAB, Searchbar } from "react-native-paper";
import UserItem from "../components/UserItem";
import { Context as UsersContext } from "../context/users/userContext";
import Spinner from "../components/Spinner";

const UsersListScreen = ({ navigation }) => {
  const usersContext = useContext(UsersContext);
  const { state, getUsers } = usersContext;

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <SafeAreaView style={styles.conatainer}>
      <Spinner loading={state.loading}>
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
      </Spinner>
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
