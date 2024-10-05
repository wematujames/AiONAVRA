import { SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import ContentAction from "../components/ContentAction";
import { Context as AuthContext } from "../context/auth/authContext";
import { Context as RouteContext } from "../context/directions/directionContext";
import { useIsFocused } from "@react-navigation/native";
import Spinner from "../components/Spinner";
const RouteDetail = ({ navigation, route }) => {
  const { id: routeId } = route.params;

  const isFocused = useIsFocused();
  const authContext = useContext(AuthContext);
  const routeContext = useContext(RouteContext);

  const { state: authState } = authContext;
  const { deleteRoute, getRoute, state: routeState } = routeContext;

  useEffect(() => {
    getRoute(routeId);
  }, [isFocused, routeId]);

  return (
    <Spinner loading={routeState.loading}>
      <SafeAreaView>
        <Text>{routeState.route.name}</Text>
        <ContentAction
          showFAB={authState.userType === "Admin"}
          onEdit={() =>
            navigation.navigate("EditRoute", { routeDetail: routeState.route })
          }
          onDelete={() => deleteRoute(routeState.route.id)}
        />
      </SafeAreaView>
    </Spinner>
  );
};

export default RouteDetail;

const styles = StyleSheet.create({});
