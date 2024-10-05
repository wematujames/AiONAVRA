import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Card, Divider, Text, Chip } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const NoticeCard = ({ notice }) => {
  const navigation = useNavigation();

  const { createdBy = { fName: "Unknown", lName: "User" } } = notice;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("NoticeDetail", { id: notice.id })}
    >
      <Card mode="elevated" style={styles.cardStyle}>
        <Card.Title
          title={
            <Text variant="titleLarge" style={styles.title}>
              {notice.title}
            </Text>
          }
          subtitle={
            <Text style={styles.createdByText}>
              By {createdBy.fName} {createdBy.lName} |{" "}
              {new Date(notice.createdAt).toLocaleDateString()}
            </Text>
          }
          right={() => (
            <Chip mode="outlined" style={styles.priorityChip}>
              {notice.priority}
            </Chip>
          )}
        />
        <Divider style={{ marginTop: -5, marginBottom: 10 }} />
        <Card.Content>
          <Text style={styles.content}>
            {notice.content.substring(0, 150)}
            {notice.content.length > 150 && "..."}
          </Text>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button
            compact
            mode="text"
            onPress={() =>
              navigation.navigate("NoticeDetail", { id: notice.id })
            }
          >
            Read More
          </Button>
        </Card.Actions>
      </Card>
    </TouchableOpacity>
  );
};

export default NoticeCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 5,
    elevation: 5,
  },
  cardStyle: {
    borderRadius: 15,
    backgroundColor: "#ffffff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  createdByText: {
    color: "#888",
    marginTop: 5,
    fontSize: 12,
  },

  content: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  actions: {
    justifyContent: "flex-end",
  },
  priorityChip: {
    marginRight: 10,
    // backgroundColor: theme.colors.primary,
    color: "#fff",
  },
});
