import React from "react"
import styled from "styled-components"
import TextareaAutosize from "react-textarea-autosize"
import Grid from "components/Grid"
import Button from "components/Button"
import { dark, darker } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"

// prettier-ignore
const Container = styled(Grid)`
    --columns: repeat(8, 1fr);
    --rows: repeat(18, 1fr);
	grid-template-areas: 
        ".       .       .       .       .       .       .       .       "
        ".       .       .       .       .       .       .       .       "
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
        ".       box4    box4    box4    box4    box4    box4    .       "
        ".       .       .       .       .       .       .       .       "
        ".       .       .       .       .       .       .       .       "
        ".       .       .       .       .       .       .       .       "
        ".       .       .       .       .       .       .       .       ";

	background-color: ${darker};
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
