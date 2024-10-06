import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Text, TextInput, Button, Card } from "react-native-paper";
import { useTheme } from "react-native-paper";

const EnquiriesScreen = () => {
  const theme = useTheme();
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
    { text: "I have a question about your services.", sender: "user" },
    { text: "What services do you offer?", sender: "bot" },
    { text: "Can you tell me about the opening hours?", sender: "user" },
    {
      text: "Our opening hours are from 9 AM to 5 PM, Monday to Friday.",
      sender: "bot",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const handleSend = () => {
    if (query.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: query, sender: "user" },
      ]);

      setQuery("");
      setIsTyping(true);

      setTimeout(() => {
        const botResponse = "Thank you for your query!";
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: "bot" },
        ]);

        setIsTyping(false);
      }, 1500);
    }
  };

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

  const flatListRef = useRef(null);

  useEffect(() => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToIndex({
        index: messages.length - 1,
        animated: true,
      });
    }
  }, [messages, isTyping]);

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
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
      />

      {isTyping && (
        <View style={styles.typingIndicatorContainer}>
          <ActivityIndicator size="small" color="#007AFF" />
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
          onEndEditing={handleSend}
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
    // backgroundColor: "#e1e1e1",
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
    color: "#007AFF",
  },
});
