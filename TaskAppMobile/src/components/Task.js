'use strict'
import React, {Alert, StyleSheet, Text, View} from 'react-native'
import firebaseUrl from '../firebaseUrl'
import Button from './Button'
import unchecked from '../icons/unchecked/unchecked.png'
import checked from '../icons/checked/checked.png'
import unstarred from '../icons/unstarred/unstarred.png'
import starred from '../icons/starred/starred.png'
import trash from '../icons/trash/trash.png'

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
    Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel')
      }, {
        text: 'Confirm',
        onPress: () => this.firebaseRef.child(key).remove()
      }
    ])
  },
  render() {
    const {task} = this.props;

    let liHeight = task.text.length >= 29
      ? styles.liHeightLarge
      : styles.liHeightDefault;

    let buttonLeft = task.checked
      ? <Button onPress={this.toggleChecked} source={checked}/>
      : <Button onPress={this.toggleChecked} source={unchecked}/>;

    let checkedText = task.checked
      ? styles.liChecked
      : "";

    let buttonRight;
    if (task.checked)
      buttonRight = (<Button onPress={this.deleteTask} source={trash}/>)
    else if (task.starred)
      buttonRight = (<Button onPress={this.toggleStarred} source={starred}/>)
    else
      buttonRight = (<Button onPress={this.toggleStarred} source={unstarred}/>)

    return (
      <View style={[styles.li, liHeight]}>

        {buttonLeft}

        <View style={styles.liSpan}>
          <Text style={[styles.liText, checkedText]}>
            {task.text}
          </Text>
        </View>

        {buttonRight}

      </View>
    )
  }
})

const styles = StyleSheet.create({
  li: {
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4
  },
  liHeightDefault: {
    height: 50
  },
  liHeightLarge: {
    height: 70
  },
  liSpan: {
    flex: 6
  },
  liText: {
    color: '#4A4A4A',
    fontSize: 16
  },
  liChecked: {
    color: '#9B9B9B',
    textDecorationLine: 'line-through'
  }
})
