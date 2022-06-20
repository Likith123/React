import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3E2UuM4rKVWhmXrszK6VSMGxAU2kZa34",
  authDomain: "clone-6ffc5.firebaseapp.com",
  projectId: "clone-6ffc5",
  storageBucket: "clone-6ffc5.appspot.com",
  messagingSenderId: "250087385465",
  appId: "1:250087385465:web:2b3f1f79c4720fb5a927a8",
  measurementId: "G-ZV53R5GF4Y",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};