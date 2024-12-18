import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Card, Divider, Icon, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const NoticeCard = ({ notice }) => {
  const navigation = useNavigation();

  const { createdBy = { fName: "Unknown", lName: "User" } } = notice;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("NoticeDetail", { id: notice.id })}
    >
      <Card mode="contained" style={styles.cardStyle}>
        <Card.Title
          title={
            <Text
              variant="titleLarge"
              style={[styles.title, { alignSelf: "center" }]}
            >
              <Icon source="book" size={20} color="purple" />
              {notice.title}
            </Text>
          }
          right={() => (
            <Button mode="text" style={styles.priorityChip}>
              <MaterialCommunityIcons name="star" size={16} /> {notice.priority}
            </Button>
          )}
        />
        <Divider style={{ marginTop: -20, marginBottom: 10 }} />
        <Card.Content>
          <Text style={styles.content}>
            {notice.content.substring(0, 150)}
            {notice.content.length > 150 && "..."}
          </Text>
        </Card.Content>
        <Divider style={{ marginTop: 15, marginBottom: -10 }} />
        <Card.Actions style={styles.actions}>
          <Button mode="text" style={styles.createdByText}>
            <MaterialCommunityIcons name="account" size={16} />{" "}
            {createdBy.fName} {createdBy.lName} •{" "}
            {new Date(notice.createdAt).toLocaleDateString()}
          </Button>

          <Button
            compact
            mode="text"
            style={{ marginLeft: "auto" }}
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
    marginVertical: 5,
  },
  cardStyle: {
    borderRadius: 5,
    backgroundColor: "#faf9f6",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
  },
  createdByText: {
    color: "#888",
    fontSize: 12,
    marginLeft: -5,
  },
  content: {
    fontSize: 16,
    color: "#333",
    lineHeight: 20,
  },
  actions: {
    justifyContent: "flex-end",
  },
  priorityChip: {
    marginRight: 10,
    fontWeight: "bold",
  },
});
