// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-mern-cd7ac.firebaseapp.com",
  projectId: "realestate-mern-cd7ac",
  storageBucket: "realestate-mern-cd7ac.appspot.com",
  messagingSenderId: "807105418641",
  appId: "1:807105418641:web:fed002bd317a83f5d2f630",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
