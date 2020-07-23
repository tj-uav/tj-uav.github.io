import React from "react"
import styled from "styled-components"
import Image from "components/Image"
import { Subheading } from "theme/Styles"
import { width, height } from "theme/Grid"
import { darker } from "theme/Colors"

const [w, h] = [`var(--w)`, `var(--h)`]

// prettier-ignore
const Container = styled.section`
	grid-template: 
    ".     .     .     .     .     .     .     .     .     .     .     .     " ${h}
    ".     .     .     .     .     .     .     .     .     .     .     .     " ${h}
    ".     .     .     .     .     .     .     .     .     .     .     .     " ${h}
    ".     .     .     .     .     .     .     .     .     .     .     .     " ${h}
    ".     .     .     .     .     .     .     .     .     .     .     .     " ${h}
    ".     logo  logo  logo  logo  logo  .     image image image image .     " ${h}
    ".     logo  logo  logo  logo  logo  .     image image image image .     " ${h}
    ".     logo  logo  logo  logo  logo  .     image image image image .     " ${h}
    ".     .     .     .     .     .     .     image image image image .     " ${h}
    ".     text  text  text  text  text  .     image image image image .     " ${h}
    ".     text  text  text  text  text  .     image image image image .     " ${h}
    ".     text  text  text  text  text  .     image image image image .     " ${h}
    ".     text  text  text  text  text  .     image image image image .     " ${h}
    ".     .     .     .     .     .     .     .     .     .     .     .     " ${h}
    ".     .     .     .     .     .     .     .     .     .     .     .     " ${h}
    ".     .     .     .     .     .     .     .     .     .     .     .     " ${h}
    ".     .     .     .     .     .     .     .     .     .     .     .     " ${h}
    ".     .     .     .     .     .     .     .     .     .     .     .     " ${h}
    /${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w}  ${w};

	--columns: 12;
	--rows: 18;
	--w: ${width};
	--h: ${height};

    background-color: ${darker};
	position: relative;
	gap: 1rem;
	height: 100vh;
	display: grid;
`

const Hero = ({ content, ...props }) => (
	<Container>
		<Image src={require("pages/home/assets/logo.svg")} style={{ gridArea: "logo" }} alt="TJUAV Logo" />
		<h2 style={{ ...Subheading, gridArea: "text", alignSelf: "flex-end" }}>{content.description}</h2>
		<div style={{ gridArea: "image" }}>
			<Image
				src={require("pages/home/assets/img1.jpeg")}
				style={{ width: "100%", height: "100%", objectFit: "cover" }}
				alt="The team"
				border
			/>
		</div>
	</Container>
)

export default Hero
