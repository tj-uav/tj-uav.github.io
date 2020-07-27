import React from "react"
import styled from "styled-components"
import Image from "components/Image"
import Grid from "components/Grid"
import { Heading, Paragraph } from "theme/Styles"
import { dark } from "theme/Colors"

// prettier-ignore
const Container = styled(Grid)`
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

    background-color: ${dark};
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
