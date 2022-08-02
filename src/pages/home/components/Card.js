import React from "react"
import styled from "styled-components"

import Button from "components/Button"
import Image from "components/Image"
import Grid from "components/Grid"
import Parser from "components/Parser"

import { dark, darker } from "theme/Colors"
import { StyledHeading, StyledParagraph } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"

const Container = styled(Grid)`
	background: ${dark};

	--baseScale: 0.75;
	--transform: translate(0, -66%) scale(var(--baseScale));
	&:first-of-type {
		--transform: translate(0, -66%) scale(calc(var(--baseScale) + 0.2));
	}

	img {
		transform: var(--transform);
	}

	${mobile} {
		height: auto;
		margin-top: 5rem;
		padding-top: 10rem;
		padding-left: 1rem;
		padding-right: 1rem;

		--columns: repeat(2, auto);
		--rows: auto auto 1rem;

		/* prettier-ignore */
		grid-template-areas:
			".       content .       "
			".       .       .       ";
	}

	${tablet} {
		margin-top: initial;
		padding-left: 0;
		padding-right: 0;
		--columns: repeat(4, 1fr);

		/* prettier-ignore */
		grid-template-areas:
			".        content content .       ";

		&:last-of-type {
			margin-bottom: 2rem;
		}
		&:first-of-type {
			margin-top: 2rem;
		}
	}

	${desktop} {
		height: 100%;
		padding-top: 33vh;
		--columns: 1rem 1fr 1fr 1rem;
		column-gap: 0;
		margin-top: 0 !important;

		--rows: unset;

		--baseScale: 0.55;
	}

	@media only screen and (min-width: 1080px) {
		--columns: repeat(4, 1fr);
		gap: 1rem;
		--baseScale: 0.75;
	}

	* {
		position: relative;
		z-index: 2;
	}

	::after {
		background-color: ${darker};
		position: absolute;

		${mobile} {
			height: 10rem;
		}

		${desktop} {
			height: 33vh;
		}

		content: "";
		right: 0;
		left: 0;
		top: 0;
	}
`

const Heading = styled(StyledHeading)`
	margin-top: 6.875rem;
	margin-bottom: 1rem;
	text-align: center;
	align-self: center;
`

const Paragraph = styled(StyledParagraph)`
	margin-bottom: 2rem;
	text-align: center;
`

const StyledImage = styled(Image)`
	position: absolute;
	width: initial;
	height: auto;
	max-height: 200px;
	top: 0;
`

const Card = ({ data, ...props }) => {
	const { heading, content, button, image } = data
	const { src, alt } = image

	return (
		<Container {...props} style={{ ...props.style }}>
			<div style={{ display: "flex", flexDirection: "column", gridArea: "content", alignItems: "center" }}>
				<StyledImage src={require(`pages/home/assets/${src}`)} alt={alt} />
				<Heading>{heading}</Heading>
				<Paragraph>
					<Parser Component={Paragraph}>{content}</Parser>
				</Paragraph>
				<Paragraph>
					<Parser color="#fff" Component={Button}>
						{button}
					</Parser>
				</Paragraph>
			</div>
		</Container>
	)
}

export default Card