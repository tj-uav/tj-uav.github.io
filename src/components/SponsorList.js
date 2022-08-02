import { Subheading } from "theme/Styles.js"
import { darker } from "theme/Colors"
import { HorizontalContainer } from "theme/Components.js"
import Sponsors from "./SponsorAssets/sponsors.json"

// pass a scale property to increase the size of sponsor icons
// props.scale = <scale factor>
function SponsorList(props){
	return(
		<Container>
			<Caption>
				{Sponsors.title}
			</Caption>
			<HorizontalContainer>
				{Sponsors.sponsors.map((element) => {
					return <Logo jsonData={element} key={element.alt} scale={"logoScale" in props ? props.logoScale : 1} />
				})}
			</HorizontalContainer>
		</Container>
	)
}//SponsorList
export default SponsorList


function Caption(props){
	var additionalStyles = {
		"display":"inline",
		"marginRight":"auto",
		"marginLeft":"auto"
	}
	var styleObject = {
		...additionalStyles,
		...Subheading
	}

	return (
		<h2 style={styleObject}>
			{props.children}
		</h2>
	)
}//Caption


function Container(props){
	var styleObject = {
		backgroundColor : darker,
		padding: "3vh 8vw",
		marginTop:"2vh"
	}
	
	return (
		<div style={styleObject}>
			{props.children}
		</div>
	)

}//Container

function Logo(props){
	var imageSource = require("./SponsorAssets/"+props.jsonData.image)
	var scaleFactor = 1
	if("scale" in props){
		scaleFactor = props.scale
	}//if
	var heightVH = 15 * scaleFactor
	var styleObject = {
		"objectFit":"contain",
		"height": heightVH+"vh",
		"marginRight":"4vh",
		"marginBottom":"2vh",
		"marginTop":"2vh",
		"maxWidth":"100%"
	}
	var returnObject = null;
	if("link" in props.jsonData){
		returnObject = (
			<a href={props.jsonData.link} target="_blank" rel="noreferrer">
				<img src={imageSource} alt={props.jsonData.alt} style={styleObject}/>
			</a>
		)
	}//if
	else{
		returnObject = <img src={imageSource} alt={props.jsonData.alt} style={styleObject}/>
	}//else
	return returnObject;
}