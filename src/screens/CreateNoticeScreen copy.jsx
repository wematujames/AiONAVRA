import { StyleSheet, View } from "react-native";
import React, { useContext } from "react";
// import CreateNoticeForm from "../components/NoticeForm";
import { Context as NoticeContext } from "../context/notices/noticeContext";
import { TextInput } from "react-native-paper";

const CreateNoticeScreen = () => {
  const noticeContext = useContext(NoticeContext);
  const { createNotice } = noticeContext;

  return (
    // <ScrollView>
    // <CreateNoticeForm title="Enter Notice Details" onSubmit={createNotice} />
    <View style={styles.container}>
      <TextInput />
    </View>
    // </ScrollView>
    // <View style={styles.container}>
    //   <ScrollView contentContainerStyle={styles.scrollContainer}>
    //   </ScrollView>

    // </View>
  );
};

export default CreateNoticeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    padding: 10,
  },
  // scrollContainer: {
  //   paddingBottom: 20,
  // },
});
