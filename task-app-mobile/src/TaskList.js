import React from 'react';
import { FlatList, View, Text } from 'react-native';
import orderBy from 'lodash/orderBy';
import TaskListItem from './TaskListItem';
import styles from './styles';
import { tasksRef } from './reference';

export default class TaskList extends React.Component {
  state = {
    tasks: [],
    tasksLoading: true
  };

  componentDidMount() {
    tasksRef.on('value', snap => {
      const tasks = [];
      snap.forEach(shot => {
        tasks.push({ ...shot.val(), key: shot.key });
      });
      this.setState({ tasks, tasksLoading: false });
    });
  }

  renderItem = ({ item }) => {
    return <TaskListItem task={item} />;
  };

  render() {
    const { tasks, tasksLoading } = this.state;
    const orderedTasks = orderBy(
      tasks,
      ['checked', 'starred'],
      ['asc', 'desc']
    );

    let taskList;
    if (tasksLoading) {
      taskList = (
        <View style={styles.TaskList_Empty}>
          <Text style={styles.TaskList_EmptyText}>Loading...</Text>
        </View>
      );
    } else if (tasks.length) {
      taskList = <FlatList data={orderedTasks} renderItem={this.renderItem} />;
    } else {
      taskList = (
        <View style={styles.TaskList_Empty}>
          <Text style={styles.TaskList_EmptyText}>No Tasks</Text>
        </View>
      );
    }

    return taskList;
  }
}
