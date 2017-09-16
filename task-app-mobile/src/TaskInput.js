import React from 'react';
import { TextInput } from 'react-native';
import { tasksRef, timeRef } from './reference';
import styles from './styles';

export default class TaskInput extends React.Component {
  state = { text: '' };

  handleSubmit = () => {
    const newTask = {
      text: this.state.text.trim(),
      checked: false,
      starred: false,
      timestamp: timeRef
    };
    if (newTask.text.length) {
      tasksRef.push(newTask);
      this.setState({ text: '' });
    }
  };

  handleChangeText = text => {
    this.setState({ text });
  };

  render() {
    return (
      <TextInput
        placeholder="Add a new task..."
        placeholderTextColor="#FFF"
        underlineColorAndroid="transparent"
        style={styles.TaskInput}
        value={this.state.text}
        onChangeText={this.handleChangeText}
        onSubmitEditing={this.handleSubmit}
      />
    );
  }
}
