import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import ContentAction from "../components/ContentAction";
import { Context as AuthContext } from "../context/auth/authContext";
import { Context as RouteContext } from "../context/directions/directionContext";
import { useIsFocused } from "@react-navigation/native";
import Spinner from "../components/Spinner";
import { Chip, Divider, Avatar, Card } from "react-native-paper";

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

  if (!routeState.route) {
    return null;
  }

  const { name, description, occupant, floor, elevation, eta, directions } =
    routeState.route;

  return (
    <Spinner loading={routeState.loading}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Card mode="contained" style={styles.card}>
            <Card.Title
              title={
                <View style={{ alignItems: "center" }}>
                  <Avatar.Icon size={100} icon="map-marker" />
                  <Text style={styles.title}>{name}</Text>
                </View>
              }
              titleStyle={styles.title}
            />
            <Card.Content>
              <Text style={styles.label}>Description</Text>
              <Text style={styles.text}>{description}</Text>

              <Divider style={styles.divider} />

              <Text style={styles.label}>Occupant</Text>
              <View style={styles.occupantContainer}>
                {occupant === "N/A" ? (
                  <Text style={styles.text}>Not Occupied</Text>
                ) : typeof occupant !== "object" ? (
                  <Text style={styles.text}>{occupant}</Text>
                ) : (
                  <>
                    <Avatar.Text
                      size={40}
                      label={`${occupant.fName.charAt(0)}${occupant.lName.charAt(0)}`}
                      style={styles.avatarOccupant}
                    />
                    <Text style={styles.text}>
                      {occupant.fName} {occupant.lName} ({occupant.userType})
                    </Text>
                  </>
                )}
              </View>

              <Divider style={styles.divider} />

              <View style={styles.infoContainer}>
                <Chip icon="floor-plan" style={styles.chipInfo}>
                  Floor: {floor}
                </Chip>
                <Text style={styles.etaText}>ETA: {eta}</Text>
                <Chip
                  icon={elevation === "Elevator" ? "elevator" : "stairs"}
                  style={styles.chip}
                >
                  {elevation}
                </Chip>
              </View>

              <Divider style={styles.divider} />

              <Text style={styles.label}>Directions</Text>
              <Text style={styles.text}>{directions}</Text>
            </Card.Content>
          </Card>
        </ScrollView>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf9f6",
  },
  card: {
    paddingTop: "10%",
    backgroundColor: "#faf9f6",
    marginBottom: 20,
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    alignSelf: "center",
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  divider: {
    marginVertical: 15,
  },
  occupantContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarOccupant: {
    backgroundColor: "#03a9f4",
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  chip: {
    backgroundColor: "#e1bee7",
    marginRight: 10,
  },
  chipInfo: {
    backgroundColor: "#c5cae9",
    marginRight: 10,
  },
  etaText: {
    fontSize: 14,
    color: "#6200ea",
    fontWeight: "500",
  },
});
