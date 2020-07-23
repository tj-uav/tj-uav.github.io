import { text } from "./Colors"

export const Paragraph = {
	fontFamily: "Poppins",
	fontWeight: 300,
	fontSize: "16px",
	color: text,
}

export const Heading = {
	alignSelf: "flex-end",
	fontVariant: "small-caps",
	fontFamily: "Montserrat",
	fontWeight: 700,
	fontSize: "32px",
	color: text,
}

export const Subheading = {
	...Paragraph,
	fontWeight: 400,
	fontSize: "19px",
}

// export const Heading = styled.h1`
//     font-variant: small-caps;
//     font-family: Montserrat;
//     font-weight: 700;
//     font-size: 32px;
//     color: ${text};
// `
