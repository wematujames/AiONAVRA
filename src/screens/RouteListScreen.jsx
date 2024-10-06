import { FlatList, StyleSheet, View } from "react-native";
import React, { useContext, useEffect } from "react";
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

  useEffect(() => {
    getRoutes();
  }, [isFocused]);

  return (
    <Spinner loading={state.loading}>
      <View style={styles.conatainer}>
        <Searchbar
          autoCapitalize="none"
          autoCorrect={false}
          mode="bar"
          clearButtonMode="always"
          style={styles.searchBar}
        />

        <FlatList
          data={state.routes}
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
  conatainer: {
    flex: 1,
  },
  searchBar: {
    borderRadius: 5,
  },
});
