import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { List } from "react-native-paper";

const FeedbackItem = ({ feedback }) => {
  const [expand, setExpand] = useState(false);

  return (
    <TouchableOpacity onPress={() => setExpand(!expand)}>
      <List.Item
        descriptionNumberOfLines={expand ? 0 : 4}
        title={"Rating " + feedback.rating}
        description={feedback.description}
        left={(props) => (
          <List.Icon {...props} icon="book-information-variant" />
        )}
      />
    </TouchableOpacity>
  );
};

export default FeedbackItem;

const styles = StyleSheet.create({});
