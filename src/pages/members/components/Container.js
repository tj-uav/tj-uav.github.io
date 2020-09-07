import styled from "styled-components"

import Grid from "components/Grid"

import { dark, darker } from "theme/Colors"
import { mobile, tablet, desktop } from "theme/Breakpoints"

export default styled(Grid)`
	z-index: -2;
	height: initial;
	background-color: ${darker};

	${mobile} {
		/* column-gap: 0; */
		--columns: 0 repeat(10, 1fr) 0;
		--rows: 1fr;

		grid-template-areas:
			".        .          .          .          .          .          .          .          .          .          .          .       "
			".        .          .          .          .          .          .          .          .          .          .          .       "
			".        .          .          .          .          .          .          .          .          .          .          .       "
			".        heading    heading    heading    heading    heading    heading    heading    heading    heading    heading    .       "
			".        subheading subheading subheading subheading subheading subheading subheading subheading subheading subheading .       "
			".        .          .          .          .          .          .          .          .          .          .          .       "
			".        image      image      image      image      image      image      image      image      image      image      .       "
			".        .          .          .          .          .          .          .          .          .          .          .       "
			"officers officers   officers   officers   officers   officers   officers   officers   officers   officers   officers   officers";
	}

	${tablet} {
		--columns: 0 repeat(8, 1fr) 0;
		/* --rows: repeat(10, 1fr); */

		grid-template-areas:
			".        .          .          .          .          .          .          .          .          .       "
			".        .          .          .          .          .          .          .          .          .       "
			".        .          .          .          .          .          .          .          .          .       "
			".        .          heading    heading    heading    heading    heading    heading    .          .       "
			".        .          subheading subheading subheading subheading subheading subheading .          .       "
			".        .          .          .          .          .          .          .          .          .       "
			".        .          image      image      image      image      image      image      .          .       "
			".        .          .          .          .          .          .          .          .          .       "
			"officers officers   officers   officers   officers   officers   officers   officers   officers   officers";
		/* "leads    leads      leads      leads      leads      leads      leads      leads      leads      leads   "; */
	}

	${desktop} {
		--columns: repeat(12, 1fr);

		column-gap: 1rem;
		min-height: 100vh;
		grid-template-rows: repeat(7, calc(${1 / 9} * 100vh)) auto calc(${1 / 9} * 100vh) auto;
		grid-template-columns: repeat(12, 1fr);

		/* prettier-ignore */
		grid-template-areas:
			". .          .          .          .          .        .       .       .       .       .       .    "
			". heading    heading    heading    heading    heading  heading heading heading heading heading .    "
			". subheading subheading subheading subheading .        .       image   image   image   image   .    "
			". .          .          .          .          .        .       image   image   image   image   .    "
			". officers   officers   officers   officers   officers .       image   image   image   image   .    "
			". officers   officers   officers   officers   officers .       image   image   image   image   .    "
			". officers   officers   officers   officers   officers .       .       .       .       .       .    "
			". officers   officers   officers   officers   officers .       .       .       .       .       .    "
			". officers   officers   officers   officers   officers .       .       .       .       .       .    ";
		/* "leads        leads      leads      leads      leads    leads   leads   leads   leads   leads   leads" */

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
