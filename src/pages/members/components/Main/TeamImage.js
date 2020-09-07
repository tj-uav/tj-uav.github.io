import React from "react"
import styled from "styled-components"

import { Paragraph as ParagraphStyles } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"
import RawImage from "components/Image"
import { main } from "pages/members/assets/data.json"

const TeamImage = () => (
	<Container>
		<Image src={require("../../assets/team.jpg")} alt="the team" border />
		<Caption>{main.caption}</Caption>
	</Container>
)

export default TeamImage

const ThemedParagraph = styled.p(() => ParagraphStyles)
const Paragraph = styled(ThemedParagraph)``

const Container = styled.div`
	grid-area: image;
	display: grid;

	${mobile} {
		gap: 1rem;
		grid-template-rows: repeat(2, min-content);
		grid-template-areas:
			"image"
			"caption";
	}

	${tablet} {
		grid-template-rows: min-content;
		grid-template-columns: 1fr 1fr;

		/* prettier-ignore */
		grid-template-areas: 
			"image caption";
	}

	${desktop} {
		grid-template-rows: repeat(2, min-content);
		grid-template-columns: unset;
		grid-template-areas:
			"image"
			"caption";
	}
`

const Image = styled(RawImage)`
	object-fit: cover;
	grid-area: image;
	width: 100%;
`

const Caption = styled(Paragraph)`
	grid-area: caption;
	overflow: hidden;
`
