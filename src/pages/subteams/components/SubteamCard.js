import styled from "styled-components"

// Default cosmic blue-purple color palette (will be overridden by props)
const defaultColors = {
  background: "#1a1a2e", // Deep blue-purple
  cardBackground: "#16213e", // Slightly lighter blue
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

const SubteamCard = (props) => {
  const subteamData = props.data
  const colors = props.colors || defaultColors

  return (
    <StyledSubteamCard colors={colors}>
      <CardTitle colors={colors}>{subteamData.name}</CardTitle>
      <CardDescription colors={colors}>{subteamData.description}</CardDescription>
      <GlowEffect colors={colors} />
    </StyledSubteamCard>
  )
}

const StyledSubteamCard = styled.div`
  background-color: ${(props) => props.colors.subteamBackground || props.colors.cardBackgroundHover};
  border-radius: 6px;
  padding: 1.25rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  border: 1px solid ${(props) => props.colors.border};
  height: 100%;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, ${(props) => props.colors.primary}, ${(props) => props.colors.secondary});
    opacity: 0.8;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(157, 78, 221, 0.2);
    background-color: ${(props) => props.colors.subteamBackgroundHover || props.colors.cardBackground};
  }
`

const CardTitle = styled.h4`
  font-family: Poppins;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => props.colors.text};
  margin: 0 0 0.75rem 0;
  position: relative;
  z-index: 1;
`

const CardDescription = styled.p`
  color: ${(props) => props.colors.textLight};
  font-family: Poppins;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  position: relative;
  z-index: 1;
`

const GlowEffect = styled.div`
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, ${(props) => props.colors.primary} 0%, transparent 70%);
  opacity: 0.1;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
`

export default SubteamCard

