import React from "react"
import styled from "styled-components"
import Image from "components/Image"
import { Heading, Paragraph } from "theme/Styles"

const StyledImage = styled(Image)`
	width: 50%;
`
const Sponsors = ({ content, ...props }) => {
	const images = content.imgs.map((img, i) => {
		const src = require(`./assets/${img.file}`)
		return <StyledImage key={i} src={src} alt={img.alt} />
	})

	return (
		<>
			<h1 {...props} style={{ ...Heading, gridArea: "2 / 2 / 3 / -2" }}>
				{content.title}
			</h1>
			<p {...props} style={{ ...Paragraph, gridArea: "3 / 2 / 3 / 8" }}>
				{content.description}
			</p>
			<div style={{ gridArea: "4 / 2 / 8 / 8" }}>{images}</div>
		</>
	)
}

export default Sponsors
