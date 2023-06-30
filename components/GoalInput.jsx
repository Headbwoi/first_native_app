import React from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

function GoalInput({ enteredText, handleGoalInput, handleSaveGoal }) {
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="enter your goal"
          style={styles.textInput}
          value={enteredText}
          onChangeText={handleGoalInput}
        />
        <Button title="Save Goal" onPress={handleSaveGoal} />
      </View>
    </>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    width: "100%",
    color: "#968d",
    fontSize: 40,
    padding: 10,
  },
  textInput: {
    color: "#968dee",
    fontSize: 20,
    borderColor: "red",
    borderWidth: 1,
    // width: "70%",
    flex: 1,
    padding: 10,
  },
})
