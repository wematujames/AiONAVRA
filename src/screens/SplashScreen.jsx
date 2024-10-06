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

const SplashScreen = () => {
  const authContext = useContext(AuthContext);
  const { state, authenticate } = authContext;

  useEffect(() => {
    authenticate(state.userType);
  }, [state.userType]);

  return (
    <ImageBackground
      source={require("../../assets/3.jpg")}
      style={styles.background}
    >
      <BlurView intensity={5} style={styles.blurContainer}>
        <View style={styles.content}>
          <Image
            source={require("../../assets/2.jpg")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>AiONAVRA</Text>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
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
