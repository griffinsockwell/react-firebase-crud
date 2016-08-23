import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './styles';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <View style={styles.App}>
        <TaskInput />
        <TaskList />
      </View>
    );
  }
}

export default App;
