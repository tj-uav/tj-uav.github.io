import React from "react"
import styled from "styled-components"

import Grid from "components/Grid"

import { dark } from "theme/Colors"
import { Heading as HeadingStyles } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"

import Officer from "./Officer"
import { officers } from "../assets/data.json"

const fixedHeight = "2.1875rem"

const Officers = () => (
	<Container as="section">
		<Heading>Officers</Heading>
		<Content />
	</Container>
)

export default Officers

const ThemedHeading = styled.h1(() => HeadingStyles)
const Heading = styled(ThemedHeading)`
	grid-area: heading;
`

const Container = styled(Grid)`
	height: 100%;
	--rows: unset;
	--columns: unset;
	grid-area: officers;
	background: ${dark};

	${mobile} {
		--rows: ${fixedHeight} auto auto ${fixedHeight};
		--columns: 0 1fr 0;

		grid-template-areas:
			". .       ."
			". heading ."
			". content ."
			". .       .";
	}

	${tablet} {
		--rows: ${fixedHeight} auto auto ${fixedHeight};
		--columns: 0 repeat(8, 1fr) 0;

		grid-template-areas:
			". . .       .       .       .       .       .       . ."
			". . heading heading heading heading heading heading . ."
			". . content content content content content content . ."
			". . .       .       .       .       .       .       . .";
	}

	${desktop} {
		--rows: ${fixedHeight} auto auto ${fixedHeight};
		--columns: 1fr;

		grid-template-areas:
			".      "
			"heading"
			"content"
			".      ";
	}
`

const Content = () => (
	<ContentContainer>
		{officers.map((officer, i) => (
			<Officer key={i} data={officer} />
		))}
	</ContentContainer>
)

const ContentContainer = styled.div`
	--numRows: ${props => props.children.length};
	grid-area: content;
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
	${mobile} {
		grid-template-rows: repeat(var(--numRows), min-content);
	}

	${tablet} {
		grid-template-rows: repeat(calc(var(--numRows) / 2), min-content);
	}
`
