import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdEU1KPDbBAzCGHEo9MtNHDeTEk4fsZS4",
  authDomain: "kaiji-87b0d.firebaseapp.com",
  databaseURL: "https://kaiji-87b0d.firebaseio.com",
  projectId: "kaiji-87b0d",
  storageBucket: "kaiji-87b0d.appspot.com",
  messagingSenderId: "625823080873",
  appId: "1:625823080873:web:91f9252e5bcf056090e4b8",
  measurementId: "G-9XHDD45H9C",
};

// Initialize firebase app
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

export { database };
