import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = props =>
  <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
    <View style={styles.item}>
      <Text>
        {props.title}
      </Text>
    </View>
  </TouchableOpacity>;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'pink',
    borderColor: 'pink',
    color: 'white',
    borderWidth: 1
  }
});

export default GoalItem;
