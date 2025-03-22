"use client"

import { useEffect, useState } from "react"
import { db } from "../../firebase/firebase"
import { collection, getDocs } from "firebase/firestore"

const FirebaseDebug = () => {
  const [status, setStatus] = useState("Checking Firebase connection...")
  const [error, setError] = useState(null)

  useEffect(() => {
    const checkFirebase = async () => {
      try {
        // Try to get a collection from Firestore
        const querySnapshot = await getDocs(collection(db, "blogs"))
        setStatus(`Firebase connection successful! Found ${querySnapshot.size} blog posts.`)
      } catch (err) {
        console.error("Firebase connection error:", err)
        setError(err.message)
        setStatus("Firebase connection failed. See error below.")
      }
    }

    checkFirebase()
  }, [])

  return (
    <div style={{ padding: "20px", backgroundColor: "#1e2430", color: "white", borderRadius: "8px", margin: "20px 0" }}>
      <h3>Firebase Connection Status</h3>
      <p>{status}</p>
      {error && (
        <div style={{ backgroundColor: "#ff4d4d20", padding: "10px", borderRadius: "4px" }}>
          <p>
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}
    </div>
  )
}

export default FirebaseDebug

