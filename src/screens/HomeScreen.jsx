import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Notices from "../components/Notices";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Notices />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
