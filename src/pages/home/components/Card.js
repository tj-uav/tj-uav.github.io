import React from "react"
import styled from "styled-components"
import Button from "components/Button"
import Image from "components/Image"
import { dark, darker } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"

const w = `var(--w)`

// prettier-ignore
const Container = styled.section`
	grid-template:
		".          content    content   ."
		/${w}       ${w}       ${w}      ${w};

	--columns: 4;
	--w: calc(100% * (1 / var(--columns)) - 1rem * (var(--columns) - 1) / var(--columns));

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
		height: 33vh;
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
`

const ThemedParagraph = styled.p(() => Paragraph)
const StyledParagraph = styled(ThemedParagraph)`
	margin-bottom: 2rem;
	text-align: center;
`

const StyledImage = styled(Image)`
	transform: translate(0, -66%) scale(0.75);
	width: initial;
	height: auto;
	position: absolute;
	top: 0;
`

const Card = ({ data, ...props }) => {
	const style = {}
	if (data.img === "tjhsst.svg") style.transform = "translate(0, -66%) scale(0.95)"
	const alt = data.img.substring(0, data.img.indexOf("."))

	return (
		<Container {...props} style={{ ...props.style, gridColumn: "span 4" }}>
			<div style={{ display: "flex", flexDirection: "column", gridArea: "content" }}>
				<StyledImage style={style} src={require(`pages/home/assets/${data.img}`)} alt={alt} />
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
