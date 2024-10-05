import { ScrollView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import NoticeForm from "../components/NoticeForm";
import { Context as NoticeContext } from "../context/notices/noticeContext";

const CreateNoticeScreen = () => {
  const noticeContext = useContext(NoticeContext);
  const { createNotice } = noticeContext;

  return (
    <ScrollView style={styles.container}>
      <NoticeForm title="Enter Notice Details" onSubmit={createNotice} />
    </ScrollView>
  );
};

export default CreateNoticeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#F7F9FC",
    padding: 10,
  },
});
