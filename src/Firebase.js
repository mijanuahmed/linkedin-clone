import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA4XnYnq_Rq632e8Eadz87csd5FLD43Qkg",
  authDomain: "linkedin-clo-d2075.firebaseapp.com",
  projectId: "linkedin-clo-d2075",
  storageBucket: "linkedin-clo-d2075.appspot.com",
  messagingSenderId: "875246236730",
  appId: "1:875246236730:web:94f2e63c5ca8a8008f3103",
  measurementId: "G-2LM4R0NGZZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
