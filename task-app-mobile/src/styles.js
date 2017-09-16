import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: '#EEE',
    paddingTop: 22,
    paddingLeft: 10,
    paddingRight: 10
  },
  Button: {
    paddingHorizontal: 10
  },
  TaskInput: {
    backgroundColor: '#4A90E2',
    height: 50,
    paddingLeft: 10,
    alignItems: 'center',
    marginVertical: 20,
    color: '#FFF',
    fontSize: 18
  },
  TaskList_Empty: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },
  TaskList_EmptyText: {
    fontSize: 24,
    color: '#DDD'
  },
  TaskListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    minHeight: 50,
    paddingVertical: 10
  },
  TaskListItem_TextContainer: {
    flex: 1
  },
  TaskListItem_Text: {
    color: '#4A4A4A',
    fontSize: 16
  },
  TaskListItem_Checked: {
    color: '#9B9B9B',
    textDecorationLine: 'line-through'
  }
});

export default styles;
