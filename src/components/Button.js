import React from "react"
import styled from "styled-components"
import { Paragraph } from "theme/Styles"
import { red, text } from "theme/Colors"

const StyledButton = styled.a`
	border-radius: 0.125rem;
	padding: 0.25rem 1rem;
	text-decoration: none;
	background: ${red};
	color: ${text};

	:hover {
		text-decoration: underline;
	}
`

const Button = ({ href, ...props }) => {
	return (
		<StyledButton style={{ ...Paragraph, ...props.style }} href={href} {...props}>
			{props.children}
		</StyledButton>
	)
}

export default Button
