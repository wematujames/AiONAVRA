import { SafeAreaView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context as NoticeContext } from "../context/notices/noticeContext";
import NoticeForm from "../components/NoticeForm";

const EditNoticeScreen = ({ route }) => {
  const { noticeDetails } = route.params;

  const noticeContext = useContext(NoticeContext);

  const { updateNotice } = noticeContext;

  return (
    <SafeAreaView>
      <NoticeForm
        routeDetail={noticeDetails}
        onSubmit={updateNotice}
        title="Update Notice"
      />
    </SafeAreaView>
  );
};

export default EditNoticeScreen;

const styles = StyleSheet.create({});
