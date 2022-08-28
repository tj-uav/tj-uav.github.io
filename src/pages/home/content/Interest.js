import React from "react"
import styled from "styled-components"

import Image from "components/Image.js"
import Grid from "components/Grid"
import Parser from "components/Parser"
import { StyledHeading, StyledSubheading } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"

import Talking from "../assets/talking.jpg"

const Interest = () => {
	return (
		<StyledContainer>
			<Heading>Interested in joining TJUAV?</Heading>
			<StyledImage src={Talking} border={true} alt="Our plane flying." />
			<div style={{ gridArea: "text" }}>
				<Text>
					<Parser Component={Text}>There are three main areas we work in, mechanical, programming, and electrical.</Parser>
				</Text>
				<Text>
					<Parser Component={Text}>Mechanical work includes CAD and manufacturing plane parts. Programming involves frontend and backend web development for the ground station, as well as integration with plane electronics, and computer vision. Electronics comes at a crux between the two.</Parser>
				</Text>
				<Text>
					<Parser Component={Text}>If you want to learn more, please fill out this [form](https://forms.gle/jFthBrNKXNNtuNLW6) (noncommittal). We will contact you with further updates as we start onboarding you into the team.</Parser>
				</Text>
			</div>
		</StyledContainer>
	)
}

const Heading = styled(StyledHeading)`
	grid-area: heading;

	${mobile} {
		text-align: center;
		font-size: 3em;
	}

	${desktop} {
		font-size: 4em;
	}
`

const StyledImage = styled(Image)`
	grid-area: image;
	width: 100%;
	height: 100%;
	object-fit: cover;
`

const Text = styled(StyledSubheading)`
	margin-bottom: 1em;
`

const StyledContainer = styled(Grid)`
	${mobile} {
		--columns: 1fr;
		--rows: repeat(6, 1fr);

		height: fit-content;
		margin-top: 10em;
		margin-bottom: 3em;
		padding: 0 1rem;

		grid-template: " heading " 9em
					   "    .    " 1em
					   "  image  "
					   "    .    " 1em
					   "   text  "
	}

	${tablet} {
		--columns: 8fr;

		height: fit-content;
		margin-bottom: 10em;
		padding: 0 7rem;

		grid-template-areas: "    .    "
							 " heading "
							 "    .    "
							 "  image  " 15em
							 "    .    "
							 "   text  "
							 "    .    "
	}

	${desktop} {
		--columns: repeat(10, 1fr);
		--rows: repeat(8, 1fr);

		margin-top: 0;
		margin-bottom: 0;
		padding: 5vw;

		grid-template-areas: ".     .      .      .      .       .    .     .     .     .     .     ."
							 ".     .      .      .      .       .    image image image image image ."
							 ".  heading heading heading heading .    image image image image image ."
							 ".     .      .      .      .       .    image image image image image ."
							 ".     text   text   text   text    .    image image image image image ."
							 ".     .      .      .      .       .    image image image image image ."
							 ".     .      .      .      .       .    .     .     .     .     .     ."

	}
`

export default Interest