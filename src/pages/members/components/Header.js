import React from "react"
import styled from "styled-components"

import { StyledHeading } from "theme/Styles"
import { title } from "../assets/data.json"

export default function Header() {

	return (
		<Heading>{title}</Heading>
	)
}

const Heading = styled(StyledHeading)`
	padding-top: 86px;
	margin-left: 5vw;
	margin-right: 5vw;
	margin-bottom: 3vh;
`
