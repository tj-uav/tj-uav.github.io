import React from "react"
import styled from "styled-components"

import Image from "components/Image"
import Grid from "components/Grid"
import Parser from "components/Parser"

import { Heading, StyledParagraph as Paragraph } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"
import { dark, darker } from "theme/Colors"

const Container = styled(Grid)`
	background-color: ${darker};

	${mobile} {
		--rows: repeat(2, 2.1875rem) auto repeat(8, 2.1875rem);
		--columns: none;
		height: auto;
		padding: 0 1rem;

		/* prettier-ignore */
		grid-template-areas:
		" .       "
		" header  "
		" content "
		" image   "
		" image   "
		" image   "
		" image   "
		" image   "
		" image   "
		" image   "
		" .       ";
	}

	${tablet} {
		--columns: repeat(8, 1fr);
		padding: unset;

		/* prettier-ignore */
		grid-template-areas:
		" .        .        .        .        .        .        .        .       "
		" .        header   header   header   header   header   header   .       "
		" .        content  content  content  content  content  content  .       "
		" .        .        .        .        .        .        .        .       "
		" .        image    image    image    image    image    image    .       "
		" .        image    image    image    image    image    image    .       "
		" .        image    image    image    image    image    image    .       "
		" .        image    image    image    image    image    image    .       "
		" .        image    image    image    image    image    image    .       "
		" .        image    image    image    image    image    image    .       "
		" .        .        .        .        .        .        .        .       ";
	}

	${desktop} {
		background-color: ${dark};

		--rows: repeat(9, 1fr);
		--columns: repeat(12, 1fr);

		/* prettier-ignore */
		grid-template-areas:
		".       .       .       .       .       .       .       .      .      .      .      .      "
		".       header  header  header  header  header  header  header header header header .      "
		".       content content content content content .       image  image  image  image  .      "
		".       content content content content content .       image  image  image  image  .      "
		".       content content content content content .       image  image  image  image  .      "
		".       content content content content content .       image  image  image  image  .      "
		".       content content content content content .       image  image  image  image  .      "
		".       .       .       .       .       .       .       .      .      .      .      .      "
		".       .       .       .       .       .       .       .      .      .      .      .      ";
	}
`

const About = ({ content, ...props }) => {
	const imgStyle = { width: "100%", height: "100%", objectFit: "cover" }
	return (
		<Container>
			<h1 {...props} style={{ ...Heading, gridArea: "header" }}>
				{content.title}
			</h1>
			<div style={{ gridArea: "content" }}>
				{content.entries.map((entry, i) => (
					<Parser Component={Paragraph} key={i}>
						{entry}
					</Parser>
				))}
			</div>
			<aside {...props} style={{ gridArea: "image" }}>
				<Image border src={require("pages/home/assets/img2.jpeg")} style={imgStyle} />
			</aside>
		</Container>
	)
}

export default About
