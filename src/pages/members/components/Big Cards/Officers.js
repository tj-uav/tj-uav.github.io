import React from "react"
import styled from "styled-components"

import { StyledHeading } from "theme/Styles"
import Data from "pages/members/assets/data.json"

import Container from "./Container"
import Content from "./Content"

const Officers = () => (
	<Container as="section" area="officers">
		<Heading>{Data.officers.heading}</Heading>
		<Content entries={Data.officers.entries} />
	</Container>
)

const Heading = styled(StyledHeading)`
	grid-area: heading;
`

export default Officers