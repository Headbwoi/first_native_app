import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, View } from "react-native"
import GoalInput from "./components/GoalInput"
import GoalList from "./components/GoalList"
import GoalModal from "./components/Modal"

export default function App() {
  const [enteredText, setEnteredText] = useState("")
  const [goals, setGoals] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState()

  const handleGoalInput = (enteredText) => {
    setEnteredText(enteredText)
  }

  const handleSaveGoal = () => {
    // console.log(enteredText)
    setGoals((cGoals) => [
      ...cGoals,
      {
        text: enteredText,
        id: Math.random().toString(),
      },
    ])
    setEnteredText("")
  }

  const handleDelete = (id) => {
    const newGoals = goals.filter((goal) => goal.id !== id)

    setGoals(newGoals)
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="dark" translucent={true} />

        <GoalInput
          enteredText={enteredText}
          handleGoalInput={handleGoalInput}
          handleSaveGoal={handleSaveGoal}
        />

        {/* goal */}

        <GoalList
          goals={goals}
          handleDelete={handleDelete}
          setId={setId}
          setShowModal={setShowModal}
        />
      </View>

      {showModal && (
        <GoalModal
          goals={goals}
          id={id}
          setGoals={setGoals}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 12,
  },
})
