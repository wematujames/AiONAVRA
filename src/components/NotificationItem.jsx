import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text, Avatar } from "react-native-paper";
import moment from "moment";
import { TouchableOpacity } from "react-native";

const NotificationItem = ({ notification }) => {
  const { title, body } = notification.request.content;
  const date = notification.date;

  return (
    <TouchableOpacity>
      <Card mode="contained" style={styles.card}>
        <Card.Title
          title={title}
          subtitle={moment(date).format("MMMM Do YYYY, h:mm:ss a")}
          left={(props) => <Avatar.Icon {...props} icon="bell" />}
        />
        <Card.Content>
          <Text>{body}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 5,
    borderRadius: 3,
  },
});

export default NotificationItem;
