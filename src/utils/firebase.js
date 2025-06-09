// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "blogapp-45987.firebaseapp.com",
  projectId: "blogapp-45987",
  storageBucket: "blogapp-45987.firebasestorage.app",
  messagingSenderId: "847500137531",
  appId: "1:847500137531:web:ed4ac14ad4a20bfb4b381e",
  measurementId: "G-KYY9RLVD9E"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };


