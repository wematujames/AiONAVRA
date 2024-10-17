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
      onPress={() => navigation.navigate("UserDetail", { id: user._id })}
    >
      <View style={styles.userInfo}>
        <View style={styles.leftSection}>
          <Avatar.Icon size={48} icon={getUserIcon()} style={styles.avatar} />
          <View>
            <Text style={styles.name}>
              {user.fName} {user.lName}
            </Text>
            <Text style={styles.email}>{user.email}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.phone}>{user.phone}</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightSection}>
          <View style={{}}>
            <Text style={[styles.badge]}>
              {user.employeeId && (
                <Text style={styles.employeeId}>{user.employeeId}</Text>
              )}
            </Text>
            <View style={styles.badge}>
              <Text style={[styles.badgeText, { color: getBadgeColor() }]}>
                {user.userType}
              </Text>
            </View>

            {user.inOffice !== null && (
              <View style={[styles.badge]}>
                <Text style={[styles.badgeText, { fontWeight: "bold" }]}>
                  {user.inOffice ? "In Office" : "Out Of Office"}
                </Text>
              </View>
            )}
          </View>
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
    paddingRight: 10,
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
    marginBottom: 5,
  },
  badge: {
    paddingHorizontal: 3,
    // paddingVertical: 3,
    borderRadius: 5,
    marginTop: 5,
    marginRight: 5,
    alignSelf: "flex-end",
  },
  badgeText: {
    fontSize: 14,
    color: "#663399",
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
