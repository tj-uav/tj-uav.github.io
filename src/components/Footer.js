import React from "react"
import styled from "styled-components"
import { darker } from "theme/Colors"
import { Paragraph } from "theme/Styles"

const StyledFooter = styled.footer`
	grid-template-columns: repeat(12, calc(calc(100vw - ${11 * 16}px) / 12));
	background-color: ${darker};
	align-items: center;
	position: absolute;
	height: 5.375rem;
	display: grid;
	width: 100vw;
	bottom: 0;
`

const Footer = () => (
	<StyledFooter>
		<p style={{ ...Paragraph, gridColumn: "2 / -2" }}>
			Copyright &copy; TJUAV 2020.
			<br />
			All rights reserved.
		</p>
	</StyledFooter>
)

export default Footer
