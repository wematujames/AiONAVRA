import { ActivityIndicator, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import MapView, { Circle, Polyline } from "react-native-maps";
import { Context as LocationContext } from "../context/track/locationContext";

const Map = () => {
  const locationContext = useContext(LocationContext);

  const { state } = locationContext;

  if (!state.currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          ...state.currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...state.currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={state.locations.map((loc) => loc.coords)} />

        <Circle
          center={state.currentLocation.coords}
          radius={120}
          strokeColor="rgba(158,158,255, 1.0)"
          fillColor="rgba(158,158,255, 0.3)"
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
