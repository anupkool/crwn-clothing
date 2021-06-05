import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzFUbVAav6J5EnSnF9WbBkdEhGSOhVZVg",
  authDomain: "crwn-db-8cfd9.firebaseapp.com",
  projectId: "crwn-db-8cfd9",
  storageBucket: "crwn-db-8cfd9.appspot.com",
  messagingSenderId: "677440938692",
  appId: "1:677440938692:web:045d97f1561bb8caeb9f91",
  measurementId: "G-QGRCDYX5FS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
