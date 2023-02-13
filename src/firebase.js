// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRSk-my7pwFCmsBXPA6T-joKbD8nHP-d8",
  authDomain: "proyecto-1-a2854.firebaseapp.com",
  projectId: "proyecto-1-a2854",
  storageBucket: "proyecto-1-a2854.appspot.com",
  messagingSenderId: "354647787305",
  appId: "1:354647787305:web:1dc9d584d2a715c97d1938",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
