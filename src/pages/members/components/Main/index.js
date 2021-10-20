import React from "react"
import styled from "styled-components"

import { StyledHeading } from "theme/Styles"
import { title } from "../../assets/data.json"

export default function Main() {

	return (
		<>
			<Heading>{title}</Heading>
		</>
	)
}

const Heading = styled(StyledHeading)`
	grid-area: heading;
`
