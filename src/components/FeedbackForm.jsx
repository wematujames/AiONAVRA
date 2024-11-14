import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  Button,
  Divider,
  Icon,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import Spacer from "./Spacer";
import StarRatingInput from "./StarRatingInput";

const FeedbackForm = ({ onSubmit, visitor, user }) => {
  const theme = useTheme();
  const [feedback, setFeedback] = useState({
    visitor,
    user,
    rating: 1,
    title: "",
    description: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView
        style={[
          styles.formContainer,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <View style={styles.title}>
          <Icon source="account" color={theme.colors.primary} size={25} />
          <Text
            style={{ marginLeft: 10, color: theme.colors.primary }}
            variant="headlineMedium"
          >
            Submit Feedback
          </Text>
        </View>

        <Divider bold horizontalInset />

        <StarRatingInput
          maxRating={5}
          onRatingSelected={(val) =>
            setFeedback((p) => ({ ...p, rating: val }))
          }
        />

        {/* <TextInput
          value={feedback.name}
          onChangeText={(val) => setFeedback((p) => ({ ...p, title: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="Title"
          placeholder="Love this app"
          mode="outlined"
        /> */}

        <TextInput
          value={feedback.description}
          onChangeText={(val) =>
            setFeedback((p) => ({ ...p, description: val }))
          }
          style={styles.textInput}
          clearButtonMode="always"
          label="Feedback"
          placeholder="This app is awesome, i really like the routing feature..."
          mode="outlined"
          multiline
        />
        <Spacer />
        <TouchableOpacity
          onPress={() => {
            onSubmit(feedback);
          }}
        >
          <Button style={{ borderRadius: 10 }} mode="contained">
            Submit
          </Button>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FeedbackForm;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "red",
    padding: 5,
    height: "100%",
  },
  title: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 10,
    alignItems: "center",
  },

  textInput: {
    marginVertical: 5,
  },
});
