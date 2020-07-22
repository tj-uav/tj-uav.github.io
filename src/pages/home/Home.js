import React from "react"
import styled from "styled-components"
import { darker, dark } from "theme/Colors"
import Image from "components/Image"
import { Paragraph, Subheading } from "theme/Styles"

const GridContainer = styled.section`
	position: relative;
	background-color: ${darker};
	height: 100vh;
	display: grid;
	grid-template-columns: repeat(12, calc(calc(100vw - 176px) / 12));
	column-gap: 1rem;
	align-items: center;
`

const SubSection = styled.div`
	display: grid;
	row-gap: 4rem;
`

const Card = styled.section`
	height: 100vh;
	background: ${dark};
`

// TODO: figure out how to get the centered stuff to align with the image properly
const Home = () => {
	return (
		<>
			<GridContainer>
				<SubSection style={{ gridColumn: "2 / 7" }}>
					<Image src={require("./assets/logo.svg")} alt="TJUAV Logo" />
					<h2 style={Subheading}>
						A student-run team that designs, builds, and operates a custom search and rescue unmanned aerial
						system (copied from CUAir lol). Help us achieve our dreams by sponsoring us!
					</h2>
				</SubSection>
				<Image src={require("./assets/img1.jpeg")} style={{ gridColumn: "8 / 12" }} alt="The team" border />
			</GridContainer>
			<GridContainer>
				<Card style={{ gridColumn: "1 / 5" }} />
				<Card style={{ gridColumn: "5 / 9" }} />
				<Card style={{ gridColumn: "9 / 13" }} />
			</GridContainer>
		</>
	)
}

export default Home
