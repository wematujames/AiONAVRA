import { StyleSheet, View, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Context as UserContext } from "../context/users/userContext";
import { Context as AuthContext } from "../context/auth/authContext";
import { Text, Card, Avatar, IconButton, Button } from "react-native-paper";
import Spinner from "../components/Spinner";
import ContentAction from "../components/ContentAction";
const UserDetail = ({ route, navigation }) => {
  const { id: userId } = route.params;
  const authContext = useContext(AuthContext);
  const isFocused = useIsFocused();
  const userContext = useContext(UserContext);
  const { state: authState } = authContext;
  const { state, getUser } = userContext;

  useEffect(() => {
    getUser(userId);
  }, [isFocused, userId]);

  const user = state.user;
  console.log("user details", state.user);
  if (state.loading || !state.user) return <Spinner loading={true} />;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Icon size={80} icon="account" style={styles.avatar} />
        <Text style={styles.userName}>
          {user.fName} {user.lName}
        </Text>
        <Text
          style={[
            styles.userTypeText,
            { backgroundColor: getBadgeColor(user.userType) },
          ]}
        >
          {user.userType}
        </Text>
      </View>
      <Card mode="contained" style={styles.card}>
        <Card.Content>
          <View style={styles.row}>
            <IconButton icon="email" size={20} iconColor="#663399" />
            <Text style={styles.value}>{user.email}</Text>
          </View>

          <View style={styles.row}>
            <IconButton icon="phone" size={20} iconColor="#663399" />
            <Text style={styles.value}>{user.phone}</Text>
          </View>

          {user.userType === "Employee" && (
            <View style={styles.row}>
              <IconButton icon="account-tie" size={20} iconColor="#663399" />
              <Text style={styles.value}>{user.employeeId}</Text>
            </View>
          )}

          <View style={styles.row}>
            <IconButton icon="office-building" size={20} iconColor="#663399" />
            <Text style={styles.value}>
              {user.inOffice !== null
                ? user.inOffice
                  ? "In Office"
                  : "Out of Office"
                : "N/A"}
            </Text>
          </View>

          <View style={styles.row}>
            <IconButton icon="domain" size={20} iconColor="#663399" />
            <Text style={styles.value}>{user.organization?.name}</Text>
          </View>

          {user.office ? (
            <View style={styles.row}>
              <IconButton icon="map-marker" size={20} iconColor="#663399" />
              <Text style={styles.value}>{user.office.name}</Text>
            </View>
          ) : (
            <Text style={styles.noOfficeText}>No office assigned</Text>
          )}
        </Card.Content>

        <Card.Actions style={styles.cardActions}>
          <Button
            mode="contained"
            onPress={() =>
              navigation.navigate("RouteDetail", {
                id: user.office.id,
              })
            }
            style={styles.actionButton}
            disabled={!user.office}
          >
            Go to office
          </Button>
        </Card.Actions>
      </Card>
      <ContentAction
        showFAB={authState.userType === "Admin"}
        onEdit={() =>
          navigation.navigate("EditUser", { userDetail: state.user })
        }
        onDelete={() => deleteRoute(auth.user.id)}
      />
    </ScrollView>
  );
};

const getBadgeColor = (userType) => {
  switch (userType) {
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

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: "#f7f7f7",
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    backgroundColor: "#663399",
    marginBottom: 8,
  },
  userName: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  userTypeText: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 4,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
    padding: 16,
  },
  value: {
    fontSize: 16,
    color: "#555",
    marginLeft: 10,
    fontWeight: "bold",
  },
  loadingText: {
    textAlign: "center",
    fontSize: 18,
    color: "#666",
  },
  noOfficeText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  cardActions: {
    justifyContent: "flex-end",
  },
  actionButton: {
    marginTop: 10,
  },
});
