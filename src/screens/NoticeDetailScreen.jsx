import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Linking,
  View,
} from "react-native";
import React, { useContext, useEffect } from "react";
import {
  Card,
  Divider,
  Text,
  Title,
  Subheading,
  Icon,
} from "react-native-paper";
import ContentAction from "../components/ContentAction";
import { Context as AuthContext } from "../context/auth/authContext";
import { Context as NoticeContext } from "../context/notices/noticeContext";
import { useIsFocused } from "@react-navigation/native";
import Spinner from "../components/Spinner";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Import MaterialCommunityIcons

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

  const notice = noticeState.notice;

  if (!notice) {
    return <Spinner loading={true} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Card mode="contained" style={styles.card}>
          <Card.Title />

          <View style={{ flex: 1, alignItems: "center" }}>
            <Icon size={35} source="book" />
            <Title style={styles.title}>{notice.title}</Title>
          </View>

          <Divider style={{ marginBottom: 10 }} />

          <Card.Content>
            <Text style={styles.content}>{notice.content}</Text>
          </Card.Content>

          <Card.Content>
            <View style={styles.attachmentsContainer}>
              <Text style={styles.attachmentsHeader}>
                <MaterialCommunityIcons name="paperclip" size={16} />{" "}
                Attachments:
              </Text>
              <Text mode="outlined" style={styles.priorityChip}>
                <MaterialCommunityIcons name="star" size={12} />{" "}
                {notice.priority}
              </Text>
            </View>

            {notice.attachments.length > 0 ? (
              notice.attachments.map((url, index) => (
                <View style={styles.linksContainer}>
                  <MaterialCommunityIcons
                    name="link"
                    size={16}
                    style={styles.attachmentIcon}
                  />
                  <Text
                    key={index}
                    style={styles.attachmentLink}
                    onPress={() => Linking.openURL(url)}
                  >
                    {url}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={styles.noAttachmentsText}>No attachments</Text>
            )}
          </Card.Content>

          <Divider style={{ marginTop: 10 }} />

          <Card.Actions>
            <Subheading style={{ color: "#888", marginRight: "auto" }}>
              <MaterialCommunityIcons name="account" size={16} />{" "}
              {notice.createdBy
                ? `${notice.createdBy.fName} ${notice.createdBy.lName}`
                : "N/A"}
            </Subheading>

            <Subheading mode="outlined" style={{ color: "#888" }}>
              <MaterialCommunityIcons name="calendar" size={16} />{" "}
              {new Date(notice.createdAt).toLocaleDateString()}
            </Subheading>
          </Card.Actions>
        </Card>
        <ContentAction
          showFAB={authState.userType === "Admin"}
          onEdit={() =>
            navigation.navigate("EditNotice", {
              noticeDetails: notice,
            })
          }
          onDelete={() => deleteNotice(notice._id)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NoticeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faf9f6",
  },
  card: {
    borderRadius: 5,
    paddingTop: "40%",
    backgroundColor: "#faf9f6",
    padding: 5,
  },
  priorityChip: {
    marginBottom: 10,
    fontWeight: "bold",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    fontSize: 20,
    color: "#333",
    lineHeight: 25,
    marginBottom: 20,
  },
  attachmentsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linksContainer: {
    flexDirection: "row",
  },
  attachmentsHeader: {
    fontWeight: "bold",
  },
  attachmentLink: {
    color: "#1E90FF",
    marginVertical: 5,
    fontWeight: "bold",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  attachmentIcon: {
    marginRight: 10,
    alignSelf: "center",
  },
  noAttachmentsText: {
    color: "#888",
    fontStyle: "italic",
  },
});
