// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8056a.firebaseapp.com",
  projectId: "mern-estate-8056a",
  storageBucket: "mern-estate-8056a.appspot.com",
  messagingSenderId: "941934784944",
  appId: "1:941934784944:web:f4a013ff8555ba3b626675",
  measurementId: "G-WLDNS3VPRH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);