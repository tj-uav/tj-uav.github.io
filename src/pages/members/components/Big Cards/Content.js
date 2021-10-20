import React from "react"
import styled from "styled-components"
import { desktop } from "theme/Breakpoints"
import { HorizontalContainer } from "theme/Components"

import Card from "./BigCard"

export default function Content(entries, bg_color ){}
	var cards = entries.map((lead, i) => (<Card key={i} data={lead} bg_color={bg_color} />));
	if(desktop){
		splitIndex = (cards.size+1)/2;
		oddCards = cards.slice(0,splitIndex);
		evenCards = cards.slice(splitIndex);
		
		return (
			<HorizontalContainer>
				<div>
					{oddCards}
				</div>
				<div>
					{evenCards}
				</div>
			</HorizontalContainer>
		)
	}// if desktop
	else{
		return (
			<div>
				{cards}
			</div>
		)
	}//else smaller screen
}

export default Content

const Container = styled.div`
	--rows: unset;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
	grid-auto-rows: min-content;
	gap: 1rem;
	grid-area: content;
`
