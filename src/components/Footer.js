import React from "react"
import styled from "styled-components"
import { darker } from "theme/Colors"
import { Paragraph } from "theme/Styles"

const w = `var(--w)`

// prettier-ignore
const Container = styled.footer`
    grid-template:
        ".      footer footer footer footer footer footer footer footer footer footer .      "
        /${w}   ${w}   ${w}   ${w}   ${w}   ${w}   ${w}   ${w}   ${w}   ${w}   ${w}   ${w};

    --columns: 12;
    --w: calc(100% * (1 / var(--columns)) - 1rem * (var(--columns) - 1) / var(--columns));

	background-color: ${darker};
	align-items: center;
	position: absolute;
	height: 5.375rem;
	display: grid;
	width: 100vw;
	bottom: 0;
	gap: 1rem;
`

const Footer = () => (
	<Container>
		<p style={{ ...Paragraph, gridArea: "footer" }}>
			Copyright &copy; TJUAV 2020.
			<br />
			All rights reserved.
		</p>
	</Container>
)

export default Footer
