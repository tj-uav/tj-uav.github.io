import React from "react"
import styled from "styled-components"

import { StyledHeading } from "theme/Styles"
import { leads } from "pages/members/assets/data.json"

import Container from "./Container"
import Content from "./Content"

const Leads = () => (
	<Container as="section">
		<Heading>{leads.heading}</Heading>
		<Content />
	</Container>
)

const Heading = styled(StyledHeading)`
	grid-area: heading;
`

export default Leads
