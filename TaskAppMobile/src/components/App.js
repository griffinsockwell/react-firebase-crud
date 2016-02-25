'use strict'
import React, {
  Image,
  ListView,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native'
import ReactFireMixin from 'reactfire'
import _ from 'underscore'
import firebaseUrl from '../firebaseUrl'
import Task from './Task'
import plus from '../icons/plus/plus.png'

export default React.createClass({
  mixins: [ReactFireMixin],
  getInitialState() {
    return {
      tasks: [],
      tasksLoading: true,
      text: '',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  },
  componentWillMount() {
    var firebaseRef = firebaseUrl;
    firebaseRef.on('value', () => {
      this.setState({tasksLoading: false});
    });
    this.bindAsArray(firebaseRef, "tasks");
  },
  handleSubmit() {
    let newTask = {
      text: this.state.text.trim(),
      checked: false,
      starred: false,
      timestamp: Firebase.ServerValue.TIMESTAMP
    };
    if (newTask.text.length)
      this.firebaseRefs.tasks.push(newTask);
    this.setState({text: ''})
  },
  renderTasks() {
    let tasks = this.state.tasks;
    let sortedTasks = _.chain(tasks).sortBy('starred').reverse().sortBy('checked').value();
    return (<ListView dataSource={this.state.dataSource.cloneWithRows(sortedTasks)} renderRow={this.renderTask}/>)
  },
  renderTask(task) {
    return (<Task task={task} key={task['.key']}/>)
  },
  render() {
    const {tasks, tasksLoading} = this.state;

    let taskList;
    if (tasksLoading)
      taskList = (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Loading...</Text>
        </View>
      )
    else if (tasks.length)
      taskList = (this.renderTasks())
    else
      taskList = (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No Tasks</Text>
        </View>
      )

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerImage}>
            <Image source={plus}/>
          </View>
          <View style={styles.headerInput}>
            <TextInput placeholder="Add a new task..." placeholderTextColor="#FFF" underlineColorAndroid="#4A90E2" value={this.state.text} onChangeText={(text) => this.setState({text})} onSubmitEditing={this.handleSubmit} style={styles.headerInputText}/>
          </View>
        </View>

        {taskList}
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    paddingTop: 22,
    paddingLeft: 10,
    paddingRight: 10
  },
  header: {
    backgroundColor: '#4A90E2',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 10
  },
  headerImage: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerInput: {
    flex: 7,
    borderRadius: 5
  },
  headerInputText: {
    color: '#FFF',
    fontSize: 18,
    height: 50,
    borderRadius: 5
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },
  emptyText: {
    fontSize: 24,
    color: '#DDD'
  }
})
