"use client"
import styled from "styled-components"
import Main from "./components/Main"
import Container from "./components/Container"
import MemberCards from "./components/Big Cards/Members"
import Alumni from "./components/Big Cards/Alumni"
import CosmicBackground from "./components/CosmicBackground"
import ParticleBackground from "./components/ParticleBackground"

// Cosmic blue-purple color palette (same as blogs.js)
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

// Custom Container wrapper to override any existing styles
const StyledContainer = styled(Container)`
  background: transparent !important;
  box-shadow: none !important;
  max-width: 100% !important;
  padding: 0 !important;
  
  /* Style adjustments for member cards */
  .member-card {
    background: linear-gradient(145deg, ${colors.cardBackground}, ${colors.subteamBackground});
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 
                0 0 0 1px rgba(255, 255, 255, 0.1),
                0 0 30px rgba(157, 78, 221, 0.2);
    border: 1px solid rgba(157, 78, 221, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .member-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), 
                0 0 0 1px rgba(255, 255, 255, 0.15),
                0 0 40px rgba(157, 78, 221, 0.3);
  }

  /* Section titles */
  h2, h3 {
    color: ${colors.text};
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
  }

  h2:after, h3:after {
    content: "";
    position: absolute;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, ${colors.primary}, ${colors.secondary});
    bottom: -10px;
    left: 0;
  }

  /* Buttons and interactive elements */
  button, .button {
    background: linear-gradient(135deg, ${colors.primary}, ${colors.accent});
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0.6rem 1.25rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 10px rgba(123, 44, 191, 0.3);
  }

  button:hover, .button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(123, 44, 191, 0.4);
  }

  /* Links */
  a {
    color: ${colors.secondary};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${colors.primary};
  }
`

const Members = () => (
  <PageContainer>
    <CosmicBackground />
    <ParticleBackground colors={["#9d4edd", "#5e60ce", "#5390d9"]} />
    <ContentContainer>
      <HeroSection>
        <HeroTitle>TJUAV Team Members</HeroTitle>
        <HeroSubtitle>Meet the TJUAV Team Members!</HeroSubtitle>
      </HeroSection>
      <StyledContainer>
        <Main />
        <MemberCards />
        <Alumni />
      </StyledContainer>
    </ContentContainer>
  </PageContainer>
)

export default Members
