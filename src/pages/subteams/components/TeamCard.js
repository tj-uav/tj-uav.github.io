import { dark } from "theme/Colors"
import { StyledHeading, StyledParagraph } from "theme/Styles.js"
import { HorizontalContainer } from "theme/Components.js"
import SubteamCard from "./SubteamCard"
import React from 'react';

function TeamCard(props){
	var teamData = props.data

	return(
		<CardContainer>
			<HorizontalContainer>
				<CardIcon src={require("../assets/"+teamData.icon).default}/>
				<TitleText>
					{teamData.name}
				</TitleText>
			</HorizontalContainer>
			<DescriptionText>
				{teamData.description}
			</DescriptionText>
			<div>
				{(teamData.subteams).map( (value) => <SubteamCard data={value} key={value.name}/>)}
			</div>
		</CardContainer>
	)
}

function CardContainer(props){

	var styleObject = {
		"backgroundColor":dark,
		"width":"90%",
		"marginLeft":"5%",
		"marginRight":"5%",
		"marginTop":".05vm",  // 1vm = height of viewport
		"marginBottom":".05vm"
	}

	return (
		<div style={styleObject}>
			{props.children}
		</div>
	)
}

function DescriptionText(props){
	return (
		<StyledParagraph>
			{props.children}
		</StyledParagraph>
	)
}

function TitleText(props){
	return (
		<StyledHeading>
			{props.children}
		</StyledHeading>
	)
}

function CardIcon(){
	return <div />
}

export default TeamCard