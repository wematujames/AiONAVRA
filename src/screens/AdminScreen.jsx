import { StyleSheet } from "react-native";
import React from "react";
import FeedbackListScreen from "./FeedbackListScreen";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import UsersListScreen from "./UsersListScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RouteListScreen from "./RouteListScreen";
import NotificationsIcon from "../components/NoficationsIcon";
import AppointmentsScreen from "./AppointmentsScreen";

const Drawer = createDrawerNavigator();

const AdminScreen = ({}) => {
  return (
    <Drawer.Navigator
      initialRouteName="UsersListScreen"
      screenOptions={{
        headerShown: true,
        drawerType: "front",
        headerTintColor: "black",
        headerRight: () => <NotificationsIcon />,
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
        name="Appointments"
        component={AppointmentsScreen}
        options={{
          title: "Appointments",
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
          title: "Employees",
          drawerIcon: () => (
            <MaterialIcons size={20} name="supervised-user-circle" />
          ),
        }}
      />

      {/* <Drawer.Screen
        name="FeedbackList"
        component={FeedbackListScreen}
        options={{
          title: "Feedback",
          drawerIcon: () => <MaterialIcons size={20} name="feedback" />,
        }}
      /> */}
    </Drawer.Navigator>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({});
