import { SafeAreaView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import FeedbackForm from "../components/FeedbackForm";

import { Context as AuthContext } from "../context/auth/authContext";
import { Context as FeedbackContext } from "../context/feedback/feedbackContext";

const CreateFeedback = () => {
  const authContext = useContext(AuthContext);
  const feedbackContext = useContext(FeedbackContext);

  const { state: authState } = authContext;
  const { state: feedbackState, createFeedback } = feedbackContext;

  return (
    <SafeAreaView>
      <FeedbackForm
        visitor={
          authState.user?.userType === "Visitor"
            ? authState.user._id
            : undefined
        }
        user={
          authState.user?.userType !== "Visitor"
            ? authState.user._id
            : undefined
        }
        title="Submit Feedback"
        onSubmit={createFeedback}
      />
    </SafeAreaView>
  );
};

export default CreateFeedback;

const styles = StyleSheet.create({});
