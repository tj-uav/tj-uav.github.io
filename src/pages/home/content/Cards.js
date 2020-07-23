import React from "react"
import styled from "styled-components"
import Grid from "components/Grid"
import { darker } from "theme/Colors"
import Card from "pages/home/components/Card"

const DisplayedCards = ({ content, ...props }) => content.map((card, i) => <Card {...props} data={card} key={i} />)

const w = `var(--w)`

// prettier-ignore
const Container = styled(Grid)`
    grid-template:
        "card1 card1 card1 card1 card2 card2 card2 card2 card3 card3 card3 card3"
        /${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w};

	background-color: ${darker};
`

const Cards = ({ content, ...props }) => (
	<Container {...props}>
		<DisplayedCards content={content} />
	</Container>
)

export default Cards
