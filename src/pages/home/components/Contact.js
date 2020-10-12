import React from "react"
import styled from "styled-components"
import TextareaAutosize from "react-textarea-autosize"
import Grid from "components/Grid"
import Button from "components/Button"
import { dark, darker } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"

const Container = styled(Grid)`
	background-color: ${darker};

	${mobile} {
		column-gap: 0;
		height: auto;
		--rows: repeat(18, 1fr);
		--columns: 1rem repeat(6, 1fr) 1rem;

		/* prettier-ignore */
		grid-template-areas:
		".       .       .       .       .       .       .       .       "
		".       heading heading heading heading heading heading .       "
		".       name    name    name    name    name    name    .       "
		".       box1    box1    box1    box1    box1    box1    .       "
		".       email   email   email   email   email   email   .       "
		".       box2    box2    box2    box2    box2    box2    .       "
		".       message message message message message message .       "
		".       box4    box4    box4    box4    box4    box4    .       "
		".       box4    box4    box4    box4    box4    box4    .       "
		".       box4    box4    box4    box4    box4    box4    .       "
		".       box4    box4    box4    box4    box4    box4    .       "
		".       box4    box4    box4    box4    box4    box4    .       ";
	}

	${tablet} {
		--columns: repeat(8, 1fr);
		--rows: repeat(15, 1fr);
		gap: 1rem;
	}

	${desktop} {
		--columns: repeat(8, 1fr);
		--rows: repeat(18, 1fr);

		/* prettier-ignore */
		grid-template-areas:
		".       .       .       .       .       .       .       .       "
		".       .       .       .       .       .       .       .       "
		".       heading heading heading heading heading heading .       "
		".       heading heading heading heading heading heading .       "
		".       name    name    name    name    name    name    .       "
		".       box1    box1    box1    box1    box1    box1    .       "
		".       email   email   email   email   email   email   .       "
		".       box2    box2    box2    box2    box2    box2    .       "
		".       message message message message message message .       "
		".       box4    box4    box4    box4    box4    box4    .       "
		".       box4    box4    box4    box4    box4    box4    .       "
		".       box4    box4    box4    box4    box4    box4    .       "
		".       box4    box4    box4    box4    box4    box4    .       "
		".       box4    box4    box4    box4    box4    box4    .       "
		".       .       .       .       .       .       .       .       "
		".       .       .       .       .       .       .       .       "
		".       .       .       .       .       .       .       .       "
		".       .       .       .       .       .       .       .       ";
	}
`

const ThemedLabel = styled.label(() => Paragraph)
const Label = styled(ThemedLabel)`
	position: relative;
	top: 1rem;
`

const ThemedInput = styled.input(() => Paragraph)
const Input = styled(ThemedInput)`
	background-color: ${dark};
	border-radius: 0.125rem;
	padding: 0 0.5rem;
	border: none;
	width: 100%;
`

const ThemedTextarea = styled(TextareaAutosize)(() => Paragraph)
const Textarea = styled(ThemedTextarea)`
	background-color: ${dark};
	border-radius: 0.125rem;
	min-height: ${16 * 6}pt;
	padding: 0 0.5rem;
	resize: vertical;
	border: none;
	width: 100%;
`

const Contact = ({ content, ...props }) => {
	return (
		<Container {...props}>
			<h1 style={{ ...Heading, gridArea: "heading" }}>{content.title}</h1>
			<Label style={{ gridArea: "name" }}>Name</Label>
			<Input type="text" style={{ gridArea: "box1" }} />
			<Label style={{ gridArea: "email" }}>Email</Label>
			<Input type="text" style={{ gridArea: "box2" }} />
			<Label style={{ gridArea: "message" }}>Message </Label>
			<div style={{ gridArea: "box4", display: "flex", flexDirection: "column" }}>
				<Textarea type="text" />
				<div style={{ position: "relative", top: "1rem" }}>
					<Button>Send Message</Button>
				</div>
			</div>
		</Container>
	)
}

export default Contact
