"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { darker } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"
import BlogsForm from "./BlogsForm"

const Container = styled.div`
  background-color: ${darker};
  padding: 4rem 0;
  min-height: calc(100vh - 5.375rem);
  margin-top: 5.375rem;
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const PageTitle = styled.h1`
  ${Heading}
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
`

const BlogsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
`

const BlogsCard = styled.article`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const BlogsImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`

const BlogsContent = styled.div`
  padding: 1.5rem;
`

const BlogsDate = styled.p`
  color: #bdc3c7;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`

const BlogsTitle = styled.h2`
  ${Heading}
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const BlogsText = styled.p`
  ${Paragraph}
  white-space: pre-wrap;
  line-height: 1.6;
`

const Blogs = () => {
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("BlogsPosts")
    return savedPosts ? JSON.parse(savedPosts) : []
  })

  useEffect(() => {
    localStorage.setItem("BlogsPosts", JSON.stringify(posts))
  }, [posts])

  const handleNewPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now(), // Add unique ID for each post
      timestamp: new Date().toLocaleString(),
    }
    setPosts((prevPosts) => [newPost, ...prevPosts])
  }

  return (
    <Container>
      <ContentWrapper>
        <PageTitle>TJUAV Blogs</PageTitle>

        <BlogsGrid>
          <BlogsForm onSubmit={handleNewPost} />

          {posts.map((post) => (
            <BlogsCard key={post.id}>
              {post.image && <BlogsImage src={post.image} alt={post.title} />}
              <BlogsContent>
                <BlogsDate>{post.timestamp}</BlogsDate>
                <BlogsTitle>{post.title}</BlogsTitle>
                <BlogsText>{post.content}</BlogsText>
              </BlogsContent>
            </BlogsCard>
          ))}
        </BlogsGrid>
      </ContentWrapper>
    </Container>
  )
}

export default Blogs