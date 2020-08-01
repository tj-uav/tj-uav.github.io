import React from "react"
import styled from "styled-components"
import Image from "components/Image"
import Grid from "components/Grid"
import { Heading, Paragraph, Breakpoints } from "theme/Styles"
import { dark, darker } from "theme/Colors"

const Container = styled(Grid)`
	${Breakpoints.small} {
		--rows: repeat(2, 2.1875rem) auto repeat(8, 2.1875rem);
		--columns: none;

		background-color: ${darker};
		height: auto;
		padding: 0 1rem;

		/* prettier-ignore */
		grid-template-areas:
		"."
		"header"
		"content"
		"image"
		"image"
		"image"
		"image"
		"image"
		"image"
		"image"
		".";
	}

	${Breakpoints.desktop} {
		background-color: ${dark};

		--rows: repeat(9, 1fr);
		--columns: repeat(12, 1fr);
		padding: unset;

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
			<p {...props} style={{ ...Paragraph, gridArea: "content" }}>
				{content.description}
			</p>
			<aside {...props} style={{ gridArea: "image" }}>
				<Image border src={require("pages/home/assets/img2.jpeg")} style={imgStyle} />
			</aside>
		</Container>
	)
}

export default About
