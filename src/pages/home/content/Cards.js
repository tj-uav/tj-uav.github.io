import React from "react"
import styled from "styled-components"
import Grid from "components/Grid"
import { darker } from "theme/Colors"
import { mobile, tablet, desktop } from "theme/Breakpoints"
import Card from "pages/home/components/Card"

const DisplayedCards = ({ content, ...props }) =>
	content.map((card, i) => (
		<Card {...props} style={{ ...props.style, gridArea: `card${i + 1}` }} data={card} key={i} />
	))

const Container = styled(Grid)`
	background-color: ${darker};
	padding-left: 1rem;
	padding-right: 1rem;

	--rows: repeat(3, auto);
	--columns: unset;

	${mobile} {
		height: auto;

		/* prettier-ignore */
		grid-template-areas:
			"card1"
			"card2"
			"card3";
	}

	${tablet} {
		--columns: repeat(8, 1fr);
		--rows: repeat(3, auto);

		padding: unset;

		/* prettier-ignore */
		grid-template-areas:
			".     card1 card1 card1 card1 card1 card1 .     "
			".     card2 card2 card2 card2 card2 card2 .     "
			".     card3 card3 card3 card3 card3 card3 .     ";
	}

	${desktop} {
		--columns: repeat(12, 1fr);
		--rows: unset;

		height: 100vh;

		/* prettier-ignore */
		grid-template-areas:
			"card1 card1 card1 card1 card2 card2 card2 card2 card3 card3 card3 card3";
	}
`

const Cards = ({ content, ...props }) => (
	<Container {...props}>
		<DisplayedCards content={content} />
	</Container>
)

export default Cards
