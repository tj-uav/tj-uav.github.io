import React from "react"
import styled from "styled-components"

import { dark } from "theme/Colors"

import Officer from "../Officer"
import { leads } from "pages/members/assets/data.json"

const Content = () => (
	<Container>
		{leads.entries.map((lead, i) => (
			<Lead key={i} data={lead} />
		))}
	</Container>
)

export default Content

const Lead = styled(Officer)`
	background-color: ${dark};
`

const Container = styled.div`
	--rows: unset;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
	grid-auto-rows: min-content;
	gap: 1rem;
	grid-area: content;
`
