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

const notice = {
  title: "",
  content: "",
  priority: "",
  createdAt: "",
};

const CreateNoticeForm = ({
  title,
  onSubmit,
  noticeDetail = { ...notice },
}) => {
  const theme = useTheme();
  const [notice, setNotice] = useState(noticeDetail);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView
        style={{
          ...styles.formContainer,
          backgroundColor: theme.colors.background,
        }}
      >
        <View style={styles.title}>
          <Icon source="details" color={theme.colors.primary} size={25} />
          <Text
            style={{ marginLeft: 10, color: theme.colors.primary }}
            variant="headlineMedium"
          >
            {title}
          </Text>
        </View>

        <Divider bold horizontalInset />

        <TextInput
          value={notice.title}
          onChangeText={(val) => setNotice((p) => ({ ...p, title: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="Title"
          placeholder="Word form home!!!"
          mode="outlined"
        />
        <TextInput
          value={notice.content}
          onChangeText={(val) => setNotice((p) => ({ ...p, content: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="Content"
          placeholder="Effective the start of next month..."
          mode="outlined"
          multiline
        />
        <TextInput
          value={notice.priority}
          onChangeText={(val) => setNotice((p) => ({ ...p, priority: val }))}
          style={styles.textInput}
          clearButtonMode="always"
          label="Priority Tag"
          placeholder="Urgent, General"
          mode="outlined"
        />
        <Spacer />
        <TouchableOpacity onPress={() => onSubmit(notice, notice.id)}>
          <Button style={{ borderRadius: 10 }} mode="contained">
            Save Notice
          </Button>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateNoticeForm;

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
