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
			".        caption    caption    caption    caption    caption    caption    caption    caption    caption    caption    .       "
			".        .          .          .          .          .          .          .          .          .          .          .       "
			"officers officers   officers   officers   officers   officers   officers   officers   officers   officers   officers   officers"
			"leads    leads      leads      leads      leads      leads      leads      leads      leads      leads      leads      leads   ";

		&::after {
			content: "";
			position: absolute;
			grid-column: 0 / -1;
			grid-row: officers;
			width: 100%;
			height: 100%;
			background: ${dark};
			z-index: -1;
		}
	}

	${tablet} {
		--columns: 0 1fr 1fr 1fr 1fr 0 1fr 1fr 1fr 1fr 0;

		grid-template-areas:
			".        .          .          .          .          .          .          .          .          .          .       "
			".        .          .          .          .          .          .          .          .          .          .       "
			".        .          .          .          .          .          .          .          .          .          .       "
			".        .          heading    heading    heading    heading    heading    heading    heading    .          .       "
			".        .          subheading subheading subheading subheading subheading subheading subheading .          .       "
			".        .          .          .          .          .          .          .          .          .          .       "
			".        .          image      image      image      image      image      image      image      .          .       "
			".        .          caption    caption    caption    caption    caption    caption    caption    .          .       "
			".        .          .          .          .          .          .          .          .          .          .       "
			".        .          officers   officers   officers   .          leads      leads      leads      .          .       ";

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

	${desktop} {
		--columns: repeat(13, 1fr);

		column-gap: 1rem;
		min-height: 100vh;
		/* grid-template-rows: repeat(5, minmax(calc(${1 /
		9} * 100vh), min-content)) repeat(2, calc(${1 / 9} * 100vh)) auto calc(${1 /
		9} * 100vh) auto; */
		/* grid-template-columns: repeat(12, 1fr); */

		/* prettier-ignore */
		grid-template:
			". .          .          .          .          .          .          .          .          .          .          .          . " calc(${1 /
		9} * 100vh)
			". heading    heading    heading    heading    heading    heading    heading    heading    heading    heading    heading    . " calc(${1 /
		9} * 100vh)
			". subheading subheading subheading subheading subheading subheading subheading subheading subheading subheading subheading . " min-content
			". image      image      image      image      image      image      image      caption    caption    caption    caption    . " min-content
			". image      image      image      image      image      image      image      caption    caption    caption    caption    . " min-content
			". .          .          .          .          .          .          .          .          .          .          .          . " calc(${1 /
		9} * 100vh)
			". officers   officers   officers   officers   officers   .          leads      leads      leads      leads      leads      . " min-content
			". officers   officers   officers   officers   officers   .          leads      leads      leads      leads      leads      . " min-content
			". officers   officers   officers   officers   officers   .          leads      leads      leads      leads      leads      . " min-content
			". officers   officers   officers   officers   officers   .          leads      leads      leads      leads      leads      . " min-content
		/  1fr 1fr        1fr        1fr        1fr        1fr        2rem       1fr        1fr        1fr        1fr        1fr        1fr;

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