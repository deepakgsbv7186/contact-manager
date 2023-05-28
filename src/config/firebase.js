// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseKey = import.meta.env.VITE_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "contact-manager-fe3f1.firebaseapp.com",
  projectId: "contact-manager-fe3f1",
  storageBucket: "contact-manager-fe3f1.appspot.com",
  messagingSenderId: "968305294835",
  appId: "1:968305294835:web:c052956248ec788fb16686",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
