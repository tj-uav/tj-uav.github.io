"use client"

import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase/firebase"
import "./BlogStyles.css"

const BlogForm = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    try {
      setIsSubmitting(true)
      setError(null)

      // Check if the database connection is working
      if (!db) {
        throw new Error("Database connection not established")
      }

      // Log the data being submitted for debugging
      console.log("Submitting blog post:", { title, content })

      // Create a reference to the blogs collection
      const blogsCollectionRef = collection(db, "blogs")
      console.log("Collection reference created:", blogsCollectionRef)

      // Add the document
      const docRef = await addDoc(blogsCollectionRef, {
        title,
        content,
        createdAt: serverTimestamp(),
      })

      console.log("Document written with ID: ", docRef.id)

      // Clear form and close modal on success
      setTitle("")
      setContent("")
      onClose()
    } catch (error) {
      console.error("Error adding blog post:", error)
      setError(error.message || "Failed to add blog post. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeErrorMessage = () => {
    setError(null)
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={closeErrorMessage} className="close-error-button">
              OK
            </button>
          </div>
        )}

        <div className="modal-header">
          <h3 className="modal-title">Create New Blog Post</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="blog-form">
          <div className="form-group">
            <label className="form-label" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              className="form-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              className="form-textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog content here... (Press Enter twice for a new paragraph)"
              rows={8}
              required
            />
            <small className="form-hint">Tip: Press Enter twice to create a new paragraph.</small>
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? "Publishing..." : "Publish Post"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default BlogForm

