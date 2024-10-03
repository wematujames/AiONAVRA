import { FlatList, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context as NoticeContext } from "../context/notices/noticeContext";
import Notice from "./NoticeItem";

const Notices = () => {
  const noticeContext = useContext(NoticeContext);

  const { state } = noticeContext;

  return (
    <FlatList
      keyExtractor={(i) => i._id}
      data={state.notices}
      renderItem={({ item }) => <Notice notice={item} />}
    />
  );
};

export default Notices;

const styles = StyleSheet.create({});
