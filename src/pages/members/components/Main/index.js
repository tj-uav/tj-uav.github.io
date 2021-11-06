import React from "react"
import styled from "styled-components"

import { StyledHeading, StyledSubheading } from "theme/Styles"

import TeamImage from "./TeamImage"
import Caption from "./TeamCaption"
import { main } from "../../assets/data.json"

export default function Main() {
	const { heading, subheading } = main

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
