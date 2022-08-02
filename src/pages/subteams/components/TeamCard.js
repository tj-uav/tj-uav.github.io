import { dark } from "theme/Colors"
import { StyledHeading, StyledParagraph, Heading } from "theme/Styles.js"
import SubteamCard from "./SubteamCard"
import React from 'react';
import { HorizontalContainer } from "theme/Components.js"
import styled from "styled-components"

const TeamCard = (props) => {
	var teamData = props.data

	return (
		<CardContainer color={dark}>
			<HorizontalContainer>
				<CardIcon src={require("../assets/"+teamData.icon.filename)} alt={teamData.icon.alt} />

				<TitleText>
					{teamData.name}
				</TitleText>
			</HorizontalContainer>
			<DescriptionText>
				{teamData.description}
			</DescriptionText>
			{(teamData.subteams).map((value) => (
				<SubteamCard data={value} key={value.name} />
			))}
		</CardContainer>
	)
}

const CardContainer = (props) => {
	return (
		<StyledCardContainer color={props.color}>
			{props.children}
		</StyledCardContainer>
	)
}

const StyledCardContainer = styled.div`
	padding: 1em;
	background-color: ${props => props.color};
	width: 98%;
	margin-left: auto;
	margin-right: auto;
	margin-top 3vh;
	border-radius: 12px;
`

const DescriptionText = (props) => {
	return (
		<StyledParagraph style={{ gridArea: "text", marginTop: "0.75em" }}>
			{props.children}
		</StyledParagraph>
	)
}

const TitleText = (props) => {
	return (
		<StyledHeading style={{ gridArea: "title" }}>
			{props.children}
		</StyledHeading>
	)
}

const CardIcon = (props) => {
	var iconHeight = Heading.fontSize
	return (
		<img src={props.src} alt={props.alt} style={{ gridArea: "icon", height: iconHeight, margin: "auto 8px" }} />
	);
}

export { CardContainer, DescriptionText }
export default TeamCard