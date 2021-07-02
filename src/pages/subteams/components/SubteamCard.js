import {blue} from "theme/Colors.js"
import {StyledSubheading} from "theme/Styles.js"

import {DescriptionText, CardContainer} from "./TeamCard.js"

function SubteamCard(props){
	var subteamData = props.data
	return(
		<CardContainer color={blue}>
			<Title>
				{subteamData.name}
			</Title>
			<DescriptionText>
				{subteamData.description}
			</DescriptionText>
		</CardContainer>
	)
}

function Title(props){
	var styleObject = {
	}
	return (
		<StyledSubheading style={styleObject}>
			{props.children}
		</StyledSubheading>
	)
}

export default SubteamCard