import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./src/screens/SignInScreen";
import AdminScreen from "./src/screens/AdminScreen";
import { Provider as AuthProvider } from "./src/context/auth/authContext";
import { Provider as LocationProvider } from "./src/context/track/locationContext";
import { Provider as TrackProvider } from "./src/context/track/trackContext";
import { setNavigation } from "./src/utils/navigationRef";
import SplashScreen from "./src/screens/SplashScreen";
import EmployeeScreen from "./src/screens/EmployeeScreen";
import VisitorScreen from "./src/screens/VisitorScreen";
import SelectUserTypeScreen from "./src/screens/SelectUserTypeScreen";
import { PaperProvider, ThemeProvider } from "react-native-paper";
import NotificationsScreen from "./src/screens/NotificationsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      ref={(navigator) => {
        setNavigation(navigator);
      }}
    >
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* Splashscreen or initial screen */}
        <Stack.Screen
          name="SplashScreen"
          options={{ headerShown: false }}
          component={SplashScreen}
        />

        {/* Auth */}
        <Stack.Screen
          name="SelectUserType"
          options={{ headerBackVisible: false }}
          component={SelectUserTypeScreen}
        />
        <Stack.Screen name="SignIn" component={SignInScreen} />

        {/* Nested User type screen components */}
        <Stack.Screen
          name="Admin"
          options={{ headerShown: true, headerBackVisible: false }}
          component={AdminScreen}
        />
        <Stack.Screen
          name="Employee"
          options={{ headerShown: true, headerBackVisible: false }}
          component={EmployeeScreen}
        />
        <Stack.Screen
          name="Visitor"
          options={{ headerShown: true, headerBackVisible: false }}
          component={VisitorScreen}
        />

        <Stack.Screen
          name="Notifications"
          options={{ headerShown: true }}
          component={NotificationsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function () {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TrackProvider>
          <LocationProvider>
            <PaperProvider>
              <App />
            </PaperProvider>
          </LocationProvider>
        </TrackProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
