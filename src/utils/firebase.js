// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSTOA7CuKtclotHJ1V9OX8SUN_TBaUIpw",
  authDomain: "netflixgpt-387d0.firebaseapp.com",
  projectId: "netflixgpt-387d0",
  storageBucket: "netflixgpt-387d0.appspot.com",
  messagingSenderId: "664061269762",
  appId: "1:664061269762:web:091f89f6d0b1b5394a541b",
  measurementId: "G-PK0BF7XLB4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
