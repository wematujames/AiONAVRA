import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context as NoticeContext } from "../context/notices/noticeContext";
import Notice from "./NoticeItem";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Spinner from "./Spinner";
import AddContentFAB from "./AddContentFAB";

const Notices = ({ enableAdd }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const noticeContext = useContext(NoticeContext);
  const { state, getNotices } = noticeContext;

  useEffect(() => {
    getNotices();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <Spinner loading={state.loading}>
        <FlatList
          keyExtractor={(i) => i.id}
          data={state.notices}
          renderItem={({ item }) => <Notice notice={item} />}
        />

        <AddContentFAB
          showFAB={enableAdd}
          onAdd={() => navigation.navigate("CreateNotice")}
        />
      </Spinner>
    </SafeAreaView>
  );
};

export default Notices;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  searchBar: {
    borderRadius: 10,
  },
});
