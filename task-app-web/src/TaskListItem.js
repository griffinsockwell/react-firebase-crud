import React from 'react';
import { tasksRef } from './reference';

export default class TaskListItem extends React.Component {
  toggleChecked = () => {
    const { key, checked } = this.props.task;
    tasksRef.child(key).update({ checked: !checked });
  };

  toggleStarred = () => {
    const { key, starred } = this.props.task;
    tasksRef.child(key).update({ starred: !starred });
  };

  deleteTask = () => {
    const { key } = this.props.task;
    tasksRef.child(key).remove();
  };

  render() {
    const { task } = this.props;

    let buttonRight;
    if (task.checked) {
      buttonRight = (
        <button onClick={this.deleteTask}>
          <i className="material-icons icon-red">delete</i>
        </button>
      );
    } else if (task.starred) {
      buttonRight = (
        <button onClick={this.toggleStarred}>
          <i className="material-icons icon-yellow">star</i>
        </button>
      );
    } else {
      buttonRight = (
        <button onClick={this.toggleStarred}>
          <i className="material-icons icon-grey">star_border</i>
        </button>
      );
    }

    return (
      <li className="TaskListItem">
        <button onClick={this.toggleChecked}>
          <i className="material-icons icon-grey">
            {task.checked ? 'check_box' : 'check_box_outline_blank'}
          </i>
        </button>

        <span className={task.checked ? 'TaskListItem-checked' : ''}>
          {task.text}
        </span>

        {buttonRight}
      </li>
    );
  }
}
