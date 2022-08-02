import React from "react"
import styled from "styled-components"

import { dark } from "theme/Colors"
import { StyledHeading } from "theme/Styles"
import Data from "pages/members/assets/data.json"

import Container from "./Container"
import Content from "./Content"

const Leads = () => (
	<Container as="section" area="leads">
		<Heading>{Data.leads.heading}</Heading>
		<Content entries={Data.leads.entries} bg_color={dark} />
	</Container>
)

const Heading = styled(StyledHeading)`
	grid-area: heading;
`

export default Leads