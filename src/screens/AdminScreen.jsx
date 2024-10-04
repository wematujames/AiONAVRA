import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FeedbackListScreen from "./FeedbackListScreen";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import UsersListScreen from "./UsersListScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import RouteListScreen from "./RouteListScreen";

const Drawer = createDrawerNavigator();

const AdminScreen = ({}) => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        drawerType: "front",
        headerTintColor: "black",
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate("Notifications")}
          >
            <MaterialIcons size={20} name="notifications" />
          </TouchableOpacity>
        ),
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          drawerIcon: () => <MaterialIcons size={20} name="home" />,
        }}
      />

      <Drawer.Screen
        name="RouteList"
        component={RouteListScreen}
        options={{
          headerShown: true,
          title: "Routes",
          drawerLabel: "Routes",
          drawerIcon: () => <MaterialIcons size={20} name="alt-route" />,
        }}
      />

      <Drawer.Screen
        name="UsersListScreen"
        component={UsersListScreen}
        options={{
          title: "Users",
          drawerIcon: () => (
            <MaterialIcons size={20} name="supervised-user-circle" />
          ),
        }}
      />

      <Drawer.Screen
        name="Feedback"
        component={FeedbackListScreen}
        options={{
          title: "Feedback",
          drawerIcon: () => <MaterialIcons size={20} name="feedback" />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({});
