import React from "react"
import styled from "styled-components"
import Image from "components/Image"
import { Heading, Paragraph } from "theme/Styles"
import { width, height } from "theme/Grid"
import { dark } from "theme/Colors"

const [w, h] = [`var(--w)`, `var(--h)`]

// prettier-ignore
const Container = styled.section`
	grid-template:
		".       .       .       .       .       .       .       .      .      .      .      .      " ${h}
		".       header  header  header  header  header  header  header header header header .      " ${h}
		".       content content content content content .       image  image  image  image  .      " ${h}
		".       content content content content content .       image  image  image  image  .      " ${h}
		".       content content content content content .       image  image  image  image  .      " ${h}
		".       content content content content content .       image  image  image  image  .      " ${h}
		".       content content content content content .       image  image  image  image  .      " ${h}
		".       .       .       .       .       .       .       .      .      .      .      .      " ${h}
		".       .       .       .       .       .       .       .      .      .      .      .      " ${h}
		/${w}    ${w}    ${w}    ${w}    ${w}    ${w}    ${w}    ${w}   ${w}   ${w}   ${w}   ${w};

	--columns: 12;
    --rows: 9;
	--w: ${width};
    --h: ${height};
    
	background-color: ${dark};
	position: relative;
	gap: 1rem;
	height: 100vh;
	display: grid;
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
