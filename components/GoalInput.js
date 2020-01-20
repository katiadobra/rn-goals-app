import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      style={styles.inputContainer}
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {/* <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} /> */}
        <Button title="ADD" onPress={addGoalHandler} />
        <Button title="CANCEL" onPress={props.onCancel} color="red" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 20,
    borderColor: 'pink',
    height: 50
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderColor: 'pink',
    height: 50
  },
  input: {
    width: '80%',
    borderColor: 'black',
    color: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  btn: {
    backgroundColor: 'pink',
    color: '#fff',
    padding: 10
  }
});

export default GoalInput;
