import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Avatar } from "react-native-paper";

const UserItem = ({ user }) => {
  const navigation = useNavigation();

  const getUserIcon = () => {
    switch (user.userType) {
      case "Admin":
        return "shield-account";
      case "Employee":
        return "account-tie";
      case "Visitor":
        return "account-clock";
      default:
        return "account";
    }
  };

  const getBadgeColor = () => {
    switch (user.userType) {
      case "Admin":
        return "#FF5733";
      case "Employee":
        return "#28A745";
      case "Visitor":
        return "#007BFF";
      default:
        return "#6c757d";
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("UserDetail", { id: user.id })}
    >
      <View style={styles.userInfo}>
        <View style={styles.leftSection}>
          <Avatar.Icon size={48} icon={getUserIcon()} style={styles.avatar} />
          <View>
            <Text style={styles.name}>
              {user.fName} {user.lName}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View
                style={[styles.badge, { backgroundColor: getBadgeColor() }]}
              >
                <Text style={styles.badgeText}>{user.userType}</Text>
              </View>
              {user.inOffice !== null && (
                <View style={[styles.badge, { backgroundColor: "#663399" }]}>
                  <Text style={styles.badgeText}>
                    {user.inOffice ? "In Office" : "Out Of Office"}
                  </Text>
                </View>
              )}
            </View>
          </View>
        </View>

        <View style={styles.rightSection}>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.phone}>{user.phone}</Text>
          {user.employeeId && (
            <Text style={styles.employeeId}>{user.employeeId}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 5,
    backgroundColor: "#fff",
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginRight: 10,
    backgroundColor: "#663399",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 5,
    marginRight: 5,
    alignSelf: "flex-start",
  },
  badgeText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
  rightSection: {
    alignItems: "flex-end",
  },
  email: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  phone: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  employeeId: {
    fontSize: 14,
    fontWeight: "500",
    color: "#663399",
  },
  inOffice: {
    fontSize: 12,
    color: "#663399",
    fontWeight: "500",
    marginTop: 5,
  },
});
