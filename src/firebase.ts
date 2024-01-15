// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:'', // YOUR API KEY
  authDomain:'', // YOUR AUTH DOMAIN,
  projectId:'', // YOUR PROJECT ID,",
  storageBucket:'', // YOUR STORAGE BUCKET,
  messagingSenderId:'', // YOUR MESSAGING SENDER ID,
  appId: '' // YOUR APP ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => { 
  return app;
}