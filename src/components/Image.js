import React from "react"
import styled from "styled-components"
import { blue } from "theme/Colors"

const StyledImage = styled.img`
	border: 0.25rem solid ${blue};
`

const Image = ({ src, alt, border, ...props }) => {
	if (border)
		return (
			<StyledImage
				{...props}
				src={src}
				style={{ /* width: "100%",  */ ...props.style }}
				alt={alt}
			/>
		)
	else
		return (
			<img {...props} src={src} style={{ /* width: "100%", */ ...props.style }} alt={alt} />
		)
}

export default Image
