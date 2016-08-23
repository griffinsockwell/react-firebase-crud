import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { tasksRef, timeRef } from './ref';
import styles from './styles';

class TaskInput extends Component {
  constructor() {
    super();
    this.state = { text: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const newTask = {
      text: this.state.text.trim(),
      checked: false,
      starred: false,
      timestamp: timeRef,
    };
    if (newTask.text.length) {
      tasksRef.push(newTask);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <View style={styles.TaskInput}>
        <View style={styles.TaskInput_Icon}>
          <Icon name="add" size={22} color="#FFF" />
        </View>
        <View style={styles.TaskInput_TextInputContainer}>
          <TextInput
            placeholder="Add a new task..."
            placeholderTextColor="#FFF"
            underlineColorAndroid="#4A90E2"
            style={styles.TaskInput_TextInput}
            value={this.state.text}
            onChangeText={(text) => this.setState({ text })}
            onSubmitEditing={this.handleSubmit}
          />
        </View>
      </View>
    );
  }
}

export default TaskInput;
