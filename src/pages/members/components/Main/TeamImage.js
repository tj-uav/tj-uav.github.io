import React from "react"
import styled from "styled-components"

import RawImage from "components/Image"

import Team from "../../assets/team.jpg"

const TeamImage = () => (
	<Image src={Team} alt="the team" border />
)

const Image = styled(RawImage)`
	object-fit: cover;
	grid-area: image;
	width: 100%;
	max-width: 1100px;
	height: 100%;
	min-height: 300px;
	max-height: 500px;
`

export default TeamImage