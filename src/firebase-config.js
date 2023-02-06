// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdvEzwggPy55epICjiZNiixNrvBvtnvdM",
  authDomain: "to-do-list-d6925.firebaseapp.com",
  projectId: "to-do-list-d6925",
  storageBucket: "to-do-list-d6925.appspot.com",
  messagingSenderId: "53696320860",
  appId: "1:53696320860:web:5eaad11e5a77180a3cdd99",
  measurementId: "G-7VPJL54N64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)