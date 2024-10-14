import { FlatList, StyleSheet, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import RouteItem from "../components/RouteItem";
import { Context as RouteContext } from "../context/directions/directionContext";
import { Context as AuthContext } from "../context/auth/authContext";
import { useIsFocused } from "@react-navigation/native";
import Spinner from "../components/Spinner";
import AddContentFAB from "../components/AddContentFAB";

const RouteListScreen = ({ navigation }) => {
  const routeContext = useContext(RouteContext);
  const authContext = useContext(AuthContext);
  const isFocused = useIsFocused();

  const { state, getRoutes } = routeContext;
  const {
    state: { userType },
  } = authContext;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRoutes, setFilteredRoutes] = useState(state.routes);

  const handleSearch = (term) => {
    console.log(term);

    setSearchTerm(term);

    if (!term) return setFilteredRoutes(state.routes);

    const filtered = state.routes.filter(
      (route) =>
        route.name.toLowerCase().includes(term.toLowerCase()) ||
        route.description.toLowerCase().includes(term.toLowerCase()),
    );

    setFilteredRoutes(filtered);
  };

  useEffect(() => {
    getRoutes();
  }, [isFocused]);

  useEffect(() => {
    setFilteredRoutes(state.routes);
  }, [state.routes]);

  return (
    <Spinner loading={state.loading}>
      <View style={styles.container}>
        <Searchbar
          placeholder="Search routes..."
          value={searchTerm}
          onChangeText={handleSearch}
          autoCapitalize="none"
          autoCorrect={false}
          mode="bar"
          clearButtonMode="always"
          style={styles.searchBar}
        />

        <FlatList
          data={filteredRoutes}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => <RouteItem routeItem={item} />}
        />

        <AddContentFAB
          showFAB={userType === "Admin"}
          onAdd={() => navigation.navigate("CreateRoute")}
        />
      </View>
    </Spinner>
  );
};

export default RouteListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    borderRadius: 5,
  },
});
