import React from "react"
import styled from "styled-components"
import Grid from "components/Grid"
import { darker } from "theme/Colors"
import { Paragraph } from "theme/Styles"

// prettier-ignore
const Container = styled(Grid)`
    --columns: repeat(12, 1fr);
    --rows: unset;
    grid-template-areas:
        ".       content content content content content content content content content content .       ";

	background-color: ${darker};
	align-items: center;
	height: 5.375rem;
	width: 100%;
	bottom: 0;
`

const Footer = () => (
	<Container as="footer">
		<p style={{ ...Paragraph, gridArea: "content" }}>
			Copyright &copy; TJUAV 2022.
			<br />
			Contributors: William Black '25, Nicolas Makovnik '23, Jason Klein '22
		</p>
	</Container>
)

export default Footer