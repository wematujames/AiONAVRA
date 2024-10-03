import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Context as NoticeContext } from "../context/notices/noticeContext";

const NoticeDetailScreen = ({ route }) => {
  const noticeContext = useContext(NoticeContext);

  const { state } = noticeContext;

  const { id } = route.params;

  const notice = state.notices.find((i) => i._id === id);

  return (
    <View>
      <Text>Notice Id {notice._id}</Text>
      <Text>Title: {notice.title}</Text>
      <Text>Content: {notice.content}</Text>
    </View>
  );
};

export default NoticeDetailScreen;

const styles = StyleSheet.create({});
