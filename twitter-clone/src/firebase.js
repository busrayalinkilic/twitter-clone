import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFLX-ozgsF89IUvJ6dSR1cB8PSbgKCFKM",
  authDomain: "twitter-clone-3b1ab.firebaseapp.com",
  projectId: "twitter-clone-3b1ab",
  storageBucket: "twitter-clone-3b1ab.appspot.com",
  messagingSenderId: "1037632866958",
  appId: "1:1037632866958:web:0e05aaeb4ac550f4fe17df",
  measurementId: "G-EN107JCVTS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
