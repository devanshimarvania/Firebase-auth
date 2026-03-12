import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDx7s1h3Xwp65YalHLT5La5ElsvZyAyFhU",
  authDomain: "fir-auth-app-110326.firebaseapp.com",
  projectId: "fir-auth-app-110326",
  storageBucket: "fir-auth-app-110326.firebasestorage.app",
  messagingSenderId: "847225495844",
  appId: "1:847225495844:web:08738574ec1f3f703653b1"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()