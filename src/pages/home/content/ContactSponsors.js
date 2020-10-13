import React from "react"
import styled from "styled-components"
import Image from "components/Image"
import Grid from "components/Grid"
import Parser from "components/Parser"
import { dark } from "theme/Colors"
import { StyledHeading as Heading, StyledParagraph as Paragraph } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"
import Contact from "pages/home/components/Contact"

const Container = styled(Grid)`
	background-color: ${dark};

	${mobile} {
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
		"contact contact contact";
	}

	${tablet} {
		--columns: repeat(8, 1fr);
		gap: 1rem;

		/* prettier-ignore */
		grid-template-areas:
		".       .       .       .       .       .       .       .      "
		".       heading heading heading heading heading heading .      "
		".       text    text    text    text    text    text    .      "
		".       image   image   image   image   image   image   .      "
		".       .       .       .       .       .       .       .      "
		"contact contact contact contact contact contact contact contact";
	}

	${desktop} {
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
	const images = content.images.map((img, i) => {
		const src = require(`pages/home/assets/${img.src}`)
		return <StyledImage key={i} src={src} alt={img.alt} />
	})

	return (
		<>
			<Heading style={{ gridArea: "heading" }}>{content.title}</Heading>
			<Paragraph style={{ gridArea: "text" }}>
				<Parser absolute={true} Component={Paragraph}>
					{content.description}
				</Parser>
			</Paragraph>
			<div style={{ gridArea: "image" }}>{images}</div>
		</>
	)
}

const ContactSponsors = ({ content, ...props }) => (
	<Container id="sponsor" {...props}>
		<Sponsors content={content.sponsor} />
		<Contact content={content.contact} style={{ gridArea: "contact" }} />
	</Container>
)

export default ContactSponsors
