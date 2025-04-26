"use client"

import { useState } from "react"
import BlogForm from "./BlogForm"
import BlogList from "./BlogList"
import "./BlogStyles.css"

const CORRECT_PASSWORD ="1234"
const BlogsPage = () => {
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false)
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const openPasswordModal = () => {
    setPassword("")
    setError("")
    setIsPasswordModalOpen(true)
  }

  const closePasswordModal = () => {
    setIsPasswordModalOpen(false)
    setPassword("")
    setError("")
  }

  const handlePasswordSubmit = () => {
    if (password === CORRECT_PASSWORD) {
      setIsPasswordModalOpen(false)
      setIsBlogModalOpen(true)
    } else {
      setError("Incorrect password. Access denied.")
    }
  }

  const closeBlogModal = () => setIsBlogModalOpen(false)

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2 className="blog-title">TJUAV Blog</h2>
        <button
          id="plusButton"
          className="add-blog-button"
          onClick={openPasswordModal}
          aria-label="Add new blog post"
        >
          +
        </button>
      </div>
      {isPasswordModalOpen && (
        <div className="password-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="modal-content bg-white rounded-lg p-6 shadow-lg text-center w-80">
            <h3 className="text-xl font-semibold mb-4">Enter Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="password-input border rounded w-full p-2 mb-2"
            />
            {error && <p className="password-error text-red-600 mb-2">{error}</p>}
            <div className="password-actions flex justify-center space-x-4">
              <button
                onClick={handlePasswordSubmit}
                className="btn-submit bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Submit
              </button>
              <button
                onClick={closePasswordModal}
                className="btn-cancel bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <BlogForm isOpen={isBlogModalOpen} onClose={closeBlogModal} />
      <BlogList />
    </div>
  )
}

export default BlogsPage
