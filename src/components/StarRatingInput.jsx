import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton, useTheme } from "react-native-paper";

const StarRatingInput = ({ maxRating = 5, onRatingSelected }) => {
  const theme = useTheme();
  const [rating, setRating] = useState(1);

  const handleRating = (rate) => {
    setRating(rate);
    if (onRatingSelected) onRatingSelected(rate);
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: maxRating }, (_, index) => (
        <IconButton
          key={index}
          icon={index < rating ? "star" : "star-outline"}
          size={30}
          iconColor={index < rating ? "#FFD700" : "#C0C0C0"}
          onPress={() => handleRating(index + 1)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StarRatingInput;
