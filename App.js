import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        uid: Math.random().toString(),
        value: enteredGoal,
      },
    ]);
  };

  const clearGoalHandler = () => {
    setCourseGoals([]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
        {
          // <Button title="CLEAR" onPress={clearGoalHandler} />
        }
      </View>
      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item.uid}
        renderItem={(itemData) => (
          <View style={styles.listItems}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 0.8,
    borderWidth: 0.3,
    padding: 10,
  },
  listItems: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "grey",
    borderWidth: 0.5,
    marginVertical: 10,
  },
});
