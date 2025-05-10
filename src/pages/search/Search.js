import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import home_data from "../home/assets/data.json"
import members_data from "../members/assets/data.json"
import subteams_data from "../subteams/assets/data.json"
import CosmicBackground from "./components/CosmicBackground"
import ParticleBackground from "./components/ParticleBackground"

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
  font-family: "Poppins", Arial, sans-serif;
`

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  color: ${colors.text};
`

const SearchHeader = styled.div`
  text-align: center;
  padding: 2rem 1rem 3rem;
  max-width: 800px;
  margin: 0 auto;
`

const SearchTitle = styled.h1`
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

const QueryDisplay = styled.p`
  font-size: 1.2rem;
  color: ${colors.textLight};
  margin: 1.5rem auto 0;
`

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
`

const ResultCard = styled.div`
  background: linear-gradient(145deg, ${colors.cardBackground}, ${colors.subteamBackground});
  border-radius: 12px;
  padding: 20px;
  width: 300px;
  color: ${colors.text};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 
              0 0 0 1px rgba(255, 255, 255, 0.1),
              0 0 30px rgba(157, 78, 221, 0.2);
  border: 1px solid rgba(157, 78, 221, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), 
                0 0 0 1px rgba(255, 255, 255, 0.15),
                0 0 40px rgba(157, 78, 221, 0.3);
  }
`

const ResultContent = styled.div`
  margin-bottom: 10px;
  line-height: 1.5;
  
  b {
    color: ${colors.secondary};
  }
`

const ResultSource = styled.div`
  font-size: 0.9em;
  color: ${colors.textLight};
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid ${colors.border};
`

const NoResults = styled.div`
  text-align: center;
  color: ${colors.textLight};
  font-size: 1.2rem;
  margin: 50px auto;
  max-width: 600px;
  padding: 30px;
  background: linear-gradient(145deg, ${colors.cardBackground}, ${colors.subteamBackground}22);
  border-radius: 12px;
  border: 1px solid ${colors.border};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`

const Search = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search).get("q")?.toLowerCase() || ""
  const allItems = []
  
  // home
  for(let i=0; i<home_data.hero.description.length; i++){
    allItems.push({ text: home_data.hero.description[i], parent: "Home" })
  }
  for(let i=0; i<home_data.about.entries.length; i++){
    allItems.push({ text: "<b>" + home_data.about.title + ":</b><br/>" + home_data.about.entries[i], parent: "Home" })
  }
  allItems.push({ text: "<b>" + home_data.sponsor.title + ":</b><br/>" + home_data.sponsor.description, parent: "Home" })

  // members
  for(let i=0; i<members_data.members.entries.length; i++){
    allItems.push({ text: members_data.members.entries[i].name + "<br/>" + members_data.members.entries[i].position, parent: "Members" })
  }
  for(let i=0; i<members_data.alumni.entries.length; i++){
    allItems.push({ text: members_data.alumni.entries[i].name + "<br/>" + members_data.alumni.entries[i].position, parent: "Members" })
  }

  //subteams
  for(let i=0; i<subteams_data.teams.length; i++){
    allItems.push({ text: "<b>" + subteams_data.teams[i].name + ":</b><br/>" + subteams_data.teams[i].description, parent: "Subteams" })
    for(let j=0; j<subteams_data.teams[i].subteams.length; j++){
      allItems.push({ text: "<b>" + subteams_data.teams[i].subteams[j].name + ":</b><br/>" + subteams_data.teams[i].subteams[j].description, parent: `Subteams, ${subteams_data.teams[i].name}` })
    }
  }

  // contact
  allItems.push({ text: "<b>Get in Touch:</b> <br/>" +
          "Email: tjhsstuav@gmail.com <br/>" +
          "Address: 6650 Braddock Rd, Alexandria, VA 22312 <br/><br/>" +
          "<b>Connect With Us: </b><br/>" +
          "GitHub: tj-uav <br/>" +
          "Instagram: @tjuav", parent: "Contact" })

  const [results, setResults] = useState([])

  useEffect(() => {
    if (query) {
      const filtered = allItems.filter(
        (item) =>
          item.text.toLowerCase().includes(query) ||
          item.parent.toLowerCase().includes(query)
      )
      setResults(filtered)
    } else {
      setResults([])
    }
  }, [query])

  return (
    <PageContainer>
      <CosmicBackground />
      <ParticleBackground colors={["#9d4edd", "#5e60ce", "#5390d9"]} />
      <ContentContainer>
        <SearchHeader>
          <SearchTitle>Search Results</SearchTitle>
          {query && (
            <QueryDisplay>
              Showing results for: <span style={{ color: colors.secondary }}>{query}</span>
            </QueryDisplay>
          )}
        </SearchHeader>
        
        {results.length > 0 ? (
          <ResultsContainer>
            {results.map((result, index) => (
              <ResultCard key={index}>
                <ResultContent dangerouslySetInnerHTML={{ __html: result.text }}></ResultContent>
                <ResultSource>Found in: {result.parent}</ResultSource>
              </ResultCard>
            ))}
          </ResultsContainer>
        ) : (
          <NoResults>
            {query ? 
              <>No results found for <span style={{ color: colors.secondary }}>{query}</span>. Try another search term.</> :
              <>Enter a search term to begin.</>
            }
          </NoResults>
        )}
      </ContentContainer>
    </PageContainer>
  )
}

export default Search