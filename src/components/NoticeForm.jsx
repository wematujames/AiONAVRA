import { StyleSheet, TouchableOpacity, View } from "react-native";
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
};

const CreateNoticeForm = ({
  title,
  onSubmit,
  noticeDetail = { ...notice },
}) => {
  const theme = useTheme();
  const [notice, setNotice] = useState(noticeDetail);

  return (
    <View style={styles.formContainer}>
      <View style={styles.header}>
        <Icon source="form-select" color={theme.colors.primary} size={25} />
        <Text style={styles.headerText} variant="headlineMedium">
          {title}
        </Text>
      </View>

      <Divider style={styles.divider} bold />

      <TextInput
        value={notice.title}
        onChangeText={(val) => setNotice((p) => ({ ...p, title: val }))}
        style={styles.textInput}
        label="Title"
        placeholder="Enter notice title"
        mode="outlined"
        theme={{ colors: { primary: theme.colors.primary } }}
      />
      <TextInput
        value={notice.content}
        onChangeText={(val) => setNotice((p) => ({ ...p, content: val }))}
        style={styles.textInput}
        label="Content"
        placeholder="Enter notice content"
        mode="outlined"
        multiline
        numberOfLines={4}
        theme={{ colors: { primary: theme.colors.primary } }}
      />
      <TextInput
        value={notice.priority}
        onChangeText={(val) => setNotice((p) => ({ ...p, priority: val }))}
        style={styles.textInput}
        label="Priority Tag"
        placeholder="Urgent, General"
        mode="outlined"
        theme={{ colors: { primary: theme.colors.primary } }}
      />
      <Spacer />
      <TouchableOpacity onPress={() => onSubmit(notice, notice.id)}>
        <Button style={styles.submitButton} mode="contained">
          Save Notice
        </Button>
      </TouchableOpacity>
      <Spacer />
    </View>
  );
};

export default CreateNoticeForm;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingTop: "20%",
    marginBottom: 200,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",

    alignSelf: "center",
  },
  headerText: {
    marginLeft: 10,
    color: "#333",
    fontWeight: "bold",
  },
  divider: {
    marginVertical: 10,
  },
  textInput: {
    marginVertical: 10,
    backgroundColor: "#FFF",
  },
  submitButton: {
    borderRadius: 10,
    marginTop: 10,
  },
});
