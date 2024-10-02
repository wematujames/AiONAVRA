import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CreateTrackScreen from './CreateTrackScreen'
import AccountScreen from './AccountScreen'
import TrackListScreen from './TrackListScreen'
import { MaterialCommunityIcons, Feather, FontAwesome5 } from "@expo/vector-icons"
const Tab = createBottomTabNavigator()

const VisitorScreen = () => {
    
  return (
    <Tab.Navigator>
        <Tab.Screen 
        name='CreateTrack' 
        options={{
          title: "Create Track",
          tabBarIcon: () => <MaterialCommunityIcons name="go-kart-track"/> 
        }} 
        component={CreateTrackScreen} 
        />
        <Tab.Screen options={{tabBarIcon: () => <Feather name="user"/> }} name='Account' component={AccountScreen} />
        <Tab.Screen 
        name='Tracks' 
        component={TrackListScreen} 
        options={{
          title: "Track List",
          tabBarIcon: () => <FontAwesome5 name="list"/> 
        }}
        />
    </Tab.Navigator>
  )
}

export default VisitorScreen

const styles = StyleSheet.create({})