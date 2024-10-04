import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

const StarRatingInput = ({ maxRating = 5, onRatingSelected }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    if (onRatingSelected) onRatingSelected(rate); // Pass the selected rating back if needed
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: maxRating }, (_, index) => (
        <IconButton
          key={index}
          icon={index < rating ? "star" : "star-outline"}
          size={30}
          color={index < rating ? "#FFD700" : "#C0C0C0"}
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
