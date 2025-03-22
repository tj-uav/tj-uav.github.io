"use client"

import { useEffect, useState } from "react"
import { db } from "../../firebase/firebase"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import "./BlogStyles.css"

const BlogList = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedBlog, setSelectedBlog] = useState(null)

  useEffect(() => {
    const blogsRef = collection(db, "blogs")
    const q = query(blogsRef, orderBy("createdAt", "desc"))

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const blogsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setBlogs(blogsData)
        setLoading(false)
      },
      (error) => {
        console.error("Error fetching blogs:", error)
        setLoading(false)
      },
    )

    return () => unsubscribe()
  }, [])

  const openBlogDetail = (blog) => {
    setSelectedBlog(blog)
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  const closeBlogDetail = () => {
    setSelectedBlog(null)
    // Re-enable scrolling
    document.body.style.overflow = "auto"
  }

  if (loading) {
    return <div className="loading">Loading blogs...</div>
  }

  return (
    <div>
      <h3 className="blog-section-title">Latest Blog Posts</h3>
      {blogs.length ? (
        <div className="blog-list">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card" onClick={() => openBlogDetail(blog)}>
              {blog.imageUrl && (
                <img src={blog.imageUrl || "/placeholder.svg"} alt={blog.title} className="blog-image" />
              )}
              <div className="blog-content">
                <h4 className="blog-card-title">{blog.title}</h4>
                <p className="blog-card-text">{blog.content}</p>
                <small className="blog-card-date">
                  {blog.createdAt
                    ? new Date(blog.createdAt.seconds * 1000).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "No date"}
                </small>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-blogs">
          <p>No blogs available. Be the first to create a post!</p>
        </div>
      )}

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div className="modal-overlay" onClick={closeBlogDetail}>
          <div className="blog-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeBlogDetail}>
              &times;
            </button>

            {selectedBlog.imageUrl && (
              <div className="blog-detail-image-container">
                <img
                  src={selectedBlog.imageUrl || "/placeholder.svg"}
                  alt={selectedBlog.title}
                  className="blog-detail-image"
                />
              </div>
            )}

            <div className="blog-detail-content">
              <h2 className="blog-detail-title">{selectedBlog.title}</h2>

              <div className="blog-detail-date">
                {selectedBlog.createdAt
                  ? new Date(selectedBlog.createdAt.seconds * 1000).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "No date"}
              </div>

              <div className="blog-detail-text">
                {selectedBlog.content
                  .split("\n")
                  .map((paragraph, index) => (paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogList

