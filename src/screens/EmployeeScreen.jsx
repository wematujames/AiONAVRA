import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import RouteListScreen from "./RouteListScreen";
import AppointmentsScreen from "./AppointmentsScreen";
import HomeScreen from "./HomeScreen";
import UserListScreen from "./UsersListScreen";

const Tab = createMaterialBottomTabNavigator();

const EmployeeScreen = () => {
  useLayoutEffect(() => {});

  return (
    <Tab.Navigator
      initialRouteName="EAppointments"
      screenOptions={{
        headerShown: true,
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
      <Tab.Screen
        options={{
          tabBarIcon: () => <Feather size={20} name="home" />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Employees"
        options={{
          title: "Employees",
          tabBarIcon: () => (
            <MaterialCommunityIcons size={20} name="account-tie" />
          ),
        }}
        component={UserListScreen}
      />
      <Tab.Screen
        name="Appointments"
        component={AppointmentsScreen}
        options={{
          title: "Appointments",
          tabBarIcon: () => <MaterialIcons size={20} name="event" />,
        }}
      />

      <Tab.Screen
        name="Directions"
        options={{
          title: "Routes",
          tabBarIcon: () => (
            <MaterialCommunityIcons size={20} name="go-kart-track" />
          ),
        }}
        component={RouteListScreen}
      />
    </Tab.Navigator>
  );
};

export default EmployeeScreen;

const styles = StyleSheet.create({});
