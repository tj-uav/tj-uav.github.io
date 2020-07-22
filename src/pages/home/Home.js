import React from "react"
import styled from "styled-components"
import Image from "components/Image"
import { darker, dark } from "theme/Colors"
import { Heading, Subheading, Paragraph } from "theme/Styles"
import data from "./assets/data"
import Card from "./Card"
import Contact from "./Contact"

const GriddedScreen = ({ columns, rows, ...props }) => {
	const style = props.style ?? {}
	if (columns || rows) style.gap = `1rem`
	if (columns) style.gridTemplateColumns = `repeat(12, calc(calc(100vw - ${11 * 16}px) / 12))`
	if (rows) style.gridTemplateRows = `repeat(9, calc(calc(100vh - ${8 * 16}px) / 9))`

	return (
		<StyledGridContainer {...props} style={style}>
			{props.children}
		</StyledGridContainer>
	)
}

const StyledGridContainer = styled.section`
	/* 11 gaps (from 12 cols) * 16px gap = 176px */
	grid-template-columns: repeat(12, calc(calc(100vw - 176px) / 12));
	background-color: ${props => props.background ?? darker};
	position: relative;
	column-gap: 1rem;
	height: 100vh;
	display: grid;
`

const SubSection = styled.div`
	display: grid;
	row-gap: 4rem;
`

const Hero = ({ content, ...props }) => (
	<>
		<SubSection style={{ gridColumn: "2 / 7" }}>
			<Image src={require("./assets/logo.svg")} alt="TJUAV Logo" />
			<h2 style={Subheading}>{data.hero.description}</h2>
		</SubSection>
		<Image src={require("./assets/img1.jpeg")} style={{ gridColumn: "8 / 12" }} alt="The team" border />
	</>
)

const Cards = ({ content, ...props }) => content.map((card, i) => <Card {...props} data={card} key={i} />)

const About = ({ content, ...props }) => (
	<>
		<h1 {...props} style={{ ...Heading, gridArea: "2 / 2 / 3 / -2" }}>
			{content.title}
		</h1>
		<p {...props} style={{ ...Paragraph, gridArea: "3 / 2 / -2 / 7" }}>
			{content.description}
		</p>
		<aside {...props} style={{ gridColumn: "-6 / -2", gridRow: "3 / -3" }}>
			<Image border src={require("./assets/img2.jpeg")} style={{ height: "100%", objectFit: "cover" }} />
		</aside>
	</>
)

const Sponsors = ({ content, ...props }) => (
	<>
		<h1 {...props} style={{ ...Heading, gridArea: "2 / 2 / 3 / -2" }}>
			{content.title}
		</h1>
		<p {...props} style={{ ...Paragraph, gridArea: "3 / 2 / 3 / 8" }}>
			{content.description}
		</p>
	</>
)

// TODO: figure out how to get the centered stuff to align with the image properly
const Home = () => {
	return (
		<>
			<GriddedScreen columns style={{ alignItems: "center" }}>
				<Hero content={data.hero} />
			</GriddedScreen>

			<GriddedScreen columns>
				<Cards content={data.info.cards} />
			</GriddedScreen>

			<GriddedScreen columns rows background={dark}>
				<About content={data.about} />
			</GriddedScreen>

			<GriddedScreen columns rows background={dark}>
				<Sponsors content={data.sponsor} />
				<Contact content={data.contact} />
			</GriddedScreen>
		</>
	)
}

export default Home
