// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjkErWTN8tJ_dkiv9l3w4geFzpXmEPkFs",
  authDomain: "bitirme-projesi-7cb87.firebaseapp.com",
  projectId: "bitirme-projesi-7cb87",
  storageBucket: "bitirme-projesi-7cb87.appspot.com", // Hata burada, doğru URL ile güncellendi.
  messagingSenderId: "1042071706209", // "FI1042071706209" değil, düz format olmalı.
  appId: "1:1042071706209:web:f81a077605e83501ee2820",
  measurementId: "G-8E840GVJ4L" // Buraya eksik olan virgülü ekledim!
};

// Firebase başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, doc, setDoc };
