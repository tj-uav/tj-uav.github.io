import React from "react"
import styled from "styled-components"

import Card from "./BigCard"

const Content = ({ entries, bg_color }) => (
	<Container>
		{entries.map((lead, i) => (
			<Card key={i} data={lead} bg_color={bg_color} />
		))}
	</Container>
)

const Container = styled.div`
	--rows: unset;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
	grid-auto-rows: min-content;
	gap: 1rem;
	grid-area: content;
`

export default Content