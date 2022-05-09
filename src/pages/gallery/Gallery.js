import { dark, blue } from "theme/Colors"
import { title,description,content } from "./assets/data.json"
import { StyledHeading, StyledSubheading } from "theme/Styles"
import React from "react"
import Card from "./components/Card"

function Gallery(props){
	const headingStyles = {
		marginTop: "3vh",
		marginLeft:"5vw",
		marginBottom:"4vh",
		maxWidth:"80vw"
	}

	return(
		<div>
			<StyledHeading style={headingStyles}>
				{title}
			</StyledHeading>
			<StyledSubheading style={headingStyles}>
				{description}
			</StyledSubheading>
			<Cards content={content}/>
		</div>
	)
}//Gallery

function Cards({content, ...props}){
	// NOTE: isOdd is used to vary the card color and orientation
	return(
		<div>
			{content.map((imageData, index) => (
				<Card key={index} cardData={imageData} isOdd={index%2===1} />
			))}
		</div>
	)
}//Cards

export default Gallery