import React from "react"
import styled from "styled-components"
import TextareaAutosize from "react-textarea-autosize"
import { dark, darker } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"
import Button from "components/Button"

const Container = styled.section`
	height: 100vh;
	display: grid;
	grid-area: 1 / -5 / -1 / -1;
	grid-template-rows: repeat(18, calc(calc(100% - ${16 * (18 - 1)}px) / 18));
	grid-template-columns: repeat(8, calc(calc(100% - ${16 * (8 - 1)}px) / 8));
	gap: 1rem;
	background-color: ${darker};
`

const ThemedLabel = styled.label(() => Paragraph)
const Label = styled(ThemedLabel)`
	position: relative;
	top: 1rem;
	grid-column: 2 / -2;
`

const ThemedInput = styled.input(() => Paragraph)
const Input = styled(ThemedInput)`
	background-color: ${dark};
	grid-column: 2 / -2;
	padding: 0 0.5rem;
	border-radius: 0.125rem;
	border: none;
`

const ThemedTextarea = styled(TextareaAutosize)(() => Paragraph)
const Textarea = styled(ThemedTextarea)`
	resize: vertical;
	background-color: ${dark};
	grid-column: 2 / -2;
	padding: 0 0.5rem;
	border-radius: 0.125rem;
	border: none;
	min-height: 64pt;
`

const ThemedHeading = styled.h1(() => Heading)
const Header = styled(ThemedHeading)`
	grid-row: 3 / 4;
	grid-column: 2 / -2;
`

const Contact = ({ content, ...props }) => {
	return (
		<Container {...props}>
			<Header>{content.title}</Header>
			<Label style={{ gridRow: "4 / 5" }}>Name</Label>
			<Input type="text" style={{ gridRow: "5 / 6" }} />
			<Label style={{ gridRow: "6 / 7" }}>Email</Label>
			<Input type="text" style={{ gridRow: "7 / 8" }} />
			<Label style={{ gridRow: "8 / 9" }}>Message </Label>
			<div style={{ gridRow: "9 / 15", gridColumn: "2 / -2", display: "flex", flexDirection: "column" }}>
				<Textarea type="text" />
				<div style={{ position: "relative", top: "1rem" }}>
					<Button>Send Message</Button>
				</div>
			</div>
		</Container>
	)
}

export default Contact
