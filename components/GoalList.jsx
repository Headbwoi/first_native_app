import React from "react"
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"

function GoalList({ goals, setShowModal, setId }) {
  return (
    <>
      <View style={styles.goalsView}>
        <Text style={{ fontSize: 14 }}>List of goals.....</Text>
      </View>

      <FlatList
        style={{
          width: "100%",
          padding: 20,
          borderTopWidth: 2,
          borderTopColor: "blue",
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
                    paddingHorizontal: 10,
                    paddingVertical: 20,
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
  },
  goalList: {
    width: "100%",
    backgroundColor: "#5555",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  pressable: {
    backgroundColor: "#245622",
    borderRadius: 10,
  },
})
