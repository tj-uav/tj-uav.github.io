"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import BlogForm from "./BlogForm"
import BlogList from "./BlogList"
import CosmicBackground from "./components/CosmicBackground"
import ParticleBackground from "./components/ParticleBackground"
import "./BlogStyles.css"

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

// Use a hardcoded password for development - in production this should be secured
const CORRECT_PASSWORD = process.env.REACT_APP_PASSWORD

const BlogsPage = () => {
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false)
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authAction, setAuthAction] = useState(null) // Store the action requiring auth
  const [blogToDelete, setBlogToDelete] = useState(null) // Store blog to delete if auth is requested for deletion
  
  // Log to verify the modal state changes
  useEffect(() => {
    console.log("Blog modal state:", isBlogModalOpen)
  }, [isBlogModalOpen])

  const openPasswordModal = (action = "create", blog = null) => {
    setPassword("")
    setError("")
    setAuthAction(action)
    
    if (action === "delete") {
      setBlogToDelete(blog)
    }
    
    setIsPasswordModalOpen(true)
  }

  const closePasswordModal = () => {
    setIsPasswordModalOpen(false)
    setPassword("")
    setError("")
    // We're keeping authAction and blogToDelete since we need them after authentication
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true)
      setIsPasswordModalOpen(false)
      
      // Handle different auth actions
      if (authAction === "create") {
        setIsBlogModalOpen(true)
      }
      // No need for explicit handling of delete action here 
      // The BlogList component will handle showing the confirmation dialog
      // via the useEffect that watches for isAuthenticated changes
    } else {
      setError("Incorrect password. Access denied.")
    }
  }

  const closeBlogModal = () => {
    console.log("Closing blog modal")
    setIsBlogModalOpen(false)
  }
  
  // Handler for auth requests from child components
  const handleAuthRequest = (action, blog = null) => {
    if (isAuthenticated) {
      // If already authenticated, directly perform the action
      if (action === "create") {
        setIsBlogModalOpen(true)
      }
      // For delete action, BlogList will handle it once it knows authentication status
    } else {
      // Request authentication with the specific action
      openPasswordModal(action, blog)
    }
  }

  return (
    <PageContainer>
      <CosmicBackground />
      <ParticleBackground colors={["#9d4edd", "#5e60ce", "#5390d9"]} />
      <ContentContainer>
        <HeroSection>
          <HeroTitle>TJUAV Blog</HeroTitle>
          <HeroSubtitle>Latest updates, news, and insights from our team</HeroSubtitle>
        </HeroSection>

        <AddButtonContainer>
          <AddButton 
            onClick={() => handleAuthRequest("create")} 
            aria-label="Add new blog post"
          >
            <PlusIcon>+</PlusIcon>
          </AddButton>
        </AddButtonContainer>

        {isPasswordModalOpen && (
          <ModalOverlay onClick={closePasswordModal}>
            <PasswordModal onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <ModalTitle>Admin Access</ModalTitle>
                <CloseButton onClick={closePasswordModal}>&times;</CloseButton>
              </ModalHeader>

              <form onSubmit={handlePasswordSubmit}>
                <FormGroup>
                  <FormLabel>Enter Password</FormLabel>
                  <FormInput
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    required
                  />
                  {error && <ErrorMessage>{error}</ErrorMessage>}
                </FormGroup>

                <ButtonGroup>
                  <SubmitButton type="submit">Submit</SubmitButton>
                  <CancelButton type="button" onClick={closePasswordModal}>
                    Cancel
                  </CancelButton>
                </ButtonGroup>
              </form>
            </PasswordModal>
          </ModalOverlay>
        )}

        <BlogForm isOpen={isBlogModalOpen} onClose={closeBlogModal} />
        <BlogList 
          isAuthenticated={isAuthenticated} 
          onAuthRequest={handleAuthRequest} 
        />
      </ContentContainer>
    </PageContainer>
  )
}

// Styled Components
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 2rem 0;
`

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  color: ${colors.text};
`

const HeroSection = styled.div`
  font-family: Poppins;
  text-align: center;
  padding: 2rem 1rem 3rem;
  max-width: 800px;
  margin: 0 auto;
`

const HeroTitle = styled.h1`
  font-family: Poppins;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: "";
    position: absolute;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const HeroSubtitle = styled.p`
  font-family: Poppins;
  font-size: 1.2rem;
  color: ${colors.textLight};
  max-width: 600px;
  margin: 1.5rem auto 0;
`

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`

const AddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff4d4d, #f9004d);
  border: none;
  color: white;
  font-family: Poppins;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(249, 0, 77, 0.4);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 6px 20px rgba(249, 0, 77, 0.5);
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
`

const PlusIcon = styled.span`
  line-height: 0;
  position: relative;
  top: -1px;
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

const PasswordModal = styled.div`
  background: linear-gradient(145deg, ${colors.cardBackground}, ${colors.background});
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 
              0 0 0 1px rgba(255, 255, 255, 0.1),
              0 0 30px rgba(157, 78, 221, 0.2);
  border: 1px solid rgba(157, 78, 221, 0.2);
  animation: modalAppear 0.3s ease-out;
  
  @keyframes modalAppear {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
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
  font-family: Poppins;
  font-size: 1.5rem;
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

const FormGroup = styled.div`
  margin: 1.5rem;
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

const ErrorMessage = styled.div`
  color: #ff4d4d;
  font-family: Poppins;
  font-size: 0.85rem;
  margin-top: 0.75rem;
  padding: 0.5rem;
  background-color: rgba(255, 77, 77, 0.1);
  border-radius: 4px;
  border-left: 3px solid #ff4d4d;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  background: rgba(15, 52, 96, 0.3);
  border-top: 1px solid rgba(157, 78, 221, 0.1);
`

const Button = styled.button`
  padding: 0.6rem 1.25rem;
  border-radius: 6px;
  font-family: Poppins;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
  }
`

const SubmitButton = styled(Button)`
  background: linear-gradient(135deg, ${colors.primary}, ${colors.accent});
  color: white;
  border: none;
  box-shadow: 0 4px 10px rgba(123, 44, 191, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(123, 44, 191, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const CancelButton = styled(Button)`
  background: transparent;
  color: ${colors.textLight};
  border: 1px solid rgba(162, 168, 211, 0.3);
  
  &:hover {
    background: rgba(162, 168, 211, 0.1);
    color: ${colors.text};
  }
`

export default BlogsPage