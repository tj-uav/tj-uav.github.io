import React from "react"
import styled from "styled-components"

import { StyledParagraph } from "theme/Styles"
import { main } from "pages/members/assets/data.json"

const TeamCaption = () => (
	<Caption>
		{main.caption.map((str, i) => (
			<p key={i}>
				{i !== 0 && <br />}
				{str}
			</p>
		))}
	</Caption>
)

export default TeamCaption

const Caption = styled(StyledParagraph)`
	grid-area: caption;
	overflow: hidden;
`
