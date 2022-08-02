import React from "react"
import styled from "styled-components"

import RawImage from "components/Image"

const TeamImage = () => (
	<Image src={require("../../assets/team.jpg")} alt="the team" border />
)
export default TeamImage

const Image = styled(RawImage)`
	object-fit: cover;
	grid-area: image;
	width: 100%;
	max-width: 1100px;
	height: 100%;
	min-height: 300px;
	max-height: 500px;
`
