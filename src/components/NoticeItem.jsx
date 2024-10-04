import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  Button,
  Card,
  Divider,
  IconButton,
  Text,
  useTheme,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const NoticeCard = ({ notice }) => {
  const theme = useTheme();

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("NoticeDetail", { id: notice._id })}
    >
      <Card mode="contained">
        <Card.Title
          right={(props) => (
            <IconButton {...props} icon="new-box" onPress={() => {}} />
          )}
          title={<Text variant="titleLarge">{notice.title}</Text>}
        />

        <Divider style={{ marginTop: -15, marginBottom: 10 }} />

        <Card.Content style={{}}>
          <Text>
            {notice.content.substring(0, 250)}
            {notice.content.length > 250 && "..."}
          </Text>
          <Text style={{ color: theme.colors.backdrop, marginLeft: "auto" }}>
            By {notice.createdBy} | {notice.createdAt}
          </Text>
        </Card.Content>

        <Divider />

        <Card.Actions
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginVertical: -5,
          }}
        >
          <Button compact labelStyle={{}} mode="text">
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
  },
});
