import React from "react"
import styled from "styled-components"
import { Paragraph } from "theme/Styles"
import { red, text } from "theme/Colors"

const StyledButton = styled.a`
	padding: 0.25rem 1rem;
	border-radius: 0.125rem;
	background: ${red};
	color: ${text};
`

const Button = ({ href, ...props }) => {
	return (
		<StyledButton style={{ ...Paragraph, ...props.style }} href={href} {...props}>
			{props.children}
		</StyledButton>
	)
}

export default Button
