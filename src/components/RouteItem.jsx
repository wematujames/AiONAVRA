import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Card, Text, Avatar, Button } from "react-native-paper";
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
      <Card mode="contained" style={styles.card}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Avatar.Icon
              size={30}
              icon="road"
              label={routeItem.name.substring(0, 2).toUpperCase()}
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{routeItem.name}</Text>
              <Text style={styles.routeMeta}>
                Floor {routeItem.floor} • ETA {routeItem.eta}
              </Text>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <Button mode="text" icon="stairs" style={styles.chip}>
              {routeItem.elevation}
            </Button>
          </View>
        </View>

        {/* <Card.Content>
          <Text variant="bodyMedium" style={styles.description}>
            {routeItem.description.length > 50
              ? `${routeItem.description.substring(0, 50)}...`
              : routeItem.description}
          </Text>
        </Card.Content> */}

        <View style={styles.infoContainer}>
          <Button icon="account" mode="text" style={styles.infoText}>
            {getOccupantName()}
          </Button>
          <Button mode="text" style={styles.infoText}>
            {routeItem.occupant?.fName && "Out of office"}
          </Button>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  routeMeta: {
    color: "#666",
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  ratingContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  container: {
    marginVertical: 5,
  },
  card: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#faf9f6",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    color: "#7f8c8d",
    fontSize: 14,
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    marginRight: 10,
  },
});

export default RouteItem;
