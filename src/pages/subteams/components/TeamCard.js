import { dark } from "theme/Colors"
import { StyledHeading, StyledParagraph } from "theme/Styles.js"
import SubteamCard from "./SubteamCard"
import React from 'react';

function TeamCard(props){
	var teamData = props.data

	return(
		<CardContainer color={dark}>
			<TitleText>
				<CardIcon src={require("../assets/"+teamData.icon.filename).default} alt={teamData.icon.alt}/>
				{teamData.name}
			</TitleText>
			<DescriptionText>
				{teamData.description}
			</DescriptionText>
			{(teamData.subteams).map( (value) => <SubteamCard data={value} key={value.name}/>)}
		</CardContainer>
	)
}

export const CardContainer = function(props){

	var styleObject = {
		"padding":"10px",
		"backgroundColor":props.color,
		"width":"96%",
		"marginLeft":"auto",
		"marginRight":"auto",
		"marginTop":"3vh",  // 100vh = height of viewport
		"borderRadius":"30px"
	}

	return (
		<div style={styleObject}>
			{props.children}
		</div>
	)
}

export function DescriptionText(props){
	var styleObject = {
		"gridArea":"text"
	}
	return (
		<StyledParagraph style={styleObject}>
			{props.children}
		</StyledParagraph>
	)
}

function TitleText(props){
	var styleObject = {
		"gridArea":"title"
	}
	return (
		<StyledHeading style={styleObject}>
			{props.children}
		</StyledHeading>
	)
}

function CardIcon(props){
	var styleObject = {
		"gridArea":"icon",
		"height":"1em",
		"margin":"auto 8px"
	}
	return <img src={props.src} alt={props.alt} style={styleObject}/>
}

// POSSIBLE GRID CONTAINER
// const Container = styled(Grid)`
// 	background-color: ${dark};
// 	border-radius: 20px;

// 	--rows: repeat(5, 2.1875rem) auto;
// 	height: initial;
// 	padding: 0 1rem;
// 	--columns: repeat(8, 1fr);

// 	/* prettier-ignore */
// 	grid-template-areas:
// 		" icon   title  title  title  title  title  title  title  "
// 		" text   text   text   text   text   text   text   text   "
// 		" sub    sub    sub    sub    sub    sub    sub    sub    ";
// `

export default TeamCard