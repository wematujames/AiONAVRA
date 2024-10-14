import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FAB, Searchbar } from "react-native-paper";
import UserItem from "../components/UserItem";
import { Context as UsersContext } from "../context/users/userContext";
import { Context as AuthContext } from "../context/auth/authContext";
import Spinner from "../components/Spinner";
import { useIsFocused } from "@react-navigation/native";

const UsersListScreen = ({ navigation }) => {
  const usersContext = useContext(UsersContext);
  const authContext = useContext(AuthContext);
  const { state: authState } = authContext;

  const isFocused = useIsFocused();
  const { state, getUsers } = usersContext;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(state.users);

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (!term) return setFilteredUsers(state.users);

    const filtered = state.users.filter(
      (user) =>
        `${user.fName} ${user.lName}`
          .toLowerCase()
          .includes(term.toLowerCase()) ||
        user.jobTitle?.toLowerCase().includes(term.toLowerCase()) ||
        user.email.toLowerCase().includes(term.toLowerCase()),
    );

    setFilteredUsers(filtered);
  };

  useEffect(() => {
    getUsers();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.conatainer}>
      <Spinner loading={state.loading}>
        <Searchbar
          placeholder="Search users..."
          value={searchTerm}
          onChangeText={handleSearch}
          autoCapitalize="none"
          autoCorrect={false}
          mode="bar"
          clearButtonMode="always"
          style={styles.searchBar}
        />

        <FlatList
          data={filteredUsers}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => <UserItem user={item} />}
        />

        {authState.user?.userType === "Admin" && (
          <FAB
            style={styles.fab}
            onPress={() => navigation.navigate("CreateUser")}
            icon="plus"
          />
        )}
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
