import React from "react"
import styled from "styled-components"
import Image from "components/Image"
import { dark } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"
import { width, height } from "theme/Grid"
import Contact from "../components/Contact"

const [w, h] = [`var(--w)`, `var(--h)`]

// prettier-ignore
const Container = styled.section`
	grid-template:
		".       .       .       .       .       .       .       .      contact contact contact contact" ${h}
		".       heading heading heading heading heading heading .      contact contact contact contact" ${h}
		".       text    text    text    text    text    text    .      contact contact contact contact" ${h}
		".       image   image   image   image   image   image   .      contact contact contact contact" ${h}
		".       image   image   image   image   image   image   .      contact contact contact contact" ${h}
		".       image   image   image   image   image   image   .      contact contact contact contact" ${h}
		".       image   image   image   image   image   image   .      contact contact contact contact" ${h}
		".       .       .       .       .       .       .       .      contact contact contact contact" ${h}
		".       .       .       .       .       .       .       .      contact contact contact contact" ${h}
		/${w}    ${w}    ${w}    ${w}    ${w}    ${w}    ${w}    ${w}   ${w}    ${w}    ${w}    ${w};

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

const StyledImage = styled(Image)`
	width: 50%;
`

const Sponsors = ({ content }) => {
	const images = content.imgs.map((img, i) => {
		const src = require(`pages/home/assets/${img.file}`)
		return <StyledImage key={i} src={src} alt={img.alt} />
	})

	return (
		<>
			<h1 style={{ ...Heading, gridArea: "heading" }}>{content.title}</h1>
			<p style={{ ...Paragraph, gridArea: "text" }}>{content.description}</p>
			<div style={{ gridArea: "image" }}>{images}</div>
		</>
	)
}

const ContactSponsors = ({ content, ...props }) => (
	<Container {...props}>
		<Sponsors content={content.sponsor} />
		<Contact content={content.contact} style={{ gridArea: "contact" }} />
	</Container>
)

export default ContactSponsors
