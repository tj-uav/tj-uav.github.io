import React from "react"
import { isDesktop } from "theme/Breakpoints"
import { darker } from "theme/Colors"
import { HorizontalContainer } from "theme/Components"

import Card from "./BigCard"

export default function Content(props){
	var entries = props.entries
	const bg_color = (props["bg_color"])? props.bg_color : darker
	var cards = entries.map((lead, i) => (<Card key={i} data={lead} bg_color={bg_color} />));
	if(isDesktop()){
		var splitIndex = (cards.length+1)/2;
		var oddCards = cards.slice(0,splitIndex);
		var evenCards = cards.slice(splitIndex);
		
		const separatorStyles = {
			"width":"46%",
			"marginLeft":"2%",
			"marginRight":"2%"
		}
		return (
			<HorizontalContainer>
				<div style={separatorStyles}>
					{oddCards}
				</div>
				<div style={separatorStyles}>
					{evenCards}
				</div>
			</HorizontalContainer>
		)
	}// if desktop
	else{
		const columnStyles = {
			"width":"92%",
			"marginLeft":"4%",
			"marginRight":"4%"
		}
		return (
			<div style={columnStyles}>
				{cards}
			</div>
		)
	}//else smaller screen
}