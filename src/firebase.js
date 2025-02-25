import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDoqx0Qhe-z3ACIwJleA-yVp9fAx_kl4Xc",
  authDomain: "eventsphere-v1.firebaseapp.com",
  projectId: "eventsphere-v1",
  storageBucket: "eventsphere-v1.firebasestorage.app",
  messagingSenderId: "75907595576",
  appId: "1:75907595576:web:5f9b1da6001fbc00f895cd",
  measurementId: "G-WELHTQGRGL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
