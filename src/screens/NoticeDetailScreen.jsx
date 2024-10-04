import { SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import ContentAction from "../components/ContentAction";
import { Context as AuthContext } from "../context/auth/authContext";
import { Context as NoticeContext } from "../context/notices/noticeContext";
import { useIsFocused } from "@react-navigation/native";
import Spinner from "../components/Spinner";
import { Text } from "react-native-paper";

const NoticeDetail = ({ navigation, route }) => {
  const { id: noticeId } = route.params;

  const isFocused = useIsFocused();
  const authContext = useContext(AuthContext);
  const noticeContext = useContext(NoticeContext);

  const { state: authState } = authContext;
  const { deleteNotice, getNotice, state: noticeState } = noticeContext;

  useEffect(() => {
    getNotice(noticeId);
  }, [isFocused, noticeId]);

  return (
    <Spinner loading={noticeState.loading}>
      <SafeAreaView>
        <Text>{noticeState.notice.title}</Text>
        <ContentAction
          showFAB={authState.userType === "Admin"}
          onEdit={() =>
            navigation.navigate("EditNotice", {
              noticeDetails: noticeState.notice,
            })
          }
          onDelete={() => deleteNotice(noticeState.notice.id)}
        />
      </SafeAreaView>
    </Spinner>
  );
};

export default NoticeDetail;

const styles = StyleSheet.create({});
