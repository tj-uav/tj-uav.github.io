import Data from "./assets/data.json"
import TeamCard from "./components/TeamCard.js"
import { darker } from "theme/Colors"
import React from "react"
import styled from "styled-components"

const Subteams = (props) => {
	return(
		<PageContainer headerHeight={props.headerHeight}>
			{Data.teams.map((value) => (
				<TeamCard data={value} key={value.name} />
			))}
		</PageContainer>
	)
}

const PageContainer = (props) => {
	return (
		<StyledPageContainer>
			{props.children}
		</StyledPageContainer>
	)
}

const StyledPageContainer = styled.div`
	width: 100%;
	height: 100%;
	backgroundColor: ${darker};
	position: static;
`

export default Subteams