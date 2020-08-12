import React from "react"
import styled from "styled-components"

import { Paragraph as ParagraphStyles } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"
import { default as RawImage } from "components/Image"

const TeamImage = () => (
	<Container>
		<Image src={require("../assets/team.jpg")} alt="the team" border />
		<Caption>
			Pictured right to left, top to bottom: Niko Economos, Daniel Stefanescu, Ganesh Nanduru,
			Liam West, ... , Marvin Fu. Not pictured: literally everyone else why didn’t people just
			show up the first time
		</Caption>
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
		grid-template-rows: unset;
		grid-template-columns: repeat(2, 1fr);

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
	grid-area: image;
	min-height: 100%;
	width: 100%;
	object-fit: cover;
`

const Caption = styled(Paragraph)`
	grid-area: caption;
`
