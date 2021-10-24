import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCLqKW3W3lCioU4rhQXSUp98Mgk5aC6wJc",
  authDomain: "react-web-b2c0b.firebaseapp.com",
  databaseURL: "https://react-web-b2c0b-default-rtdb.firebaseio.com",
  projectId: "react-web-b2c0b",
  storageBucket: "react-web-b2c0b.appspot.com",
  messagingSenderId: "24859165482",
  appId: "1:24859165482:web:ea83dfb0929ed117085453",
  measurementId: "G-WV818HVF02"
};

// Initialize Firebase
const fireDB = firebase.initializeApp(firebaseConfig);
export default fireDB;