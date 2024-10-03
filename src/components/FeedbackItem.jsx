import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const FeedbackItem = ({ feedback }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("FeedbackDetail", { id: feedback._id })
      }
    >
      <List.Item
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
