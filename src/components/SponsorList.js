import styled from "styled-components"

import { Subheading } from "theme/Styles.js"
import { darker } from "theme/Colors"
import { HorizontalContainer } from "theme/Components.js"
import Sponsors from "./SponsorAssets/sponsors.json"

// pass a scale property to increase the size of sponsor icons
// props.scale = <scale factor>
const SponsorList = (props) => {
	return (
		<Container>
			<Caption>
				{Sponsors.title}
			</Caption>
			<HorizontalContainer>
				{Sponsors.sponsors.map((element) => {
					return <Logo jsonData={element} key={element.alt} scale={"logoScale" in props ? props.logoScale : 1} />
				})}
			</HorizontalContainer>
		</Container>
	)
}

const Caption = (props) => {
	return (
		<StyledCaption style={Subheading}>
			{props.children}
		</StyledCaption>
	)
}

const StyledCaption = styled.h2`
	display: inline;
	marginRight: auto;
	marginLeft: auto;
`

const Container = (props) => {
	return (
		<StyledContainer>
			{props.children}
		</StyledContainer>
	)

}

const StyledContainer = styled.div`
	background-color: ${darker};
	padding: 3vh 8vw;
	margin-top: 2vh;
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
`

export default SponsorList