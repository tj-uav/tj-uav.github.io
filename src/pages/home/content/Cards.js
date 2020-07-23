import React from "react"
import styled from "styled-components"
import { darker } from "theme/Colors"
import { width } from "theme/Grid"
import Card from "pages/home/components/Card"

const DisplayedCards = ({ content, ...props }) => content.map((card, i) => <Card {...props} data={card} key={i} />)

const w = `var(--w)`

// prettier-ignore
const Container = styled.section`
    grid-template:
        "card1 card1 card1 card1 card2 card2 card2 card2 card3 card3 card3 card3"
        /${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w};

    --columns: 12;
    --w: ${width};

	background-color: ${darker};
	height: 100vh;
	display: grid;
	gap: 1rem;
`

const Cards = ({ content, ...props }) => (
	<Container {...props}>
		<DisplayedCards content={content} />
	</Container>
)

export default Cards
