// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBABLMRJ-22vMd3JIprQL1LX4DSQr6gX-s",
  authDomain: "crwn-db-f6cf5.firebaseapp.com",
  projectId: "crwn-db-f6cf5",
  storageBucket: "crwn-db-f6cf5.appspot.com",
  messagingSenderId: "521402369339",
  appId: "1:521402369339:web:a62b3d4f12eaa3dc95a31e",
  measurementId: "G-C09C571HRZ",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
