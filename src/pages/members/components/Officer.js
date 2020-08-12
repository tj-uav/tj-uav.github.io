import React from "react"
import styled from "styled-components"

import { Paragraph as ParagraphStyles } from "theme/Styles"
import { darker } from "theme/Colors"

const Officer = ({ data }) => (
	<Container>
		<Name>{data.name}</Name>
		<Position>{data.position}</Position>
		<Image src={data.image.src} alt={data.image.alt} />
	</Container>
)

export default Officer

const ThemedParagraph = styled.p(() => ParagraphStyles)
const Paragraph = styled(ThemedParagraph)``

const Container = styled.div`
	background: ${darker};
	border-radius: 0.2rem;
	position: relative;
	display: grid;
	grid-template:
		". .        . image" 0.5rem
		". name1    . image" min-content
		". name2    . image" min-content
		". position . image" min-content
		". .        . image" 0.5rem
		/ 0.5rem auto auto 45%;
`

const Name = ({ children }) => {
	const split = children.split(" ")
	return split.map((s, i) => (
		<Paragraph
			key={i}
			style={{ gridArea: `name${i + 1}` }}
			children={s.replace(/^./, s.charAt(0).toUpperCase())}
		/>
	))
}

const Position = styled(Paragraph)`
	grid-area: position;
	opacity: 0.5;
`

const Image = styled.img`
	width: 100%;
	height: 100%;
	display: block;
	background: gray;
	grid-area: image;
	object-fit: cover;
	overflow: hidden;
	border-top-right-radius: 0.2rem;
	border-bottom-right-radius: 0.2rem;
`
