// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vendor-app-2e1fa.firebaseapp.com",
  projectId: "vendor-app-2e1fa",
  storageBucket: "vendor-app-2e1fa.appspot.com",
  messagingSenderId: "523598217886",
  appId: "1:523598217886:web:36d0414ec874e2e5caf18f"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);