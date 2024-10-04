import { SafeAreaView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context as RouteContext } from "../context/directions/directionContext";
import RouteForm from "../components/RouteForm";

const EditRouteScreen = ({ route }) => {
  const { routeDetail } = route.params;

  const routeContext = useContext(RouteContext);

  const { updateRoute } = routeContext;

  return (
    <SafeAreaView>
      <RouteForm
        routeDetail={routeDetail}
        onSubmit={updateRoute}
        title="Update Route"
      />
    </SafeAreaView>
  );
};

export default EditRouteScreen;

const styles = StyleSheet.create({});
