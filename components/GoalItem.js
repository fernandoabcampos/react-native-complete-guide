import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.listItems}>
      <Text>{props.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "grey",
    borderWidth: 0.5,
    marginVertical: 10,
  },
});

export default GoalItem;
