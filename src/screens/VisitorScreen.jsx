import { StyleSheet } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import DirectionsScreen from "./DirectionsScreen";
import EAppointmentsScreen from "./EAppointmentsScreen";
import EnquiriesScreen from "./EnquiriesScreen";

const Tab = createMaterialBottomTabNavigator();

const VisitorScreen = () => {
  return (
    <Tab.Navigator initialRouteName="Enquiries">
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
        component={DirectionsScreen}
      />

      <Tab.Screen
        name="Tracks"
        component={EAppointmentsScreen}
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
