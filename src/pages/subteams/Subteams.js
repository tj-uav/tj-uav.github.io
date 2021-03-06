import {teams} from "./assets/data.json"
import TeamCard from "./components/TeamCard.js"
import { darker } from "theme/Colors"
import React from "react"

function Subteams(props){
	return(
		<PageContainer headerHeight={props.headerHeight}>
			{teams.map( (value) => <TeamCard data={value} key={value.name} /> )}
		</PageContainer>
	)
}

function PageContainer(props){
	var styleObject = {
		"width":"100%",
		"height":"100%",
		"paddingTop": ("headerHeight" in props)? props.headerHeight : "16vh", 
		"backgroundColor":darker,
		"position":"static"
	}

	// props.children is an array of child elements that is passed automatically (behind the scenes)
	return (
		<div style={styleObject}>
			{props.children}
		</div>
	)
}



export default Subteams