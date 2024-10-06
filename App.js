import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./src/screens/SignInScreen";
import AdminScreen from "./src/screens/AdminScreen";
import { Provider as AuthProvider } from "./src/context/auth/authContext";
import { Provider as LocationProvider } from "./src/context/track/locationContext";
import { Provider as TrackProvider } from "./src/context/track/trackContext";
import { Provider as NoticeProvider } from "./src/context/notices/noticeContext";
import { Provider as UsersProvider } from "./src/context/users/userContext";
import { Provider as DirectionsProvider } from "./src/context/directions/directionContext";
import { Provider as FeedbackProvider } from "./src/context/feedback/feedbackContext";
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
import CreateNoticeScreen from "./src/screens/CreateNoticeScreen";
import EditRouteScreen from "./src/screens/EditRouteScreen";
import EditNoticeScreen from "./src/screens/EditNoticeScreen";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
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
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen
          name="SelectUserType"
          options={{ headerBackVisible: false }}
          component={SelectUserTypeScreen}
        />

        <Stack.Screen
          name="Admin"
          options={{ headerShown: false, headerBackVisible: false }}
          component={AdminScreen}
        />
        <Stack.Screen
          name="Employee"
          options={({ navigation }) => ({
            title: "Home",
            headerShown: true,
            headerBackVisible: false,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Notifications")}
              >
                <MaterialIcons size={20} name="notifications" />
              </TouchableOpacity>
            ),
          })}
          component={EmployeeScreen}
        />
        <Stack.Screen
          name="Visitor"
          options={({ navigation }) => ({
            title: "Home",
            headerShown: true,
            headerBackVisible: false,
            headerShown: true,
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 15 }}
                onPress={() => navigation.navigate("Notifications")}
              >
                <MaterialIcons size={20} name="notifications" />
              </TouchableOpacity>
            ),
          })}
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
            title: "Notice Details",
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
          name="EditRoute"
          options={{
            title: "Update Route",
            headerShown: true,
          }}
          component={EditRouteScreen}
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
          name="RouteDetail"
          options={{
            title: "Route Details",
            headerShown: true,
          }}
          component={RouteDetailScreen}
        />
        <Stack.Screen
          name="CreateNotice"
          options={{
            title: "Publish Notice",
            headerShown: true,
          }}
          component={CreateNoticeScreen}
        />
        <Stack.Screen
          name="EditNotice"
          component={EditNoticeScreen}
          options={{
            title: "Update Notice",
            headerShown: true,
          }}
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
        <UsersProvider>
          <DirectionsProvider>
            <FeedbackProvider>
              <NoticeProvider>
                <TrackProvider>
                  <LocationProvider>
                    <PaperProvider>
                      <App />
                    </PaperProvider>
                  </LocationProvider>
                </TrackProvider>
              </NoticeProvider>
            </FeedbackProvider>
          </DirectionsProvider>
        </UsersProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
