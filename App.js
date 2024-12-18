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
import { Provider as NotificationsProvider } from "./src/context/notifications/notificationContext";
import { navigationRef } from "./src/utils/navigationRef";
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
import VisitorSignInScreen from "./src/screens/VisitorSignInScreen";
import NoficationsIcon from "./src/components/NoficationsIcon";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import EditUserScreen from "./src/screens/EditUserScreen";
import EditAppointmentScreen from "./src/screens/EditAppointmentScreen";
import VisitorOTPScreen from "./src/screens/VisitorOTPScreen";
import UserAccountScreen from "./src/screens/AccountScreen";
import * as Notifications from "expo-notifications";
import { handlePush, storePushMessage } from "./src/notifications/handlePush";
import { navigateNew } from "./src/utils/navigationRef";
import FeedbackListScreen from "./src/screens/FeedbackListScreen";
import CreateFeedbackScreen from "./src/screens/CreateFeedbackScreen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.ttf"),
  });

  useEffect(() => {
    // Listener for notifications while app is in the foreground
    const notificationListener = Notifications.addNotificationReceivedListener(
      async (notification) => {
        console.log(notification);
        storePushMessage(notification);
      },
    );

    // Listener for response to notifications (e.g., when the user taps a notification)
    const responseListener =
      Notifications.addNotificationResponseReceivedListener((response) => {
        handlePush(response.notification.request.content, navigateNew);
      });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView} ref={navigationRef}>
      <Stack.Navigator initialRouteName="SplashScreen">
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
          name="VisitorSignIn"
          component={VisitorSignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VisitorSignInOTP"
          component={VisitorOTPScreen}
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
          name="UserAccount"
          options={{ headerShown: true }}
          component={UserAccountScreen}
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
            title: "Appointment Details",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="CreateAppointment"
          component={CreateAppointmentScreen}
          options={{
            title: "Create Appointment",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="EditAppointment"
          component={EditAppointmentScreen}
          options={{
            title: "Update Appointment",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="EditUser"
          component={EditUserScreen}
          options={{
            title: "Edit User",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="FeedbackList"
          component={FeedbackListScreen}
          options={{ title: "Feedback" }}
        />
        <Stack.Screen
          name="CreateFeedback"
          component={CreateFeedbackScreen}
          options={{ title: "Feedback" }}
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
                    <NotificationsProvider>
                      <LocationProvider>
                        <PaperProvider theme={theme}>
                          <App />
                        </PaperProvider>
                      </LocationProvider>
                    </NotificationsProvider>
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
