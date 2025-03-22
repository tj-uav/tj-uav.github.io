"use client"

import { useState } from "react"
import BlogForm from "./BlogForm"
import BlogList from "./BlogList"
import "./BlogStyles.css"

const BlogsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2 className="blog-title">TJUAV Blog</h2>
        <button className="add-blog-button" onClick={openModal} aria-label="Add new blog post">
          +
        </button>
      </div>

      <BlogForm isOpen={isModalOpen} onClose={closeModal} />
      <BlogList />
    </div>
  )
}

export default BlogsPage

