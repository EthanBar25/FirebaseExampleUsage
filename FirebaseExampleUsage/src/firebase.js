import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxQ4gc5PmL5IqKqxwg0Vv0GLODzfXLH34",
  authDomain: "fir-exampleusage.firebaseapp.com",
  projectId: "fir-exampleusage",
  storageBucket: "fir-exampleusage.firebasestorage.app",
  messagingSenderId: "442720674087",
  appId: "1:442720674087:web:a2888a51c42508a9a90902",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);