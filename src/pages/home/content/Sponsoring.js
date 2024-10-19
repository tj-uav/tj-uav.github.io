import React from "react"
import styled from "styled-components"

import Grid from "components/Grid"
import Image from "components/Image.js"
import { StyledHeading, StyledSubheading } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"
import { dark } from "theme/Colors"

import Plane from "../assets/flying.jpg"

import Parser from "components/Parser"

const Sponsoring = () => {
	return (
		<StyledContainer>
			<Heading>Interested in sponsoring TJUAV?</Heading>
			<StyledImage src={Plane} border={true} alt="Our plane flying." />
			<div style={{ gridArea: "text" }}>
				<Text>
					<Parser Component={Text}>To get a deeper look at what we do here at TJUAV, you can look at our [other pages](/subteams), or take a look at our [sponsorship packet](/sponsorship-packet.pdf), which contains important information such as what funding is used for, and previous accomplishments.</Parser>
				</Text>
				<Text>
					<Parser Component={Text}>We really appreciate your interest! TJUAV plans to massively expand our design and mission goals at the 2025 Robonation SUAS!</Parser>
				</Text>
			</div>
		</StyledContainer>
	)
}

const StyledContainer = styled(Grid)`
	background-color: ${dark};

	${mobile} {
		--columns: 1fr;
		--rows: repeat(6, 1fr);

		height: fit-content;
		margin-top: 10em;
		margin-bottom: 3em;
		padding: 4em 1rem;

		grid-template: " heading "
					   "    .    "
					   "  image  "
					   "    .    "
					   "   text  "
	}

	${tablet} {
		height: fit-content;
		margin-bottom: 10em;
		padding: 4em 7rem;

		grid-template-areas: " heading "
							 "    .    "
							 "  image  " 15em
							 "    .    "
							 "   text  "
							 "    .    "
	}

	${desktop} {
		--rows: repeat(1, 1fr);
		--columns: repeat(12, 1fr);

		height: fit-content;
		margin-bottom: 10em;
		padding: 5vw;

		grid-template: ".     image  image  image  image  image .     .     .       .       .       "
					   ".     image  image  image  image  image .   heading heading heading heading "
					   ".     image  image  image  image  image .     .     .       .       .       " 3em
					   ".     image  image  image  image  image .    text   text    text    text    "
					   ".     image  image  image  image  image .     .     .       .       .       "
					   ".     .      .      .      .      .     .     .     .       .       .       "
	}
`

const StyledImage = styled(Image)`
	grid-area: image;
	object-fit: cover;

	${mobile} {
		width: 100%;
	}

	${tablet} {
		max-width: 70vw;
	}

	${desktop} {
		width: 100%;
		height: 100%;
	}
`

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

const Text = styled(StyledSubheading)`
	margin-bottom: 1em;
`

export default Sponsoring