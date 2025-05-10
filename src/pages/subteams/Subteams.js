import Data from "./assets/data.json"
import TeamCard from "./components/TeamCard.js"
import ParticleBackground from "./components/ParticleBackground.js"
import CosmicBackground from "./components/CosmicBackground.js"
import styled from "styled-components"

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

const Subteams = (props) => {
  return (
    <PageContainer>
      <CosmicBackground />
      <ParticleBackground colors={["#9d4edd", "#5e60ce", "#5390d9"]} />
      <HeroSection>
        <HeroTitle>Our Teams</HeroTitle>
        <HeroSubtitle>Here are our subteams of mechanical, programming, and 
			electronics!</HeroSubtitle>
      </HeroSection>
      <TeamsContainer>
        {Data.teams.map((value) => (
          <TeamCard data={value} key={value.name} colors={colors} />
        ))}
      </TeamsContainer>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: static;
  padding: 2rem 0;
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

const TeamsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export default Subteams

