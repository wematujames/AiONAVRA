import { StyleSheet } from "react-native";
import React from "react";
import FeedbackListScreen from "./FeedbackListScreen";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import UsersListScreen from "./UsersListScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RouteListScreen from "./RouteListScreen";
import NotificationsIcon from "../components/NoficationsIcon";

const Drawer = createDrawerNavigator();

const AdminScreen = ({}) => {
  // <SafeAreaView style={{ flex: 1 }}>
  return (
    <Drawer.Navigator
      initialRouteName="UsersListScreen"
      screenOptions={{
        drawerLabel: "Home",
        headerShown: true,
        drawerType: "front",
        headerTintColor: "black",
        headerRight: () => <NotificationsIcon />,
        // drawerStyle: {
        //   height: "90%", // Adjust this to limit the drawer height
        // },
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
        name="FeedbackList"
        component={FeedbackListScreen}
        options={{
          title: "Feedback",
          drawerIcon: () => <MaterialIcons size={20} name="feedback" />,
        }}
      />
    </Drawer.Navigator>
  );
  {
    /* </SafeAreaView> */
  }
};

export default AdminScreen;

const styles = StyleSheet.create({});
