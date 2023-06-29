import React from "react"
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native"

function GoalModal({ showModal, setShowModal, goals, id, setGoals }) {
  const goal = goals.find((goal) => goal.id === id)
  const handleDelete = (id) => {
    const newGoals = goals.filter((goal) => goal.id !== id)

    setGoals(newGoals)
  }

  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            Alert.alert("has been deleted.")
            setShowModal(!showModal)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{goal.text}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  ToastAndroid.show(
                    goal.text + " has been deleted",
                    ToastAndroid.SHORT
                  )
                  handleDelete(goal.id)
                  setShowModal(!showModal)
                }}
              >
                <Text style={styles.textStyle}>Delete</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  )
}

export default GoalModal

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  modalView: {
    marginHorizontal: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#ff0001",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
  },
})
