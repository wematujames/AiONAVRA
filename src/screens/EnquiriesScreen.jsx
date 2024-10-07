import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Text, TextInput, Button, Card } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { Context as EnquiriesContext } from "../context/enquiries/enquiriesContext";

const EnquiriesScreen = () => {
  const theme = useTheme();
  const [query, setQuery] = useState("");

  const enquiriesContext = useContext(EnquiriesContext);

  const { state, getEnquiryMessages, makeEnquiry } = enquiriesContext;

  const handleSend = () => {
    if (query.trim()) {
      makeEnquiry(query.trim(), state.messages);
      setQuery("");
    }
  };

  const flatListRef = useRef(null);
  useEffect(() => {
    if (flatListRef.current && state.messages.length > 0) {
      flatListRef.current.scrollToIndex({
        index: state.messages.length - 1,
        animated: true,
      });
    }
  }, [state.messages, state.loading]);

  useEffect(() => {
    getEnquiryMessages();
  }, []);

  const renderMessage = ({ item }) => (
    <Card
      mode="contained"
      style={[
        styles.messageCard,
        item.sender === "user" ? styles.userMessage : styles.botMessage,
      ]}
    >
      <Text style={item.sender === "user" ? styles.userText : styles.botText}>
        {item.text}
      </Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={state.messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
        style={styles.messageList}
        contentContainerStyle={styles.messageListContent}
        showsVerticalScrollIndicator={false}
        ref={flatListRef}
        getItemLayout={(data, index) => ({
          length: 60,
          offset: 60 * index,
          index,
        })}
        onLayout={() => {
          if (flatListRef.current && state.messages.length > 0) {
            flatListRef.current.scrollToIndex({
              index: state.messages.length - 1,
              animated: true,
            });
          }
        }}
      />

      {state.loading && (
        <View style={styles.typingIndicatorContainer}>
          <ActivityIndicator size="small" color="#663399" />
          <Text style={styles.typingText}>Bot is typing...</Text>
        </View>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          label="Ask a question..."
          value={query}
          onChangeText={setQuery}
          style={styles.input}
          mode="outlined"
          theme={theme}
          multiline
        />
        <Button mode="contained" onPress={handleSend} style={styles.sendButton}>
          Send
        </Button>
      </View>
    </View>
  );
};

export default EnquiriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f7f7f7",
  },
  messageList: {
    flex: 1,
    marginBottom: 5,
  },
  messageListContent: {
    paddingBottom: 50,
  },
  messageCard: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    maxWidth: "75%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#663399",
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e1e1e1",
  },
  userText: {
    fontSize: 16,
    color: "#fff",
  },
  botText: {
    fontSize: 16,
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -15,
  },
  input: {
    flex: 1,
    marginRight: 5,
  },
  sendButton: {
    paddingVertical: 4,
    borderRadius: 5,
    marginTop: 5,
  },
  typingIndicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  typingText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#663399",
  },
});
