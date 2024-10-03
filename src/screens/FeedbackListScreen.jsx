import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context as FeedbackContext } from "../context/feedback/feedbackContext";
import FeedbackItem from "../components/FeedbackItem";

const FeedbackListScreen = () => {
  const feedbackContext = useContext(FeedbackContext);
  const { state } = feedbackContext;

  return (
    <SafeAreaView>
      <FlatList
        data={state.feedbacks}
        keyExtractor={(i) => i._id}
        renderItem={({ item }) => <FeedbackItem feedback={item} />}
      />
    </SafeAreaView>
  );
};

export default FeedbackListScreen;

const styles = StyleSheet.create({});
