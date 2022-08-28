import React from "react"
import styled from "styled-components"

import Image from "components/Image.js"
import { StyledHeading, StyledSubheading } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"
import Grid from "components/Grid"

import AuvsiImage from "../assets/auvsi.jpg"

import Parser from "components/Parser"

const Auvsi = () => {
	return (
		<StyledContainer>
			<Heading>We went to AUVSI SUAS!</Heading>
			<StyledImage src={AuvsiImage} border={true} alt="Our plane flying." />
			<div style={{ gridArea: "text" }}>
				<Text>
					<Parser Component={Text}>TJUAV went to the annual AUVSI SUAS competition held in 2022! This is our second time going, and we've made multiple improvements, such as a custom built plane, and a customized ground station built from scratch.</Parser>
				</Text>
				<Text>
					<Parser Component={Text}>We only made 23rd place - actually an improvement; we didn't gain any points from the mission demonstration due to a small but impactful bug. Next year TJUAV wants to experiment with carbon fiber, as well as computer vision integration to exceed at the next AUVSI SUAS competition.</Parser>
				</Text>
			</div>
		</StyledContainer>
	)
}

const StyledContainer = styled(Grid)`

	${mobile} {
		--columns: 1fr;
		--rows: repeat(6, 1fr);

		height: fit-content;
		margin-top: 5em;
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
		--rows: repeat(8, 1fr);
		--columns: repeat(12, 1fr);

		height: fit-content;
		margin-bottom: min(20em, 20vh);
		padding: 5vw;

		grid-template: ".     .      .      .      .      .     .     .     .       .       .       "
					   ".     image  image  image  image  image .     .     .       .       .       " min(5em, 2vh)
					   ".     image  image  image  image  image .   heading heading heading heading "
					   ".     image  image  image  image  image .     .     .       .       .       " 1em
					   ".     image  image  image  image  image .    text   text    text    text    "
					   ".     image  image  image  image  image .     .     .       .       .       " min(5em, 2vh)
					   ".     .      .      .      .      .     .     .     .       .       .       "
	}
`

const StyledImage = styled(Image)`
	grid-area: image;
	margin: 0 auto;
	object-fit: cover;
	width: 100%;
	height: 100%;
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

export default Auvsi