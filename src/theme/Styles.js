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

// prettier-ignore
export const Breakpoints = {
	small:   `@media only screen and (min-width: ${220}px)`,
	mobile:  `@media only screen and (min-width: ${480}px)`,
	desktop: `@media only screen and (min-width: ${768}px)`,
}

// export const Breakpoints = Object.keys(BreakpointsRaw)
// 	.map(key => ({ [key]: BreakpointsRaw[key] }))
// 	.reduce(reducer, {})

// function reducer(obj, c) {
// 	const [key, value] = Object.entries(c)[0]
// 	return {
// 		...obj,
// 		[key]: `@media only screen and (min-width: ${value}px)`,
// 	}
// }
