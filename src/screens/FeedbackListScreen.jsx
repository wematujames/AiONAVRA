import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context as FeedbackContext } from "../context/feedback/feedbackContext";
import FeedbackItem from "../components/FeedbackItem";
import { useIsFocused } from "@react-navigation/native";
import Spinner from "../components/Spinner";

const FeedbackListScreen = () => {
  const isFocused = useIsFocused();
  const feedbackContext = useContext(FeedbackContext);
  const { state, getFeedbacks } = feedbackContext;

  console.log(feedbackContext);
  useEffect(() => {
    getFeedbacks();
  }, [isFocused]);
  console.log(state.feedbacks);
  return (
    <Spinner loading={state.loading}>
      <SafeAreaView>
        <FlatList
          data={state.feedbacks}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => <FeedbackItem feedback={item} />}
        />
      </SafeAreaView>
    </Spinner>
  );
};

export default FeedbackListScreen;

const styles = StyleSheet.create({});
