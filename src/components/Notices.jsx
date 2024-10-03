import { FlatList, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import { Context as NoticeContext } from "../context/notices/noticeContext";
import NoticeCard from "./NoticeCard";

const Notices = () => {
  const noticeContext = useContext(NoticeContext);

  const { state } = noticeContext;

  return (
    <View style={styles.notices}>
      <FlatList
        keyExtractor={(i) => i._id}
        data={state.notices}
        renderItem={({ item }) => <NoticeCard notice={item} />}
      />
    </View>
  );
};

export default Notices;

const styles = StyleSheet.create({
  notices: {
    // marginVertical: 10,
    // marginVertical: 10,
  },
});
