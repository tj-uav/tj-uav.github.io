import React from "react"
import styled from "styled-components"

import { StyledHeading } from "theme/Styles"
import { officers } from "pages/members/assets/data.json"

import Content from "./Content"

const Officers = () => (
	<>
		<Heading>{officers.heading}</Heading>
		<Content entries={officers.entries} />
	</>
)

const Heading = styled(StyledHeading)`
	grid-area: heading;
`

export default Officers
