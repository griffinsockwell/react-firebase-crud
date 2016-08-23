import React, { Component } from 'react';

import { tasksRef, timeRef } from './ref';

class TaskInput extends Component {
  constructor() {
    super();
    this.state = { text: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
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
      <div className="TaskInput">
        <form onSubmit={this.handleSubmit} className="TaskInput-form">
          <i className="material-icons">add_box</i>
          <input
            onChange={(evt) => this.setState({ text: evt.target.value })}
            value={this.state.text}
            type="text"
            placeholder="Add a new task..."
            required
          />
        </form>
      </div>
    );
  }
}

export default TaskInput;
