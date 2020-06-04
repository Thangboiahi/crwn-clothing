import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA4p7HJSR9yBVwbhbF2EvX4BdT2CcAILYk",
  authDomain: "crwn-db-dd.firebaseapp.com",
  databaseURL: "https://crwn-db-dd.firebaseio.com",
  projectId: "crwn-db-dd",
  storageBucket: "crwn-db-dd.appspot.com",
  messagingSenderId: "380978782546",
  appId: "1:380978782546:web:41c37696791c9a80ed9a8b",
  measurementId: "G-H76YG3WRXE"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;