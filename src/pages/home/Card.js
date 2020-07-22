import React from "react"
import styled from "styled-components"
import Button from "components/Button"
import Image from "components/Image"
import { dark, darker } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"

const StyledCard = styled.section`
	/* 3 gaps (from 4 cols) * 16px gap = 48px */
	grid-template-columns: repeat(4, calc(calc(100% - 48px) / 4));
	background: ${dark};
	position: relative;
	padding-top: 33vh;
	height: 100vh;
	display: grid;
	gap: 1rem;

	* {
		position: relative;
		z-index: 2;
	}

	::after {
		background-color: ${darker};
		position: absolute;
		content: "";
		right: 0;
		left: 0;
		top: 0;

		/* 297 / 900 = 0.33 */
		height: 33vh;
	}
`

const ThemedHeading = styled.h1(() => Heading)
const StyledHeading = styled(ThemedHeading)`
	margin-top: 6.875rem;
	margin-bottom: 1rem;
	text-align: center;
`

const ThemedParagraph = styled.p(() => Paragraph)
const StyledParagraph = styled(ThemedParagraph)`
	margin-bottom: 2rem;
	text-align: center;
`

const StyledImage = styled(Image)`
	transform: translate(0, -66%) scale(0.75);
	width: initial !important;
	height: auto;
	position: absolute;
	top: 0;
`

const Card = ({ data, ...props }) => {
	const style = {}
	if (data.img === "tjhsst.svg") style.transform = "translate(0, -66%) scale(0.95)"

	return (
		<StyledCard {...props} style={{ ...props.style, gridColumn: "span 4" }}>
			<div style={{ display: "flex", flexDirection: "column", gridColumn: "2 / 4" }}>
				<StyledImage style={style} src={require(`./assets/${data.img}`)} alt="yeet" />
				<StyledHeading>{data.heading}</StyledHeading>
				<StyledParagraph>{data.content}</StyledParagraph>
				<div style={{ textAlign: "center" }}>
					<Button>{data.button}</Button>
				</div>
			</div>
		</StyledCard>
	)
}

export default Card
