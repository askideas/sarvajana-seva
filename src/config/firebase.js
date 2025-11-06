import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBuZGs7tt6_22LyDVQhSd10-D8YmbMmceo",
  authDomain: "sarvajana-seva.firebaseapp.com",
  projectId: "sarvajana-seva",
  storageBucket: "sarvajana-seva.firebasestorage.app",
  messagingSenderId: "419695119841",
  appId: "1:419695119841:web:c55f2beaf1c97b33d256a0",
  measurementId: "G-KQC8DTB72K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;