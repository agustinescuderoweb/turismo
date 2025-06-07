// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCwl25oHDBLyDtiityhdso0p62NzoGW-Wo",
  authDomain: "turismo-50861.firebaseapp.com",
  projectId: "turismo-50861",
  storageBucket: "turismo-50861.firebasestorage.app",
  messagingSenderId: "535352745364",
  appId: "1:535352745364:web:dd954c201a704b99e58381",
  measurementId: "G-J2GNBMX2NB"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta Firestore
const db = getFirestore(app);

export { db };
