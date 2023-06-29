import React from "react"
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"

function GoalList({ goals, setShowModal, setId }) {
  return (
    <>
      <View style={styles.goalsView}>
        <Text>List of goals.....</Text>
      </View>

      <FlatList
        style={{
          width: "100%",
          padding: 20,
        }}
        data={goals}
        renderItem={(item) => {
          return (
            <View style={styles.goalList}>
              <Pressable
                style={styles.pressable}
                onPress={() => {
                  setShowModal(true)
                  setId(item.item.id)
                }}
              >
                <Text
                  style={{
                    color: "white",
                  }}
                >
                  {item.item.text}
                </Text>
              </Pressable>
            </View>
          )
        }}
        keyExtractor={(item) => item.id}
      />
    </>
  )
}

export default GoalList

const styles = StyleSheet.create({
  goalsView: {
    paddingVertical: 20,
    borderTopColor: "#0000",
    borderTopWidth: 1,
  },
  goalList: {
    margin: 7,
    width: "100%",
    backgroundColor: "#5555",
    borderRadius: 10,
  },
  pressable: {
    backgroundColor: "#245622",
    padding: 10,
  },
})
