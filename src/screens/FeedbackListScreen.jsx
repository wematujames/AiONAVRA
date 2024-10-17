import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context as FeedbackContext } from "../context/feedback/feedbackContext";
import FeedbackItem from "../components/FeedbackItem";
import { useIsFocused } from "@react-navigation/native";
import Spinner from "../components/Spinner";
import AddContentFAB from "../components/AddContentFAB";

const FeedbackListScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const feedbackContext = useContext(FeedbackContext);
  const { state, getFeedbacks } = feedbackContext;

  useEffect(() => {
    getFeedbacks();
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Spinner loading={state.loading}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={state.feedbacks}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => <FeedbackItem feedback={item} />}
        />
      </Spinner>
      <AddContentFAB
        showFAB
        onAdd={() => navigation.navigate("CreateFeedback")}
      />
    </SafeAreaView>
  );
};

export default FeedbackListScreen;

const styles = StyleSheet.create({});
