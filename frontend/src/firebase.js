// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnWOHKHt7LJDLY370wxQ2PQPDmi6qr3dY",
  authDomain: "font-canvas.firebaseapp.com",
  projectId: "font-canvas",
  storageBucket: "font-canvas.firebasestorage.app",
  messagingSenderId: "482273644684",
  appId: "1:482273644684:web:2ad0cf82e08b698bb9aba9",
  measurementId: "G-8MPNX9KJE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics - this will automatically track page views and unique users
getAnalytics(app);