import React from 'react'
import firebaseUrl from '../firebaseUrl'

export default React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired
  },
  componentWillMount() {
    this.firebaseRef = firebaseUrl;
  },
  toggleChecked() {
    let key = this.props.task['.key'];
    this.firebaseRef.child(key).update({
      checked: !this.props.task.checked
    });
  },
  toggleStarred() {
    let key = this.props.task['.key'];
    this.firebaseRef.child(key).update({
      starred: !this.props.task.starred
    });
  },
  deleteTask() {
    let key = this.props.task['.key'];
    if (confirm("Are you sure you want to delete this task?")) {
      this.firebaseRef.child(key).remove();
    }
  },
  render() {
    const {task} = this.props;

    let iconLeft = task.checked
      ? <img src="/icons/checked.svg"/>
      : <img src="/icons/unchecked.svg"/>;

    let checkedText = task.checked
      ? "checked"
      : "";

    let buttonRight;
    if (task.checked)
      buttonRight = (
        <button onClick={this.deleteTask}>
          <img className="trash" src="/icons/delete.svg"/>
        </button>
      )
    else if (task.starred)
      buttonRight = (
        <button onClick={this.toggleStarred}>
          <img src="/icons/starred.svg"/>
        </button>
      )
    else
      buttonRight = (
        <button onClick={this.toggleStarred}>
          <img src="/icons/unstarred.svg"/>
        </button>
      )

    return (
      <li>
        <button onClick={this.toggleChecked}>
          {iconLeft}
        </button>

        <span className={checkedText}>
          {task.text}
        </span>

        {buttonRight}
      </li>
    )
  }
})
