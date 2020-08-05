import React from "react"
import styled from "styled-components"
import Button from "components/Button"
import Image from "components/Image"
import Grid from "components/Grid"
import { dark, darker } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"
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

const ThemedHeading = styled.h1(() => Heading)
const StyledHeading = styled(ThemedHeading)`
	margin-top: 6.875rem;
	margin-bottom: 1rem;
	text-align: center;
	align-self: center;
`

const ThemedParagraph = styled.p(() => Paragraph)
const StyledParagraph = styled(ThemedParagraph)`
	margin-bottom: 2rem;
	text-align: center;
`

const StyledImage = styled(Image)`
	position: absolute;
	width: initial;
	height: auto;
	top: 0;
`

const Card = ({ data, ...props }) => {
	const alt = data.img.substring(0, data.img.indexOf("."))

	return (
		<Container {...props} style={{ ...props.style }}>
			<div style={{ display: "flex", flexDirection: "column", gridArea: "content" }}>
				<StyledImage src={require(`pages/home/assets/${data.img}`)} alt={alt} />
				<StyledHeading>{data.heading}</StyledHeading>
				<StyledParagraph>{data.content}</StyledParagraph>
				<div style={{ textAlign: "center" }}>
					<Button>{data.button}</Button>
				</div>
			</div>
		</Container>
	)
}

export default Card
