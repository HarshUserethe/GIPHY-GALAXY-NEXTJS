// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVVOG-WNunYpxsn3_-R24yIuHF2EP4uJ0",
  authDomain: "fullstack-intern.firebaseapp.com",
  projectId: "fullstack-intern",
  storageBucket: "fullstack-intern.appspot.com",
  messagingSenderId: "868153767444",
  appId: "1:868153767444:web:916b77f9f0379993851901",
  measurementId: "G-K1Z96YKFCY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
