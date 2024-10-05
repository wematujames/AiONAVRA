import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import { Card, Chip, Divider, Text } from "react-native-paper";
import ContentAction from "../components/ContentAction";
import { Context as AuthContext } from "../context/auth/authContext";
import { Context as NoticeContext } from "../context/notices/noticeContext";
import { useIsFocused } from "@react-navigation/native";
import Spinner from "../components/Spinner";

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

  // Destructure the notice from state, ensuring it's defined
  const notice = noticeState.notice;
  console.log(notice);

  if (!noticeState.notice) {
    return <Spinner loading={true} />;
  }

  return (
    <Spinner loading={noticeState.loading}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Card mode="elevated" style={styles.card}>
            <Card.Title
              title={
                <Text variant="headlineLarge" style={styles.title}>
                  {notice.title}
                </Text>
              }
              right={() => (
                <Chip mode="outlined" style={styles.priorityChip}>
                  {notice.priority}
                </Chip>
              )}
            />
            <Divider />
            <Card.Content>
              <Text variant="bodyLarge" style={styles.content}>
                {notice.content}
              </Text>
              <Text style={styles.createdByText}>
                By{" "}
                {notice.createdBy
                  ? `${notice.createdBy.fName} ${notice.createdBy.lName}`
                  : "N/A"}{" "}
                |{new Date(notice.createdAt).toLocaleDateString()}
              </Text>
            </Card.Content>
            <Divider />
            <Card.Content>
              <Text style={styles.attachmentsHeader}>Attachments:</Text>
              {notice.attachments.length > 0 ? (
                notice.attachments.map((url, index) => (
                  <Text key={index} style={styles.attachmentLink}>
                    {url}
                  </Text>
                ))
              ) : (
                <Text>No attachments</Text>
              )}
            </Card.Content>
          </Card>
          <ContentAction
            showFAB={authState.userType === "Admin"}
            onEdit={() =>
              navigation.navigate("EditNotice", {
                noticeDetails: notice,
              })
            }
            onDelete={() => deleteNotice(notice.id)}
          />
        </ScrollView>
      </SafeAreaView>
    </Spinner>
  );
};

export default NoticeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  card: {
    borderRadius: 15,
    elevation: 5,
    marginBottom: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#333",
  },
  priorityChip: {
    backgroundColor: "#ff4081", // Customize priority chip color
    color: "#fff",
  },
  content: {
    fontSize: 16,
    color: "#333",
    marginVertical: 10,
  },
  createdByText: {
    color: "#888",
    fontSize: 12,
  },
  attachmentsHeader: {
    fontWeight: "bold",
    marginTop: 10,
  },
  attachmentLink: {
    color: "#1E90FF",
    textDecorationLine: "underline",
  },
});
