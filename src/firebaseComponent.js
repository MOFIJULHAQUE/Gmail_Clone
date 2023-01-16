import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDi0W-KGchPQ3mHGgiPER6TKTxha-4QfHs",
  authDomain: "clone-with-react-js-4cae9.firebaseapp.com",
  projectId: "clone-with-react-js-4cae9",
  storageBucket: "clone-with-react-js-4cae9.appspot.com",
  messagingSenderId: "255166268417",
  appId: "1:255166268417:web:e3b59d4f2331b9bdeb2c00",
};

//for firebase connection
const firebaseApp = firebase.initializeApp(firebaseConfig);
//for Database connection
const db = firebaseApp.firestore();

export { db };
