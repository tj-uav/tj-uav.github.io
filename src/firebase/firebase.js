// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3NrLrav1y7FHZjHny4pPkEwZkxgAov_0",
  authDomain: "tjuav-6b532.firebaseapp.com",
  projectId: "tjuav-6b532",
  storageBucket: "tjuav-6b532.appspot.com",
  messagingSenderId: "556081266256",
  appId: "1:556081266256:web:d86b39b29869c2453f9b55",
  measurementId: "G-5MVEGTP6FR",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize services
const db = getFirestore(app)
const storage = getStorage(app)

// Export the Firebase services
export { app, db, storage }

