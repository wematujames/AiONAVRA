import { SafeAreaView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context as RouteContext } from "../context/directions/directionContext";
import RouteForm from "../components/RouteForm";

const CreateRouteScreen = () => {
  const routeContext = useContext(RouteContext);

  const { createRoute, loading } = routeContext;

  return (
    <SafeAreaView>
      <RouteForm onSubmit={createRoute} title="Enter Route Details" />
    </SafeAreaView>
  );
};

export default CreateRouteScreen;

const styles = StyleSheet.create({});
