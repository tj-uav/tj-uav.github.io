import styled from "styled-components"

import { text } from "./Colors"

export const Paragraph = {
	fontFamily: "Poppins",
	fontWeight: 300,
	fontSize: "16px",
	color: text,
}

export const StyledParagraph = styled.h1(() => Paragraph)

export const Heading = {
	alignSelf: "flex-end",
	fontVariant: "small-caps",
	fontFamily: "Montserrat",
	fontWeight: 700,
	fontSize: "32px",
	color: text,
}

export const StyledHeading = styled.h1(() => Heading)

export const Subheading = {
	...Paragraph,
	fontWeight: 400,
	fontSize: "19px",
}

export const StyledSubheading = styled.h2(() => Subheading)
