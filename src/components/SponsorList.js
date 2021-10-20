import { Subheading } from "theme/Styles.js"
import { darker } from "theme/Colors"
import { HorizontalContainer } from "theme/Components.js"
import { title,sponsors } from "./SponsorAssets/sponsors.json"

// pass a scale property to increase the size of sponsor icons
// props.scale = <scale factor>
function SponsorList(props){
	return(
		<Container>
			<Caption>
				{title}
			</Caption>
			<HorizontalContainer>
				{sponsors.map((element) => {
					return <Logo key={element.alt} filePath={element.image} alt={element.alt} scale={"logoScale" in props ? props.logoScale : 1}/>
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
	var imageSource = require("./SponsorAssets/"+props.filePath).default
	var scaleFactor = 1
	if("scale" in props){
		scaleFactor = props.scale
	}//if
	var heightVH = 15 * scaleFactor
	var styleObject = {
		"objectFit":"contain",
		"height": heightVH+"vh",
		"margin":"2vh"
	}
	return (
		<img src={imageSource} alt={props.alt} style={styleObject}/>
	);
}