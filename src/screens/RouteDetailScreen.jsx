import { SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useContext } from "react";
import ContextAction from "../components/ContentAction";
import { Context as AuthContext } from "../context/auth/authContext";
import { Context as RouteContext } from "../context/directions/directionContext";
const RouteDetail = ({ navigation, route }) => {
  const authContext = useContext(AuthContext);
  const routeContext = useContext(RouteContext);

  const { routeDetail } = route.params;

  const {
    state: { userType },
  } = authContext;

  const { deleteRoute } = routeContext;

  return (
    <SafeAreaView>
      <Text>{routeDetail.name}</Text>
      <ContextAction
        showFAB={userType === "Admin"}
        onEdit={() => navigation.navigate("EditRoute", { routeDetail })}
        onDelete={() => deleteRoute(routeDetail.id)}
      />
    </SafeAreaView>
  );
};

export default RouteDetail;

const styles = StyleSheet.create({});
