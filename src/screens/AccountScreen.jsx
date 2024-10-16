import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from "react-native";
import { Context as AuthContext } from "../context/auth/authContext";
import { Button, Card, Avatar, List } from "react-native-paper";
import { MaterialIcons, Feather, FontAwesome } from "@expo/vector-icons";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { state, logout } = useContext(AuthContext);

  const user = state?.user;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card mode="flat" style={styles.profileCard}>
          <View style={styles.avatarSection}>
            <Avatar.Icon size={100} icon="account" style={styles.avatar} />
            <Text
              style={styles.nameText}
            >{`${user?.fName} ${user?.lName}`}</Text>
            <Text style={styles.userTypeText}>{user?.userType}</Text>
          </View>
          <Card.Content>
            <List.Section style={styles.detailsSection}>
              <List.Item
                title={user?.email}
                description="Email"
                left={() => (
                  <MaterialIcons name="email" size={24} color="#1e88e5" />
                )}
                style={styles.listItem}
              />
              <List.Item
                title={user?.phone}
                description="Phone"
                left={() => <Feather name="phone" size={24} color="#1e88e5" />}
                style={styles.listItem}
              />
              <List.Item
                title={user?.userType}
                description="Account Type"
                left={() => (
                  <FontAwesome name="user" size={24} color="#1e88e5" />
                )}
                style={styles.listItem}
              />
            </List.Section>
          </Card.Content>
        </Card>

        <Spacer>
          <Button mode="contained" onPress={logout} style={styles.logoutButton}>
            Logout
          </Button>
        </Spacer>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    marginBottom: 30,
    padding: 20,
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  nameText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  userTypeText: {
    fontSize: 16,
    color: "#777",
  },
  detailsSection: {
    marginTop: 10,
  },
  listItem: {
    paddingVertical: 10,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },
  logoutButton: {
    backgroundColor: "#ff5252",
  },
});

export default AccountScreen;
