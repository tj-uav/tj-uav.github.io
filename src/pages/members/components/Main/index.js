import React from "react"
import styled from "styled-components"

import { StyledHeading, StyledSubheading } from "theme/Styles"

import TeamImage from "./TeamImage"
import Caption from "./TeamCaption"
import Data from "../../assets/data.json"

const Main = () => {
	const { heading, subheading } = Data.main

	return (
		<>
			<Heading>{heading}</Heading>
			<Subheading>{subheading}</Subheading>
			<TeamImage />
			<Caption />
		</>
	)
}

const Heading = styled(StyledHeading)`
	grid-area: heading;
`

const Subheading = styled(StyledSubheading)`
	grid-area: subheading;
`

export default Main