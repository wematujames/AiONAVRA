import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./src/screens/SignInScreen";
import AdminScreen from "./src/screens/AdminScreen";
import { Provider as AuthProvider } from "./src/context/auth/authContext";
import { Provider as LocationProvider } from "./src/context/track/locationContext";
import { Provider as TrackProvider } from "./src/context/track/trackContext";
import { Provider as NoticeProvider } from "./src/context/notices/noticeContext";
import { setNavigation } from "./src/utils/navigationRef";
import SplashScreen from "./src/screens/SplashScreen";
import EmployeeScreen from "./src/screens/EmployeeScreen";
import VisitorScreen from "./src/screens/VisitorScreen";
import SelectUserTypeScreen from "./src/screens/SelectUserTypeScreen";
import { PaperProvider, ThemeProvider } from "react-native-paper";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import NoticeDetailScreen from "./src/screens/NoticeDetailScreen";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import CreateUserScreen from "./src/screens/CreateUserScreen";
import CreateRouteScreen from "./src/screens/CreateRouteScreen";
import UserDetail from "./src/screens/UserDetail";
import RouteDetailScreen from "./src/screens/RouteDetailScreen";

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
          options={{ headerShown: false, headerBackVisible: false }}
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
        <Stack.Screen
          name="NoticeDetail"
          options={{
            headerShown: true,
          }}
          component={NoticeDetailScreen}
        />
        <Stack.Screen
          name="CreateUser"
          options={{
            title: "Create User",
            headerShown: true,
          }}
          component={CreateUserScreen}
        />
        <Stack.Screen
          name="CreateRoute"
          options={{
            title: "Create Route",
            headerShown: true,
          }}
          component={CreateRouteScreen}
        />
        <Stack.Screen
          name="UserDetail"
          options={{
            title: "User Details",
            headerShown: true,
          }}
          component={UserDetail}
        />
        <Stack.Screen
          name="RouteDetial"
          options={{
            title: "Create Route",
            headerShown: true,
          }}
          component={RouteDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function () {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "tomato",
      secondary: "yellow",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NoticeProvider>
          <TrackProvider>
            <LocationProvider>
              <PaperProvider>
                <App />
              </PaperProvider>
            </LocationProvider>
          </TrackProvider>
        </NoticeProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
