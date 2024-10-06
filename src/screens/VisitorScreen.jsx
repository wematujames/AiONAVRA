import { StyleSheet } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import EnquiriesScreen from "./EnquiriesScreen";
import AppointmentsScreen from "./AppointmentsScreen";
import RouteListScreen from "./RouteListScreen";

const Tab = createMaterialBottomTabNavigator();

const VisitorScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Appointments">
      <Tab.Screen
        options={{
          tabBarIcon: () => <AntDesign size={20} name="questioncircleo" />,
        }}
        name="Enquiries"
        component={EnquiriesScreen}
      />

      <Tab.Screen
        name="Directions"
        options={{
          title: "Directions",
          tabBarIcon: () => (
            <MaterialCommunityIcons size={20} name="go-kart-track" />
          ),
        }}
        component={RouteListScreen}
      />

      <Tab.Screen
        name="Tracks"
        component={AppointmentsScreen}
        options={{
          title: "Appointments",
          tabBarIcon: () => <MaterialIcons size={20} name="event" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default VisitorScreen;

const styles = StyleSheet.create({});
