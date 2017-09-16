import React from 'react';
import orderBy from 'lodash/orderBy';
import TaskListItem from './TaskListItem';
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

  render() {
    const { tasks, tasksLoading } = this.state;
    const orderedTasks = orderBy(
      tasks,
      ['checked', 'starred'],
      ['asc', 'desc']
    );

    let taskList;
    if (tasksLoading) {
      taskList = <div className="TaskList-empty">Loading...</div>;
    } else if (tasks.length) {
      taskList = (
        <ul className="TaskList">
          {orderedTasks.map(task => (
            <TaskListItem key={task.key} task={task} />
          ))}
        </ul>
      );
    } else {
      taskList = <div className="TaskList-empty">No Tasks</div>;
    }

    return taskList;
  }
}
