// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxQ4gc5PmL5IqKqxwg0Vv0GLODzfXLH34",
  authDomain: "fir-exampleusage.firebaseapp.com",
  projectId: "fir-exampleusage",
  storageBucket: "fir-exampleusage.firebasestorage.app",
  messagingSenderId: "442720674087",
  appId: "1:442720674087:web:a2888a51c42508a9a90902",
  measurementId: "G-5M7R99Z0Z6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);