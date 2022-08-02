import { blue } from "theme/Colors.js"
import { StyledSubheading } from "theme/Styles.js"

import { DescriptionText, CardContainer } from "./TeamCard.js"

const SubteamCard = (props) => {
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

const Title = (props) => {
	return (
		<StyledSubheading>
			{props.children}
		</StyledSubheading>
	)
}

export default SubteamCard