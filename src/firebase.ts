// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-L-nBSQa03D-tzNU9FvvgAx8VMbLG-4g",
  authDomain: "stripe-subscriptions-2e77d.firebaseapp.com",
  projectId: "stripe-subscriptions-2e77d",
  storageBucket: "stripe-subscriptions-2e77d.appspot.com",
  messagingSenderId: "465407925299",
  appId: "1:465407925299:web:a96b4f9cec4b75abe95746"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => { 
  return app;
}