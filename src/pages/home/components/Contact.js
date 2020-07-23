import React from "react"
import styled from "styled-components"
import TextareaAutosize from "react-textarea-autosize"
import Grid from "components/Grid"
import Button from "components/Button"
import { dark, darker } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"

const [w, h] = [`var(--w)`, `var(--h)`]

// prettier-ignore
const Container = styled(Grid)`
    --columns: 8;
    --rows: 18;
	grid-template: 
        ".       .       .       .       .       .       .       .       " ${h}
        ".       .       .       .       .       .       .       .       " ${h}
        ".       .       .       .       .       .       .       .       " ${h}
        ".       heading heading heading heading heading heading .       " ${h}
        ".       name    name    name    name    name    name    .       " ${h}
        ".       box1    box1    box1    box1    box1    box1    .       " ${h}
        ".       email   email   email   email   email   email   .       " ${h}
        ".       box2    box2    box2    box2    box2    box2    .       " ${h}
        ".       message message message message message message .       " ${h}
        ".       box4    box4    box4    box4    box4    box4    .       " ${h}
        ".       box4    box4    box4    box4    box4    box4    .       " ${h}
        ".       box4    box4    box4    box4    box4    box4    .       " ${h}
        ".       box4    box4    box4    box4    box4    box4    .       " ${h}
        ".       box4    box4    box4    box4    box4    box4    .       " ${h}
        ".       .       .       .       .       .       .       .       " ${h}
        ".       .       .       .       .       .       .       .       " ${h}
        ".       .       .       .       .       .       .       .       " ${h}
        ".       .       .       .       .       .       .       .       " ${h}
        /${w}    ${w}    ${w}    ${w}    ${w}    ${w}    ${w}    ${w};

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
`

const ThemedTextarea = styled(TextareaAutosize)(() => Paragraph)
const Textarea = styled(ThemedTextarea)`
	background-color: ${dark};
	border-radius: 0.125rem;
	min-height: ${16 * 6}pt;
	padding: 0 0.5rem;
	resize: vertical;
	border: none;
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
