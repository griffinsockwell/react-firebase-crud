import React, { Component } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskInput />
        <TaskList />
      </div>
    );
  }
}

export default App;
