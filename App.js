import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import { Provider as AuthProvider } from "./src/context/auth/authContext";
import { Provider as LocationProvider } from "./src/context/track/locationContext";
import { Provider as TrackProvider } from "./src/context/track/trackContext";
import { setNavigation } from './src/utils/navigationRef';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer ref={(navigator) => {setNavigation(navigator)}}>
        <Stack.Navigator initialRouteName='SplashScreen'>
          <Stack.Screen name='SplashScreen' options={{headerBackVisible: false}} component={SplashScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
          <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name='TrackDetail' component={TrackDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default function () {
  return (
    <AuthProvider>
      <TrackProvider>
        <LocationProvider>
          <App/>
        </LocationProvider>
      </TrackProvider>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({

});
