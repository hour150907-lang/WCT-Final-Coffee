// src/firebase.js
//
// This file connects Coffee House to Firebase so we can use Login/Register.
//
// SETUP STEPS (do these once):
// 1. Go to https://console.firebase.google.com and create a project.
// 2. Inside the project, click the "</>" (web app) icon to register a web app.
// 3. Firebase will show you a config object like the one below — copy YOUR
//    values and paste them in place of the placeholders.
// 4. In the left menu go to Build -> Authentication -> "Get started".
// 5. Under "Sign-in method", enable "Email/Password".
//
// That's it — once this file has your real values, Login.jsx and
// Register.jsx will work.

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfj61ZWed6O6yYpWObvGI5uW4GUKGuTEQ",
  authDomain: "wct-final-project-coffee-web.firebaseapp.com",
  projectId: "wct-final-project-coffee-web",
  storageBucket: "wct-final-project-coffee-web.firebasestorage.app",
  messagingSenderId: "1078181315087",
  appId: "1:1078181315087:web:5a26a4e635b38a0835197a",
  measurementId: "G-JGQED2D9EM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
