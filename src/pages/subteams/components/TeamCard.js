"use client"

import SubteamCard from "./SubteamCard"
import { useState } from "react"
import styled from "styled-components"

// Default cosmic blue-purple color palette (will be overridden by props)
const defaultColors = {
  background: "#1a1a2e", // Deep blue-purple
  cardBackground: "#16213e", // Slightly lighter blue
  cardBackgroundHover: "#0f3460", // Hover state with more purple
  primary: "#9d4edd", // Vibrant purple accent
  secondary: "#c8b6ff", // Lighter purple
  accent: "#7b2cbf", // Deep purple accent
  text: "#e6f1ff", // Almost white text
  textLight: "#a2a8d3", // Light purple-blue text
  border: "#38305f", // Medium purple for borders
  highlight: "rgba(157, 78, 221, 0.15)", // Subtle purple highlight
}

const TeamCard = (props) => {
  const [expanded, setExpanded] = useState(true)
  const teamData = props.data
  const colors = props.colors || defaultColors

  return (
    <StyledCardContainer colors={colors}>
      <CardHeader onClick={() => setExpanded(!expanded)} colors={colors}>
        <HeaderContent>
          <IconWrapper colors={colors}>
            <CardIcon src={require("../assets/" + teamData.icon.filename)} alt={teamData.icon.alt} />
          </IconWrapper>
          <TitleText colors={colors}>{teamData.name}</TitleText>
        </HeaderContent>
        <ExpandButton expanded={expanded} colors={colors}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d={expanded ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ExpandButton>
      </CardHeader>

      {expanded && (
        <CardContent>
          <DescriptionText colors={colors}>{teamData.description}</DescriptionText>
          {teamData.subteams.length > 0 && (
            <SubteamsContainer>
              <SubteamsHeading colors={colors}>Subteams</SubteamsHeading>
              <SubteamsList>
                {teamData.subteams.map((value) => (
                  <SubteamCard data={value} key={value.name} colors={colors} />
                ))}
              </SubteamsList>
            </SubteamsContainer>
          )}
        </CardContent>
      )}
    </StyledCardContainer>
  )
}

const StyledCardContainer = styled.div`
  background-color: ${(props) => props.colors.cardBackground};
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  border: 1px solid ${(props) => props.colors.border};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    background-color: ${(props) => props.colors.cardBackgroundHover};
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid ${(props) => props.colors.border};
  position: relative;
  overflow: hidden;
  
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(90deg, transparent, ${(props) => props.colors.highlight});
    opacity: 0.3;
  }
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.colors.highlight};
  border-radius: 8px;
  margin-right: 1rem;
  padding: 10px;
  border: 1px solid rgba(157, 78, 221, 0.2);
  box-shadow: 0 0 15px rgba(157, 78, 221, 0.2);
`

const CardIcon = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(260deg);
`

const TitleText = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.colors.text};
  margin: 0;
  background: linear-gradient(90deg, ${(props) => props.colors.text}, ${(props) => props.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

const ExpandButton = styled.div`
  color: ${(props) => props.colors.primary};
  transform: ${(props) => (props.expanded ? "rotate(0deg)" : "rotate(-90deg)")};
  transition: transform 0.3s ease;
  z-index: 1;
`

const CardContent = styled.div`
  padding: 1.5rem;
`

const DescriptionText = styled.p`
  color: ${(props) => props.colors.textLight};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const SubteamsContainer = styled.div`
  margin-top: 1rem;
`

const SubteamsHeading = styled.h3`
  font-size: 1.1rem;
  color: ${(props) => props.colors.text};
  margin-bottom: 1rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
  
  &:after {
    content: "";
    position: absolute;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, ${(props) => props.colors.primary}, ${(props) => props.colors.secondary});
    bottom: 0;
    left: 0;
  }
`

const SubteamsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export default TeamCard

