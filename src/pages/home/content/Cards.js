import React from "react"
import styled from "styled-components"
import Grid from "components/Grid"
import { darker } from "theme/Colors"
import { Breakpoints } from "theme/Styles"
import Card from "pages/home/components/Card"

const DisplayedCards = ({ content, ...props }) =>
	content.map((card, i) => <Card {...props} data={card} key={i} />)

const Container = styled(Grid)`
	background-color: ${darker};
	padding-left: 1rem;
	padding-right: 1rem;

	--rows: repeat(3, auto);
	--columns: unset;

	${Breakpoints.small} {
		height: auto;

		/* prettier-ignore */
		grid-template-areas:
			"card1"
			"card2"
			"card3";
	}

	${Breakpoints.mobile} {
		--columns: repeat(4, 1fr);

		/* prettier-ignore */
		grid-template-areas:
			".     card1 card1 .     "
			".     card2 card2 .     "
			".     card3 card3 .     ";
	}

	${Breakpoints.desktop} {
		--columns: repeat(12, 1fr);
		--rows: unset;

		height: 100vh;
		padding: unset;

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
