import { StyleSheet } from "react-native";
import { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/auth/authContext";
import { ActivityIndicator, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Center from "../components/Center";
const SplashScreen = () => {
  const authContext = useContext(AuthContext);

  const { state, authenticate } = authContext;

  useEffect(() => {
    authenticate(state.userType);
  }, [state.userType]);

  if (state.loading)
    return (
      <Center>
        <ActivityIndicator size={50} />
      </Center>
    );

  return (
    <SafeAreaView>
      <Text> Splash screen </Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
