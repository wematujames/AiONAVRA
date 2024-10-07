import { ScrollView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context as NoticeContext } from "../context/notices/noticeContext";
import NoticeForm from "../components/NoticeForm";

const EditNoticeScreen = ({ route }) => {
  const { noticeDetails } = route.params;

  const noticeContext = useContext(NoticeContext);

  const { updateNotice } = noticeContext;

  return (
    <ScrollView style={styles.container}>
      <NoticeForm
        noticeDetail={noticeDetails}
        onSubmit={updateNotice}
        title="Update Notice"
      />
    </ScrollView>
  );
};

export default EditNoticeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F9FC",
    padding: 10,
  },
});
