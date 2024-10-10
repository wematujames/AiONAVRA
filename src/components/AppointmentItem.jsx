import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Card, Avatar, IconButton, useTheme } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const AppointmentItem = ({ appointment }) => {
  const navigation = useNavigation();
  const theme = useTheme();

  const statusColor = {
    pending: theme.colors.secondary,
    confirmed: theme.colors.primary,
    canceled: theme.colors.error,
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate("AppointmentDetail", { id: appointment.id })
      }
    >
      <Card mode="contained" style={styles.card}>
        <Card.Title
          title={appointment.title}
          titleStyle={styles.titleText}
          subtitle={`${appointment.employee.fName} ${appointment.employee.lName} - ${appointment.employee.jobTitle}`}
          left={(props) => (
            <Avatar.Icon {...props} icon="account-outline" size={40} />
          )}
          right={(props) => (
            <IconButton {...props} icon="chevron-right" size={30} />
          )}
        />

        <Card.Content>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="account-outline"
                size={22}
                color={theme.colors.primary}
              />
              <Text style={styles.boldText}>
                Visitor: {appointment.visitor.fName} {appointment.visitor.lName}
              </Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="check-circle-outline"
                size={22}
                color={statusColor[appointment.status] || theme.colors.backdrop}
              />
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: statusColor[appointment.status] },
                ]}
              >
                <Text style={styles.statusText}>
                  {appointment.status.charAt(0).toUpperCase() +
                    appointment.status.slice(1)}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="clock-outline"
                size={22}
                color={theme.colors.primary}
              />
              <Text style={styles.description}>
                {appointment.date.split("GMT")[0]} • {appointment.duration}{" "}
                min(s)
              </Text>
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default AppointmentItem;

const styles = StyleSheet.create({
  cardContainer: {
    // marginVertical: 5,
  },
  card: {
    marginBottom: 5,
    borderBottomWidth: 0.2,
    backgroundColor: "#fff",
    borderBottomColor: "#888",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  boldText: {
    marginLeft: 10,
    color: "#333",
    fontWeight: "bold",
    fontSize: 15,
  },
  description: {
    marginLeft: 10,
    color: "#555",
    fontSize: 14,
  },
  statusBadge: {
    marginLeft: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  statusText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
});
