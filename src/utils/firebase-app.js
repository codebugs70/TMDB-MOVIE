import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQvmEcnqxB3ZOn3S_PwFUVAiG1hkjMCkM",
  authDomain: "fir-f5398.firebaseapp.com",
  projectId: "fir-f5398",
  storageBucket: "fir-f5398.appspot.com",
  messagingSenderId: "505706514758",
  appId: "1:505706514758:web:a65a5e6eb0616b292ffd47",
  measurementId: "G-9DH5G7YQH3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
