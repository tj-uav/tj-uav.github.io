import React from "react"
import styled from "styled-components"
import Grid from "components/Grid"
import { darker } from "theme/Colors"
import Card from "pages/home/components/Card"

const DisplayedCards = ({ content, ...props }) => content.map((card, i) => <Card {...props} data={card} key={i} />)

// prettier-ignore
const Container = styled(Grid)`
    --rows: unset;
    grid-template-areas:
        "card1 card1 card1 card1 card2 card2 card2 card2 card3 card3 card3 card3";

	background-color: ${darker};
`

const Cards = ({ content, ...props }) => (
	<Container {...props}>
		<DisplayedCards content={content} />
	</Container>
)

export default Cards
