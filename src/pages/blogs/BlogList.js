"use client"

import { useEffect, useState } from "react"
import styled from "styled-components"
import { db } from "../../firebase/firebase"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"

// Cosmic blue-purple color palette
const colors = {
  background: "#1a1a2e", // Deep blue-purple
  backgroundGradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)", // Cosmic gradient
  cardBackground: "#16213e", // Slightly lighter blue
  cardBackgroundHover: "#0f3460", // Hover state with more purple
  subteamBackground: "#0f3460", // Darker blue-purple for subteams
  subteamBackgroundHover: "#1a1a4f", // Hover state with more purple
  primary: "#9d4edd", // Vibrant purple accent
  secondary: "#c8b6ff", // Lighter purple
  accent: "#7b2cbf", // Deep purple accent
  text: "#e6f1ff", // Almost white text
  textLight: "#a2a8d3", // Light purple-blue text
  border: "#38305f", // Medium purple for borders
  highlight: "rgba(157, 78, 221, 0.15)", // Subtle purple highlight
}

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
    return <LoadingContainer>Loading blogs...</LoadingContainer>
  }

  return (
    <BlogListContainer>
      <SectionTitle>Latest Blog Posts</SectionTitle>
      {blogs.length ? (
        <BlogGrid>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} onClick={() => openBlogDetail(blog)}>
              {blog.imageUrl && (
                <BlogImageContainer>
                  <BlogImage src={blog.imageUrl || "/placeholder.svg"} alt={blog.title} />
                </BlogImageContainer>
              )}
              <BlogContent>
                <BlogCardTitle>{blog.title}</BlogCardTitle>
                <BlogCardText>{blog.content}</BlogCardText>
                <BlogCardDate>
                  {blog.createdAt
                    ? new Date(blog.createdAt.seconds * 1000).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "No date"}
                </BlogCardDate>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
      ) : (
        <NoBlogsMessage>
          <p>No blogs available. Be the first to create a post!</p>
        </NoBlogsMessage>
      )}

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <ModalOverlay onClick={closeBlogDetail}>
          <BlogDetailModal onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeBlogDetail}>&times;</CloseButton>

            {selectedBlog.imageUrl && (
              <BlogDetailImageContainer>
                <BlogDetailImage src={selectedBlog.imageUrl || "/placeholder.svg"} alt={selectedBlog.title} />
              </BlogDetailImageContainer>
            )}

            <BlogDetailContent>
              <BlogDetailTitle>{selectedBlog.title}</BlogDetailTitle>

              <BlogDetailDate>
                {selectedBlog.createdAt
                  ? new Date(selectedBlog.createdAt.seconds * 1000).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "No date"}
              </BlogDetailDate>

              <BlogDetailText>
                {selectedBlog.content
                  .split("\n")
                  .map((paragraph, index) => (paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />))}
              </BlogDetailText>
            </BlogDetailContent>
          </BlogDetailModal>
        </ModalOverlay>
      )}
    </BlogListContainer>
  )
}

// Styled Components
const BlogListContainer = styled.div`
  margin-top: 2rem;
`

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: ${colors.text};
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, ${colors.primary}, transparent);
    bottom: 0;
    left: 0;
  }
`

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const BlogCard = styled.div`
  background: linear-gradient(145deg, ${colors.cardBackground}, ${colors.background});
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(157, 78, 221, 0.1);
  position: relative;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(157, 78, 221, 0.2);
  }
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, 
                rgba(157, 78, 221, 0.05), 
                rgba(157, 78, 221, 0));
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;
  }
  
  &:hover:before {
    opacity: 1;
  }
`

const BlogImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  background-color: #1a1f2c;
`

const BlogImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${BlogCard}:hover & {
    transform: scale(1.05);
  }
`

const BlogContent = styled.div`
  padding: 1.5rem;
  position: relative;
  z-index: 2;
`

const BlogCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: ${colors.text};
  line-height: 1.4;
`

const BlogCardText = styled.p`
  margin: 0 0 1rem 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  color: ${colors.textLight};
  font-size: 0.95rem;
`

const BlogCardDate = styled.small`
  color: ${colors.secondary};
  font-size: 0.875rem;
  display: block;
  margin-top: auto;
`

const NoBlogsMessage = styled.div`
  text-align: center;
  padding: 3rem;
  background: linear-gradient(145deg, ${colors.cardBackground}, ${colors.background});
  border-radius: 12px;
  font-size: 1.25rem;
  border: 1px solid rgba(157, 78, 221, 0.1);
  color: ${colors.textLight};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`

const LoadingContainer = styled.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.25rem;
  color: ${colors.textLight};
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:after {
    content: "...";
    animation: loadingDots 1.5s infinite;
    width: 1.5em;
    text-align: left;
    display: inline-block;
  }
  
  @keyframes loadingDots {
    0%, 20% { content: "."; }
    40% { content: ".."; }
    60%, 100% { content: "..."; }
  }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(10, 15, 30, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`

const BlogDetailModal = styled.div`
  background: linear-gradient(145deg, ${colors.cardBackground}, ${colors.background});
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 
              0 0 0 1px rgba(255, 255, 255, 0.1),
              0 0 30px rgba(157, 78, 221, 0.2);
  border: 1px solid rgba(157, 78, 221, 0.2);
  display: flex;
  flex-direction: column;
  animation: modalAppear 0.3s ease-out;
  
  @keyframes modalAppear {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(10, 15, 30, 0.2);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(157, 78, 221, 0.5);
    border-radius: 4px;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(157, 78, 221, 0.8);
    transform: rotate(90deg);
  }
`

const BlogDetailImageContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
`

const BlogDetailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const BlogDetailContent = styled.div`
  padding: 2rem;
`

const BlogDetailTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  color: ${colors.text};
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`

const BlogDetailDate = styled.div`
  color: ${colors.secondary};
  font-size: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: ${colors.primary};
    border-radius: 50%;
    margin-right: 0.75rem;
  }
`

const BlogDetailText = styled.div`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${colors.textLight};
  
  p {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export default BlogList