import React from "react"
import styled from "styled-components"

import { StyledHeading } from "theme/Styles"
import Data from "pages/members/assets/data.json"

import Container from "./Container"
import Content from "./Content"

const Members = () => (
	<Container as="section" area="members">
		<Heading>{Data.members.heading}</Heading>
		<Content entries={Data.members.entries} />
	</Container>
)

const Heading = styled(StyledHeading)`
	grid-area: heading;
`

export default Members