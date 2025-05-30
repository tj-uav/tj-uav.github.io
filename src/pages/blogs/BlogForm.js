"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/firebase"

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

const BlogForm = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [successMessage, setSuccessMessage] = useState("")
  const [debugInfo, setDebugInfo] = useState(null)

  // Reset form fields when modal is opened
  useEffect(() => {
    if (isOpen) {
      setTitle("")
      setContent("")
      setError(null)
      setSuccessMessage("")
      setIsSubmitting(false)
      setDebugInfo(null)
    }
  }, [isOpen])

  // Debug function to verify Firebase database connection
  const checkFirebaseConnection = () => {
    try {
      const connectionInfo = {
        dbExists: !!db,
        dbType: db ? typeof db : 'undefined',
        firestoreProps: db ? Object.keys(db) : [],
        envVars: {
          apiKey: process.env.REACT_APP_FIREBASE_API_KEY ? "Set" : "Not set",
          projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ? "Set" : "Not set",
          appId: process.env.REACT_APP_FIREBASE_APP_ID ? "Set" : "Not set"
        }
      }
      setDebugInfo(connectionInfo)
      return connectionInfo
    } catch (error) {
      setDebugInfo({ error: error.message })
      return { error: error.message }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return
    
    // CHANGE: Close modal immediately after clicking Publish
    onClose();
    
    setIsSubmitting(true)
    setError(null)
    setSuccessMessage("")
    
    try {
      // Create a reference to the blogs collection
      const blogsCollectionRef = collection(db, "blogs")
      
      // Add the document with all necessary fields
      const blogData = {
        title,
        content,
        timestamp: new Date().toISOString(),
        blogId: `blog_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
      }
      
      // Add the document
      await addDoc(blogsCollectionRef, blogData)
      
      // Reset form fields
      setTitle("")
      setContent("")
    } catch (error) {
      console.error("Error adding blog post:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeErrorMessage = () => {
    setError(null)
  }

  const closeSuccessMessage = () => {
    setSuccessMessage("")
    onClose() // Close the modal when OK is clicked on success message
  }

  if (!isOpen) return null

  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <FormModal onClick={(e) => e.stopPropagation()}>
        {error && (
          <ErrorContainer>
            <ErrorMessage>{error}</ErrorMessage>
            <ErrorButton onClick={closeErrorMessage}>OK</ErrorButton>
          </ErrorContainer>
        )}
        
        {successMessage && (
          <SuccessContainer>
            <SuccessMessage>{successMessage}</SuccessMessage>
            <SuccessButton onClick={closeSuccessMessage}>OK</SuccessButton>
          </SuccessContainer>
        )}

        <ModalHeader>
          <ModalTitle>Create New Blog Post</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <form onSubmit={handleSubmit}>
          <FormContent>
            <FormGroup>
              <FormLabel htmlFor="title">Title</FormLabel>
              <FormInput
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="content">Content</FormLabel>
              <FormTextarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog content here..."
                rows={8}
                required
              />
            </FormGroup>
          </FormContent>
          <FormFooter>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Publishing..." : "Publish Post"}
            </SubmitButton>
          </FormFooter>
        </form>
      </FormModal>
    </ModalOverlay>
  )
}

// Styled Components
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

const FormModal = styled.div`
  background: linear-gradient(145deg, ${colors.cardBackground}, ${colors.background});
  border-radius: 12px;
  width: 90%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 
              0 0 0 1px rgba(255, 255, 255, 0.1),
              0 0 30px rgba(157, 78, 221, 0.2);
  border: 1px solid rgba(157, 78, 221, 0.2);
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

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(157, 78, 221, 0.2);
  background: rgba(15, 52, 96, 0.5);
`

const ModalTitle = styled.h3`
  margin: 0;
  font-family: Poppins;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text};
  letter-spacing: 0.5px;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${colors.textLight};
  font-size: 1.5rem;
  font-family: Poppins;
  cursor: pointer;
  transition: color 0.2s ease;
  line-height: 1;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${colors.primary};
  }
`

const FormContent = styled.div`
  padding: 1.5rem;
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.75rem;
  font-family: Poppins;
  font-size: 0.95rem;
  font-weight: 500;
  color: ${colors.textLight};
`

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgba(10, 15, 30, 0.5);
  border: 1px solid rgba(157, 78, 221, 0.3);
  border-radius: 6px;
  color: ${colors.text};
  font-family: Poppins;
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(157, 78, 221, 0.2);
  }
  
  &::placeholder {
    color: rgba(162, 168, 211, 0.5);
  }
`

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: rgba(10, 15, 30, 0.5);
  border: 1px solid rgba(157, 78, 221, 0.3);
  border-radius: 6px;
  color: ${colors.text};
  font-family: Poppins;
  font-size: 1rem;
  transition: all 0.2s ease;
  min-height: 150px;
  resize: vertical;
  line-height: 1.5;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 3px rgba(157, 78, 221, 0.2);
  }
  
  &::placeholder {
    color: rgba(162, 168, 211, 0.5);
  }
`

const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1.25rem 1.5rem;
  background: rgba(15, 52, 96, 0.3);
  border-top: 1px solid rgba(157, 78, 221, 0.1);
`

const SubmitButton = styled.button`
  background: linear-gradient(135deg, ${colors.primary}, ${colors.accent});
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-family: Poppins;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 10px rgba(123, 44, 191, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(123, 44, 191, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background: linear-gradient(135deg, #666, #444);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`

const ErrorContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(26, 26, 46, 0.95);
  border: 1px solid #ff4d4d;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  z-index: 1100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 77, 77, 0.2);
  max-width: 80%;
  animation: errorAppear 0.3s ease-out;
  
  @keyframes errorAppear {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

const SuccessContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(26, 46, 36, 0.95);
  border: 1px solid #4dff77;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  z-index: 1100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(77, 255, 119, 0.2);
  max-width: 80%;
  animation: successAppear 0.3s ease-out;
  
  @keyframes successAppear {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

const ErrorMessage = styled.p`
  margin: 0 0 1rem 0;
  color: white;
`

const SuccessMessage = styled.p`
  margin: 0 0 1rem 0;
  color: white;
  font-weight: 500;
`

const ErrorButton = styled.button`
  background: linear-gradient(135deg, #d4c05e, #e6d16a);
  color: #1a1a1a;
  border: none;
  border-radius: 50px;
  padding: 0.5rem 2rem;
  font-family: Poppins;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(212, 192, 94, 0.4);
  }
`

const SuccessButton = styled.button`
  background: linear-gradient(135deg, #4dbb7a, #2f9e64);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.5rem 2rem;
  font-family: Poppins;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(47, 158, 100, 0.4);
  }
`

export default BlogForm