import { StyleSheet } from 'react-native'
import React from 'react'
import CreateTrackScreen from './CreateTrackScreen'
import AccountScreen from './AccountScreen'
import TrackListScreen from './TrackListScreen'
import { MaterialCommunityIcons, Feather, FontAwesome5 } from "@expo/vector-icons"
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => {
  return (
          <Tab.Navigator initialRouteName='Account'>
        <Tab.Screen 
          name='CreateTrack' 
          component={CreateTrackScreen} 
          options={{
            title: "Create Track",
            tabBarIcon: () => <MaterialCommunityIcons name="go-kart-track"/> 
          }} 
        />
        
        <Tab.Screen 
          name='Account' 
          component={AccountScreen} 
          options={{tabBarIcon: () => <Feather name="user"/> }} 
        />

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

export default HomeScreen

const styles = StyleSheet.create({})