import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBstL_t0GIeKI6voWzCWOd3HcGCNJdahXA',
  databaseURL: 'https://react-firebase-crud.firebaseio.com'
};
firebase.initializeApp(config);

const rootRef = firebase.database().ref();
export const tasksRef = rootRef.child('tasks');
export const timeRef = firebase.database.ServerValue.TIMESTAMP;
