import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Subheading, Heading } from "theme/Styles.js"
import { darker } from "theme/Colors"
import { HorizontalContainer } from "theme/Components.js"
import Sponsors from "./SponsorAssets/sponsors.json"

// pass a scale property to increase the size of sponsor icons
// props.scale = <scale factor>
const SponsorList = (props) => {
  return (
<Container>
  <Content>
    <Caption>
      {Sponsors.title}
    </Caption>
    <HorizontalContainer>
      {Sponsors.sponsors.map((element) => {
        return <Logo jsonData={element} key={element.alt} scale={"logoScale" in props ? props.logoScale : 1} />
      })}
    </HorizontalContainer>
  </Content>
</Container>
  )
}

const Container = styled.footer`
  background: rgba(10, 15, 30, 0.92);
  padding: 3vh 8vw;
  margin-top: 2vh;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(13, 110, 253, 0.2);
  border-radius: 12px 12px 0 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`

const Caption = styled.h2`
  ${Subheading}
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(13, 110, 253, 0.6), 0 0 20px rgba(13, 110, 253, 0.4);
  margin-bottom: 2rem;
  text-align: center;
`

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
  border-top: 1px solid rgba(13, 110, 253, 0.2);
  padding-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  min-width: 200px;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const LinkTitle = styled.h3`
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  text-shadow: 0 0 8px rgba(13, 110, 253, 0.6);
`

const StyledLink = styled(Link)`
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-shadow: 0 0 8px rgba(13, 110, 253, 0.3);
  
  &:hover {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 0 15px rgba(13, 110, 253, 0.6);
    transform: translateY(-2px);
  }
`

const StyledExternalLink = styled.a`
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-shadow: 0 0 8px rgba(13, 110, 253, 0.3);
  
  &:hover {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 0 15px rgba(13, 110, 253, 0.6);
    transform: translateY(-2px);
  }
`

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(13, 110, 253, 0.2);
`

const Logo = (props) => {
  let imageSource = require("./SponsorAssets/" + props.jsonData.image)

  if ("link" in props.jsonData) {
    return (
      <a href={props.jsonData.link} target="_blank" rel="noreferrer">
        <StyledImage src={imageSource} alt={props.jsonData.alt} scale={props.scale ?? 1} />
      </a>
    )
  } else {
    return (
      <StyledImage src={imageSource} alt={props.jsonData.alt} scale={props.scale ?? 1} />
    )
  }
}

const StyledImage = styled.img`
  object-fit: contain;
  height: ${props => props.scale * 15}vh;
  margin-right: 4vh;
  margin-bottom: 2vh;
  margin-top: 2vh;
  max-width: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

export default SponsorList