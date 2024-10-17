import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context as NotificationContext } from "../context/notifications/notificationContext";
import NotificationItem from "../components/NotificationItem";
import { useIsFocused } from "@react-navigation/native";

const NotificationsScreen = () => {
  const isFocused = useIsFocused();
  const notificationContext = useContext(NotificationContext);
  const { getNotifications, state } = notificationContext;

  useEffect(() => {
    getNotifications();
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={state.notifications}
        renderItem={({ item }) => <NotificationItem notification={item} />}
      />
    </SafeAreaView>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({});
