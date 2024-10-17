import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Text, Avatar, List } from "react-native-paper";
import { formatDistanceToNow } from "date-fns";
import { FontAwesome } from "@expo/vector-icons";

const FeedbackItem = ({ feedback }) => {
  const [expand, setExpand] = useState(false);
  const { rating, description, createdAt, user, visitor } = feedback;

  return (
    <TouchableOpacity onPress={() => setExpand(!expand)}>
      <Card mode="contained" style={styles.card}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Avatar.Text
              size={45}
              label={`${user.fName[0]}${user.lName[0]}`}
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>
                {user?.fName || visitor.fName} {user.lName || visitor.lName}
              </Text>
              <Text style={styles.userDetails}>
                {user?.userType || visitor.userType} •{" "}
                {formatDistanceToNow(new Date(createdAt))} ago
              </Text>
            </View>
          </View>

          <View style={styles.ratingContainer}>
            {Array.from({ length: 5 }).map((_, i) => (
              <FontAwesome
                key={i}
                name={i < rating ? "star" : "star-o"}
                size={18}
                color={i < rating ? "#FFD700" : "#ccc"}
                style={styles.star}
              />
            ))}
          </View>
        </View>
        <List.Item
          contentStyle={{ marginTop: -35 }}
          descriptionStyle={styles.description}
          descriptionNumberOfLines={expand ? 0 : 3}
          description={description}
        />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    marginVertical: 5,
    backgroundColor: "#faf9f6",
    padding: 15,
    borderRadius: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    marginRight: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  userDetails: {
    fontSize: 12,
    color: "#666",
  },
  ratingContainer: {
    flexDirection: "row",
    marginVertical: 8,
  },
  star: {
    marginHorizontal: 2,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
    lineHeight: 20,
    margin: -15,
  },
});

export default FeedbackItem;
