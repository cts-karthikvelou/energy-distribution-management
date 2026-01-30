import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAHR9VCCABq2Hy2pBc_R6bJH27Lhy1MuDM",
  authDomain: "solar-energy-ai.firebaseapp.com",
  projectId: "solar-energy-ai",
  storageBucket: "solar-energy-ai.firebasestorage.app",
  messagingSenderId: "242831992826",
  appId: "1:242831992826:web:a439b698170f578ec1a643",
  measurementId: "G-QR0L55QJDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Google Provider
export const provider = new GoogleAuthProvider();

// Export sign-in popup
export { signInWithPopup };
