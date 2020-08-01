import React from "react"
import styled from "styled-components"
import Button from "components/Button"
import Image from "components/Image"
import Grid from "components/Grid"
import { dark, darker } from "theme/Colors"
import { Heading, Paragraph, Breakpoints } from "theme/Styles"

const Container = styled(Grid)`
	background: ${dark};

	${Breakpoints.small} {
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

	${Breakpoints.mobile} {
		padding-left: 0;
		padding-right: 0;
		--columns: repeat(4, 1fr);

		/* prettier-ignore */
		grid-template-areas:
			".        content content .       ";
	}

	${Breakpoints.desktop} {
		padding-top: 33vh;

		/* --columns: repeat(4, 1fr); */
		--rows: unset;

		/* prettier-ignore */
		/* grid-template-areas:
			".        content content .       "; */

		&:first-of-type {
			img {
				transform: translate(0, -66%) scale(0.95);
			}
		}
	}

	* {
		position: relative;
		z-index: 2;
	}

	::after {
		background-color: ${darker};
		position: absolute;

		${Breakpoints.small} {
			height: 10rem;
		}

		${Breakpoints.desktop} {
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
	transform: translate(0, -66%) scale(0.75);
	position: absolute;
	width: initial;
	height: auto;
	top: 0;
`

const Card = ({ data, ...props }) => {
	const alt = data.img.substring(0, data.img.indexOf("."))

	return (
		<Container {...props} style={{ ...props.style, gridColumn: "span 4" }}>
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
