import React from 'react'
import ReactFireMixin from 'reactfire'
import _ from 'underscore'
import firebaseUrl from '../firebaseUrl'
import Task from './Task'

export default React.createClass({
  mixins: [ReactFireMixin],
  componentWillMount() {
    var firebaseRef = firebaseUrl;
    firebaseRef.on('value', () => {
      this.setState({tasksLoading: false});
    });
    this.bindAsArray(firebaseRef, "tasks");
  },
  getInitialState() {
    return {tasks: [], text: '', tasksLoading: true}
  },
  renderTasks() {
    let tasks = this.state.tasks;
    let sortedTasks = _.chain(tasks).sortBy('starred').reverse().sortBy('checked').value();
    return sortedTasks.map((task) => {
      return <Task task={task} key={task['.key']}/>
    });
  },
  onChange(event) {
    this.setState({text: event.target.value})
  },
  handleSubmit(event) {
    event.preventDefault();
    let newTask = {
      text: this.state.text.trim(),
      checked: false,
      starred: false,
      timestamp: Firebase.ServerValue.TIMESTAMP
    };
    if (newTask.text.length)
      this.firebaseRefs.tasks.push(newTask);
    this.setState({text: ''});
  },
  render() {
    const {tasksLoading, tasks, text} = this.state;

    let taskList;
    if (tasksLoading)
      taskList = (
        <div className="empty">Loading...</div>
      )
    else if (tasks.length)
      taskList = (
        <ul>{this.renderTasks()}</ul>
      )
    else
      taskList = (
        <div className="empty">No Tasks</div>
      )

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <img src="/icons/plus_box.svg"/>
          <input onChange={this.onChange} value={text} type="text" placeholder="Add a new task..." required/>
        </form>

        {taskList}
      </div>
    )
  }
})
