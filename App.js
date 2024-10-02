import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AdminScreen from './src/screens/AdminScreen';
import { Provider as AuthProvider } from "./src/context/auth/authContext";
import { Provider as LocationProvider } from "./src/context/track/locationContext";
import { Provider as TrackProvider } from "./src/context/track/trackContext";
import { setNavigation } from './src/utils/navigationRef';
import SplashScreen from './src/screens/SplashScreen';
import EmployeeScreen from './src/screens/EmployeeScreen';
import VisitorScreen from './src/screens/VisitorScreen';
import SelectUserTypeScreen from './src/screens/SelectUserTypeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer ref={(navigator) => {setNavigation(navigator)}}>
        <Stack.Navigator initialRouteName='SplashScreen'>
          {/* Splashscreen or initial screen */}
          <Stack.Screen name='SplashScreen' options={{headerBackVisible: false}} component={SplashScreen} />

          {/* Auth */}
          <Stack.Screen name='SelectUserType' component={SelectUserTypeScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
          
          {/* Nested User type screen components */}
          <Stack.Screen name='Admin' options={{headerShown: false}} component={AdminScreen} />
          <Stack.Screen name='Employee' options={{headerShown: false}} component={EmployeeScreen} />
          <Stack.Screen name='Vistor' options={{headerShown: false}} component={VisitorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default function () {
  return (
    // <SafeAreaProvider>
    <ThemeProvider>
      <AuthProvider>
        <TrackProvider>
          <LocationProvider>
            <App/>
          </LocationProvider>
        </TrackProvider>
      </AuthProvider>
      </ThemeProvider>
    // </SafeAreaProvider>
  )
}
