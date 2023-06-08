// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBABLMRJ-22vMd3JIprQL1LX4DSQr6gX-s",
  authDomain: "crwn-db-f6cf5.firebaseapp.com",
  projectId: "crwn-db-f6cf5",
  storageBucket: "crwn-db-f6cf5.appspot.com",
  messagingSenderId: "521402369339",
  appId: "1:521402369339:web:a62b3d4f12eaa3dc95a31e",
  measurementId: "G-C09C571HRZ",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // Will send a document wrt userAuth, even if we don't have a "users" collection.
  // This has so much information about user. Name, Email, Photo (if loginWithGoogle)
  const userDocRef = doc(db, "users", userAuth.uid);
  
  //  Will check if the reference provided by `doc` is present in the "users" collection.
  // We need this for only one reason, that is `.exists()` function.
  // This will tell us if user exists, so we can perform operations based on that.
  const userSnapshot = await getDoc(userDocRef);

  // If user does not exist,
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // We create a new user using `setDoc` function.
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};
