import React from "react"
import styled from "styled-components"
import Grid from "components/Grid"
import { dark, darker } from "theme/Colors"
import { mobile, desktop } from "theme/Breakpoints"
import { Subheading as SubheadingStyles, Heading as HeadingStyles } from "theme/Styles"

import Officers from "./components/Officers"
import TeamImage from "./components/TeamImage"

const Members = () => (
	<Container>
		<Heading>The Team</Heading>
		<Subheading>
			short blurb here? Go into more detail as to what we do, but keep it to a reasonable
			length.
		</Subheading>
		<TeamImage />
		<Officers />
	</Container>
)

const ThemedSubheading = styled.h2(() => SubheadingStyles)
const Subheading = styled(ThemedSubheading)`
	grid-area: subheading;
`

const ThemedHeading = styled.h1(() => HeadingStyles)
const Heading = styled(ThemedHeading)`
	grid-area: heading;
`

const fixedHeight = "2.1875rem"
const Container = styled(Grid)`
	z-index: -2;
	height: initial;
	background-color: ${darker};

	${mobile} {
		column-gap: 0;

		grid-template:
			". . . " ${fixedHeight}
			". . . " ${fixedHeight}
			". . . " ${fixedHeight}
			". heading ." min-content
			". subheading ." min-content
			". . ." ${fixedHeight}
			". image ." min-content
			". . ." ${fixedHeight}
			"officers officers officers" min-content
			/ 1rem auto 1rem;
	}

	${desktop} {
		column-gap: 1rem;
		min-height: 100vh;
		grid-template-rows: repeat(7, calc(${1 / 9} * 100vh)) auto calc(${1 / 9} * 100vh);
		grid-template-columns: repeat(12, 1fr);

		/* prettier-ignore */
		grid-template-areas:
			". . . . . . . . . . . ."
			". heading    heading    heading    heading    heading  heading heading heading heading heading ."
			". subheading subheading subheading subheading .        .       image   image   image   image   ."
			". .          .          .          .          .        .       image   image   image   image   ."
			". officers   officers   officers   officers   officers .       image   image   image   image   ."
			". officers   officers   officers   officers   officers .       image   image   image   image   ."
			". officers   officers   officers   officers   officers .       .       .       .       .       ."
			". officers   officers   officers   officers   officers .       .       .       .       .       ."
			". .          .          .          .          .        .       .       .       .       .       .";

		&::after {
			content: "";
			position: absolute;
			grid-column: 0 / -1;
			grid-row: officers / -1;
			width: 100%;
			height: 100%;
			background: ${dark};
			z-index: -1;
		}
	}
`

export default Members
