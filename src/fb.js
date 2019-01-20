import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyClKqr7Cl3E6tRe0DSH3v7thQMx6OeEZak",
  authDomain: "vue-app-df8dd.firebaseapp.com",
  databaseURL: "https://vue-app-df8dd.firebaseio.com",
  projectId: "vue-app-df8dd",
  storageBucket: "vue-app-df8dd.appspot.com",
  messagingSenderId: "469444112632"
};
firebase.initializeApp(config);

const db = firebase.firestore();
export default db;
