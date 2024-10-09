import {
  StyleSheet,
  Image,
  ImageBackground,
  ActivityIndicator,
  View,
} from "react-native";
import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/auth/authContext";
import { Text } from "react-native-paper";
import { BlurView } from "expo-blur";
import { useIsFocused } from "@react-navigation/native";

const SplashScreen = () => {
  const authContext = useContext(AuthContext);
  const { state, authenticate } = authContext;
  const isFocused = useIsFocused();

  useEffect(() => {
    authenticate(state.userType);
  }, [state.userType, isFocused]);

  return (
    <ImageBackground
      source={require("../../assets/login_1.jpg")}
      style={styles.background}
    >
      <BlurView intensity={5} style={styles.blurContainer}>
        <View style={styles.content}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="purple" />
          <Text style={styles.loadingText}>Just a moment...</Text>
        </View>
      </BlurView>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  blurContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: 100,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  loadingContainer: {
    alignItems: "center",
    marginBottom: 100,
  },
  loadingText: {
    color: "purple",
    fontSize: 18,
    marginTop: 10,
  },
});
