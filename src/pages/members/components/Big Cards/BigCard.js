import React from "react"
import styled from "styled-components"

import { StyledParagraph as Paragraph } from "theme/Styles"
import { mobile, tablet } from "theme/Breakpoints"
import { darker } from "theme/Colors"

const BigCard = ({data, ...props}) => {
	const { name, position, image } = data
	const { src, alt } = image

	const containerStyles = {
		marginBottom: "6px"
	}//containerStyles

	return (
		<Container {...props} style={containerStyles}>
			<Name>{name}</Name>
			<Position>{position}</Position>
			<Image src={require(`../../assets/${src}`).default} alt={alt} style={{objectFit:"cover"}}/>
		</Container>
	)
}

export default BigCard

const Container = styled.div`
	${mobile} {
		background: ${({ bg_color }) => bg_color ?? darker};
	}

	${tablet} {
		background: ${darker};
	}

	border-radius: 0.2rem;
	position: relative;
	display: grid;
	grid-template:
		". .        . image" 0.5rem
		". name1    . image" min-content
		". name2    . image" min-content
		". position . image" auto
		". .        . image" 0.5rem
		/ 1rem auto auto 45%;
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
	margin-top: auto;
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
	max-height: 100px;
`
