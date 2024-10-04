import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import NoticeForm from "../components/NoticeForm";
import { Context as NoticeContext } from "../context/notices/noticeContext";

const CreateNoticeScreen = () => {
  const noticeContext = useContext(NoticeContext);
  const { createNotice } = noticeContext;

  return <NoticeForm title="Enter Notice Details" onSubmit={createNotice} />;
};

export default CreateNoticeScreen;

const styles = StyleSheet.create({});
