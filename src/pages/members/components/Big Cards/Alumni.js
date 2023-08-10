import React from "react"
import styled from "styled-components"

import { dark } from "theme/Colors"
import { StyledHeading } from "theme/Styles"
import Data from "pages/members/assets/data.json"

import Container from "./Container"
import Content from "./Content"

const Alumni = () => (
	<Container as="section" area="alumni">
		<Heading>{Data.alumni.heading}</Heading>
		<Content entries={Data.alumni.entries} bg_color={dark} />
	</Container>
)

const Heading = styled(StyledHeading)`
	grid-area: heading;
`

export default Alumni