import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBstL_t0GIeKI6voWzCWOd3HcGCNJdahXA",
  authDomain: "react-firebase-crud.firebaseapp.com",
  databaseURL: "https://react-firebase-crud.firebaseio.com",
  storageBucket: "react-firebase-crud.appspot.com",
};
firebase.initializeApp(config);

const rootRef = firebase.database().ref();
export const tasksRef = rootRef.child('tasks');
export const timeRef = firebase.database.ServerValue.TIMESTAMP;
