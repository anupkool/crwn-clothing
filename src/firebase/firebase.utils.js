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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    console.log("test");
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
