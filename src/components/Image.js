import React from "react"
import styled from "styled-components"
import { blue } from "theme/Colors"

const StyledImage = styled.img`
	border: 1rem solid ${blue};
`

const Image = ({ src, alt, border, ...props }) => {
	if (border) return <StyledImage src={src} style={{ ...props.style, width: "100%" }} alt={alt} />
	else return <img src={src} style={{ ...props.style, width: "100%" }} alt={alt} />
}

export default Image
