import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const NoticeCard = ({ notice }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("NoticeDetail", { id: notice._id })}
    >
      <Card mode="elevated">
        <Card.Title title={notice.title} />
        <Card.Content>
          <Text>{notice.content}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default NoticeCard;

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
