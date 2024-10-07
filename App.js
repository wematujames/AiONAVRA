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
import { Provider as AppointmentProvider } from "./src/context/appointments/appointmentContext";
import { Provider as EnquiriesProvider } from "./src/context/enquiries/enquiriesContext";
import { setNavigation } from "./src/utils/navigationRef";
import * as SplashScreen from "expo-splash-screen";
import CustomSplashScreen from "./src/screens/SplashScreen";
import EmployeeScreen from "./src/screens/EmployeeScreen";
import VisitorScreen from "./src/screens/VisitorScreen";
import SelectUserTypeScreen from "./src/screens/SelectUserTypeScreen";
import { PaperProvider } from "react-native-paper";
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
import AppoinmentDetailScreen from "./src/screens/AppoinmentDetailScreen";
import CreateAppointmentScreen from "./src/screens/CreateAppointmentScreen";
import NoficationsIcon from "./src/components/NoficationsIcon";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import EditUserScreen from "./src/screens/EditUserScreen";
import EditAppointmentScreen from "./src/screens/EditAppointmentScreen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <NavigationContainer
      onReady={onLayoutRootView}
      ref={(navigator) => {
        setNavigation(navigator);
      }}
    >
      <Stack.Navigator initialRouteName="SignIn">
        {/* Splashscreen or initial screen */}
        <Stack.Screen
          name="SplashScreen"
          options={{ headerShown: false }}
          component={CustomSplashScreen}
        />

        {/* Auth */}
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectUserType"
          options={{ headerBackVisible: false, headerShown: false }}
          component={SelectUserTypeScreen}
        />

        <Stack.Screen
          name="Admin"
          options={{
            headerShown: false,
            headerBackVisible: false,
          }}
          component={AdminScreen}
        />
        <Stack.Screen
          name="Employee"
          options={{
            title: "Home",
            headerShown: true,
            headerBackVisible: false,
            headerRight: () => <NoficationsIcon />,
          }}
          component={EmployeeScreen}
        />
        <Stack.Screen
          name="Visitor"
          options={{
            title: "Home",
            headerShown: true,
            headerBackVisible: false,
            headerShown: true,
            headerRight: () => <NoficationsIcon />,
          }}
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
        <Stack.Screen
          name="AppointmentDetail"
          component={AppoinmentDetailScreen}
          options={{
            title: "Update Notice",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="CreateAppointment"
          component={CreateAppointmentScreen}
          options={{
            title: "Update Notice",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="EditAppointment"
          component={EditAppointmentScreen}
          options={{
            title: "Update Notice",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="EditUser"
          component={EditUserScreen}
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
    },
    fonts: {
      ...DefaultTheme.fonts,
      bold: {
        fontFamily: "Montserrat-Bold",
        fontWeight: "bold",
      },
      medium: {
        fontFamily: "Montserrat-Regular", // Adjust to your font's medium variant if available
        fontWeight: "500",
      },
      regular: {
        fontFamily: "Montserrat-Regular",
        fontWeight: "normal",
      },
      light: {
        fontFamily: "Montserrat-Light",
        fontWeight: "300",
      },
      thin: {
        fontFamily: "Montserrat-Thin",
        fontWeight: "100",
      },
    },
    typescale: {
      displayLarge: {
        fontFamily: "Montserrat-Bold",
        fontSize: 57,
        fontWeight: "bold",
        lineHeight: 64,
      },
      headlineLarge: {
        fontFamily: "Montserrat-Regular",
        fontSize: 32,
        fontWeight: "normal",
        lineHeight: 40,
      },
      bodyLarge: {
        fontFamily: "Montserrat-Regular",
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 24,
      },
    },
  };

  return (
    <AuthProvider>
      <UsersProvider>
        <DirectionsProvider>
          <FeedbackProvider>
            <NoticeProvider>
              <EnquiriesProvider>
                <AppointmentProvider>
                  <TrackProvider>
                    <LocationProvider>
                      <PaperProvider theme={theme}>
                        <App />
                      </PaperProvider>
                    </LocationProvider>
                  </TrackProvider>
                </AppointmentProvider>
              </EnquiriesProvider>
            </NoticeProvider>
          </FeedbackProvider>
        </DirectionsProvider>
      </UsersProvider>
    </AuthProvider>
  );
}
