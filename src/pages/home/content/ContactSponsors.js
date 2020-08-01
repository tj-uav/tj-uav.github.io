import React from "react"
import styled from "styled-components"
import Image from "components/Image"
import Grid from "components/Grid"
import { dark } from "theme/Colors"
import { Heading, Paragraph, Breakpoints } from "theme/Styles"
import Contact from "pages/home/components/Contact"

const Container = styled(Grid)`
	background-color: ${dark};

	${Breakpoints.small} {
		--rows: repeat(2, 2.1875rem) auto auto 2.1875rem auto;
		--columns: 1rem auto 1rem;
		column-gap: 0;
		height: auto;

		/* prettier-ignore */
		grid-template-areas:
		".       .       .      "
		".       heading .      "
		".       text    .      "
		".       image   .      "
		".       .       .      "
		"contact contact contact"
	}

	${Breakpoints.desktop} {
		--rows: repeat(9, 1fr);
		--columns: repeat(12, 1fr);

		height: 100vh;
		gap: 1rem;

		/* prettier-ignore */
		grid-template-areas:
		".       .       .       .       .       .       .       .      contact contact contact contact"
		".       heading heading heading heading heading heading .      contact contact contact contact"
		".       text    text    text    text    text    text    .      contact contact contact contact"
		".       image   image   image   image   image   image   .      contact contact contact contact"
		".       image   image   image   image   image   image   .      contact contact contact contact"
		".       image   image   image   image   image   image   .      contact contact contact contact"
		".       image   image   image   image   image   image   .      contact contact contact contact"
		".       .       .       .       .       .       .       .      contact contact contact contact"
		".       .       .       .       .       .       .       .      contact contact contact contact";
	}
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
