
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-78ca8.firebaseapp.com",
  projectId: "mern-blog-78ca8",
  storageBucket: "mern-blog-78ca8.firebasestorage.app",
  messagingSenderId: "503195894008",
  appId: "1:503195894008:web:49a9e3e35d974808d53b0d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
