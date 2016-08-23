import React, { Component } from 'react';
import TaskListItem from './TaskListItem';
import { tasksRef } from './ref';

class TaskList extends Component {
  constructor() {
    super();
    this.state = { tasks: [], tasksLoading: true };
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
    return sortedTasks.map((task) => <TaskListItem key={task.key} task={task} />);
  }

  render() {
    const { tasks, tasksLoading } = this.state;

    let taskList;
    if (tasksLoading) {
      taskList = (<div className="TaskList-empty">Loading...</div>);
    } else if (tasks.length) {
      taskList = (<ul>{this.renderTasks()}</ul>);
    } else {
      taskList = (<div className="TaskList-empty">No Tasks</div>);
    }

    return (
      <div className="TaskList">
        {taskList}
      </div>
    );
  }
}

export default TaskList;
