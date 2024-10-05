import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Card, Chip, Text, Avatar } from "react-native-paper";

const RouteItem = ({ routeItem }) => {
  const navigation = useNavigation();

  const getOccupantName = () => {
    const { fName, lName, userType } = routeItem.occupant || {};
    return fName && lName ? `${fName} ${lName}` : "N/A";
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("RouteDetail", { id: routeItem.id })}
      style={styles.container}
    >
      <Card mode="elevated" style={styles.card}>
        <Card.Content>
          {/* Header with Name and Elevation Chip */}
          <View style={styles.headerContainer}>
            <Text variant="titleLarge" style={styles.title}>
              {routeItem.name}
            </Text>
            <Chip icon="stairs" mode="outlined" style={styles.chip}>
              {routeItem.elevation}
            </Chip>
          </View>

          {/* Description */}
          <Text variant="bodyMedium" style={styles.description}>
            {routeItem.description.length > 100
              ? `${routeItem.description.substring(0, 97)}...`
              : routeItem.description}
          </Text>

          {/* Info Section */}
          <View style={styles.infoContainer}>
            {/* Occupant Information */}
            <View style={styles.occupantContainer}>
              <Avatar.Text
                size={28}
                label={
                  routeItem.occupant?.fName?.[0] +
                  routeItem.occupant?.lName?.[0]
                }
                style={styles.avatar}
              />
              <Text style={styles.infoText}>{getOccupantName()}</Text>
            </View>

            {/* Floor and ETA */}
            <View style={styles.rightInfoContainer}>
              <Text style={styles.infoText}>Floor: {routeItem.floor}</Text>
              <Text style={styles.infoText}>ETA: {routeItem.eta}</Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 18,
    color: "#2c3e50",
  },
  chip: {
    backgroundColor: "#ecf0f1",
    borderRadius: 16,
    fontSize: 14,
    paddingHorizontal: 8,
  },
  description: {
    color: "#7f8c8d",
    fontSize: 14,
    marginBottom: 12,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  occupantContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginRight: 8,
    backgroundColor: "#3498db",
  },
  infoText: {
    fontSize: 14,
    color: "#34495e",
  },
  rightInfoContainer: {
    alignItems: "flex-end",
  },
});

export default RouteItem;
