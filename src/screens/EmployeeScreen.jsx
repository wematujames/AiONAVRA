import { StyleSheet } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import DirectionsScreen from "./DirectionsScreen";
import EAppointmentsScreen from "./EAppointmentsScreen";
import HomeScreen from "./HomeScreen";
const Tab = createMaterialBottomTabNavigator();

const EmployeeScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Account">
      <Tab.Screen
        options={{
          tabBarIcon: () => <Feather size={20} name="home" />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Directions"
        options={{
          title: "Directions",
          tabBarIcon: () => (
            <MaterialCommunityIcons size={20} name="go-kart-track" />
          ),
        }}
        component={DirectionsScreen}
      />

      <Tab.Screen
        name="EAppointment"
        component={EAppointmentsScreen}
        options={{
          title: "Appointments",
          tabBarIcon: () => <MaterialIcons size={20} name="event" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default EmployeeScreen;

const styles = StyleSheet.create({});
