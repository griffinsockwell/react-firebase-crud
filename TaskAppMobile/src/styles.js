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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 5
  },
  TaskInput: {
    backgroundColor: '#4A90E2',
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 10
  },
  TaskInput_Icon: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TaskInput_TextInputContainer: {
    flex: 7,
    borderRadius: 5
  },
  TaskInput_TextInput: {
    color: '#FFF',
    fontSize: 18,
    height: 50,
    borderRadius: 5
  },
  TaskList_Empty: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  TaskList_EmptyText: {
    fontSize: 24,
    color: '#DDD',
  },
  TaskListItem: {
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 4,
  },
  TaskListItem_HeightDefault: {
    height: 50,
  },
  TaskListItem_HeightLarge: {
    height: 70,
  },
  TaskListItem_TextContainer: {
    flex: 6,
  },
  TaskListItem_Text: {
    color: '#4A4A4A',
    fontSize: 16,
  },
  TaskListItem_Checked: {
    color: '#9B9B9B',
    textDecorationLine: 'line-through',
  },
});

export default styles;
