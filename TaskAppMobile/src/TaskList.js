import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import TaskListItem from './TaskListItem';
import styles from './styles';
import { tasksRef } from './ref';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });

class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      tasksLoading: true,
    };
  }

  componentDidMount() {
    tasksRef.on('value', snap => {
      const tasks = [];
      snap.forEach(shot => {
        tasks.push({ ...shot.val(), key: shot.key });
      });
      this.setState({ tasks, tasksLoading: false });
    });
  }

  renderTasks() {
    const { tasks } = this.state;
    const sortedTasks = tasks.sort((a, b) => {
      return (b.starred > a.starred) ? 1 : (b.starred < a.starred) ? -1 : 0;
    }).sort((a, b) => {
      return (b.checked > a.checked) ? -1 : (b.checked < a.checked) ? 1 : 0;
    });
    return (
      <ListView
        dataSource={ds.cloneWithRows(sortedTasks)}
        renderRow={(task) => <TaskListItem key={task.key} task={task} />}
      />
    );
  }

  render() {
    const { tasks, tasksLoading } = this.state;

    let taskList;
    if (tasksLoading) {
      taskList = (
        <View style={styles.TaskList_Empty}>
          <Text style={styles.TaskList_EmptyText}>Loading...</Text>
        </View>
      );
    } else if (tasks.length) {
      taskList = (this.renderTasks());
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

export default TaskList;
