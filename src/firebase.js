import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCwTXEPoS2_S1FHhBZW5ev3l6Kz0Fsn9h0",
    authDomain: "evend-b7b9d.firebaseapp.com",
    projectId: "evend-b7b9d",
    storageBucket: "evend-b7b9d.firebasestorage.app",
    messagingSenderId: "302475418596",
    appId: "1:302475418596:web:54f449f26c0694612585f1",
    measurementId: "G-L8SJ4W2B44"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };