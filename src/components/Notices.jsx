import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context as NoticeContext } from "../context/notices/noticeContext";
import Notice from "./NoticeItem";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Notices = ({ enableAdd }) => {
  const noticeContext = useContext(NoticeContext);
  const navigation = useNavigation();
  const { state } = noticeContext;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(i) => i._id}
        data={state.notices}
        renderItem={({ item }) => <Notice notice={item} />}
      />

      {enableAdd && (
        <FAB
          style={styles.fab}
          onPress={() => navigation.navigate("CreateNotice")}
          icon="plus"
        />
      )}
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
