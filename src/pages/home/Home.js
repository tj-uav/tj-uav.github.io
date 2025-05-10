import React from "react"
import styled from "styled-components"
import data from "./assets/data"
import Hero from "./content/Hero"
import About from "./content/About"
import Auvsi from "./content/Auvsi"
import Interest from "./content/Interest"
import Sponsoring from "./content/Sponsoring"
import CosmicBackground from "./components/CosmicBackground"
import ParticleBackground from "./components/ParticleBackground"
//import ContactSponsors from "./content/ContactSponsors"

// Container to hold all content
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`

// Colors for particles (matching the ones from Members.js)
const particleColors = ["#9d4edd", "#5e60ce", "#5390d9"]

const Home = () => {
	return (
		<PageContainer>
			<CosmicBackground />
			<ParticleBackground colors={particleColors} />
			<Hero content={data.hero} />
			<Auvsi />
			<About content={data.about} />
			<Interest />
			<Sponsoring />
			{/*<ContactSponsors content={data} />*/}
		</PageContainer>
	)
}

export default Home