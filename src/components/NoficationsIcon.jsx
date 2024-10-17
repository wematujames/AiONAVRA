import { StyleSheet, View } from "react-native";
import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const NoficationIcon = ({ onAcc, onNot }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialIcons
          style={{ marginRight: 15 }}
          onPress={() => navigation.navigate("UserAccount")}
          size={20}
          name="account-circle"
          color="#663399"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons
          onPress={() => navigation.navigate("Notifications")}
          size={20}
          color="#663399"
          name="notifications"
        />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 15 }}>
        <MaterialIcons
          onPress={() => navigation.navigate("FeedbackList")}
          size={20}
          color="#663399"
          name="feedback"
        />
      </TouchableOpacity>
    </View>
  );
};

export default NoficationIcon;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    flexDirection: "row",
  },
});
