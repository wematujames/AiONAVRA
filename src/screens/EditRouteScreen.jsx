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
        routeDetail={{
          name: routeDetail.name,
          description: routeDetail.description,
          floor: routeDetail.floor,
          elevation: routeDetail.elevation,
          eta: routeDetail.eta,
          occupant: routeDetail.occupant,
          createdBy: routeDetail.createdBy,
          directions: routeDetail.directions,
        }}
        routeId={routeDetail.id}
        onSubmit={updateRoute}
        title="Update Route"
      />
    </SafeAreaView>
  );
};

export default EditRouteScreen;

const styles = StyleSheet.create({});
