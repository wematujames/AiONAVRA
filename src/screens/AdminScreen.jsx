import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import FeedbackListScreen from "./FeedbackListScreen";
import CreateRouteScreen from "./CreateRouteScreen";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { DrawerToggleButton } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

const AdminScreen = ({}) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <DrawerToggleButton tintColor="black" />,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <MaterialIcons size={20} name="notifications" />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerType: "front",
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
        name="CreateRoute"
        component={CreateRouteScreen}
        options={{
          title: "Create New Route",
          drawerIcon: () => <MaterialIcons size={20} name="add" />,
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
