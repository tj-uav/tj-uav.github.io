import React from "react"
import styled from "styled-components"

import { StyledParagraph as Paragraph } from "theme/Styles"
import { desktop, mobile, tablet, isMobile } from "theme/Breakpoints"
import { darker } from "theme/Colors"

const BigCard = ({ data, ...props }) => {
	const { name, position, image } = data
	const { src, alt } = image
	return (
		<Container {...props}>
			<Name>{name}</Name>
			<Position>{position}</Position>
			<Image src={require(`../../assets/${src}`).default} alt={alt} />
		</Container>
	)
}

export default BigCard

const Container = styled.div`
	${mobile} {
		background: ${({ bg_color }) => bg_color ?? darker};
		grid-template:
			". .        . image" 0.5rem
			". .        . image" min-content
			". name     . image" min-content
			". .        . image" 0.5rem
			". position . image" auto
			". .        . image" 0.5rem
        / 1rem auto  auto auto;
	}

	${tablet} {
		background: ${darker};
		grid-template:
			". .        . image" 1rem
			". name     . image" min-content
			". name     . image" min-content
			". position . image" auto
			". .        . image" 0.5rem
		/ 1rem auto  auto 45%;
	}

	${desktop} {
		grid-template:
			". .        . image" 0.75rem
			". name     . image" min-content
			". name     . image" min-content
			". position . image" auto
			". .        . image" 0.5rem
		/ 1rem auto  auto 45%;
	}

	border-radius: 0.2rem;
	position: relative;
	display: grid;
`

const Name = ({ children }) => {
	return (
		<Paragraph style={{ "grid-area": "name", "margin-right": "1em", "font-size": isMobile() ? "1.25rem" : "1em" }}>
			{children}
		</Paragraph>
	)
}

const Position = styled(Paragraph)`
	margin-top: auto;
	grid-area: position;
	opacity: 0.5;
`

const Image = styled.img`
	height: 100%;
	width: 100%;
	display: block;
	background: gray;
	grid-area: image;
	object-fit: cover;
	overflow: hidden;
	border-top-right-radius: 0.2rem;
	border-bottom-right-radius: 0.2rem;
	max-height: 120px;
`
