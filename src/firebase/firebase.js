// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your Firebase configuration
// Using fallback values in case environment variables are not set
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

// Console log to debug Firebase configuration
console.log("Firebase configuration:", {
  apiKeyExists: !!process.env.REACT_APP_FIREBASE_API_KEY,
  projectIdExists: !!process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appIdExists: !!process.env.REACT_APP_FIREBASE_APP_ID
})

// Initialize Firebase with error handling
let app
let db
let storage

try {
  app = initializeApp(firebaseConfig)
  
  // Initialize services
  db = getFirestore(app)
  storage = getStorage(app)
  
  // Enable offline persistence
  enableIndexedDbPersistence(db)
    .then(() => {
      console.log("Firebase offline persistence enabled")
    })
    .catch((err) => {
      console.error("Firebase persistence error:", err.code, err.message)
    })
  
  console.log("Firebase initialized successfully")
} catch (error) {
  console.error("Firebase initialization error:", error)
}


// Export the Firebase services
export { app, db, storage }