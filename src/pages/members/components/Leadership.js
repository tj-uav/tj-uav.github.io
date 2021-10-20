import Officers from "./Big Cards/Officers"
import Leads from "./Big Cards/Leads"
import { HorizontalContainer } from "theme/Components"
import { desktop } from "theme/Breakpoints"
import { dark } from "theme/Colors"

export default function Leadership(props){
	const containerStyles = {background: dark}
	if(desktop){ //if they are on a desktop, the officers and leads will be in two columns
		return(
			<HorizontalContainer style={containerStyles}>
				<Officers/>
				<Leads/>
			</HorizontalContainer>
		)
	}//if
	else{
		return(
			<div style={containerStyles}>
				<Officers/>
				<Leads/>
			</div>
		)
	}//else
}//Leadership