import RawImage from "components/Image"
import React from "react"
import { StyledParagraph, StyledSubheading } from "theme/Styles"

import {isDesktop} from "theme/Breakpoints"
import { blue, dark } from "../../../theme/Colors"
import { findByLabelText } from "@testing-library/react"

// TODO: add resize hook to rerender for new device if screen is resized

// isOdd will be used to vary the configurations
// cardDara must contain: caption, triangle_aspect_ratio, media_info:{type, src, (if type = "image" then also) alt}
function Card({isOdd, cardData, ...props}){
	if(isDesktop()){
		return <DesktopCard isOdd={isOdd} cardData={cardData} />
	}
	else {
		return <MobileCard isOdd={isOdd} cardData={cardData} />
	}
}//Card

function Media({media_info, ...props}){
	const media_styles = {
		width: "100%",
		height: "100%",
		objectFit: "cover"
	}//media_styles

	if(media_info.type === "image"){  // Image type
		return <RawImage style={media_styles} src={require("../assets/"+media_info.src).default} alt={media_info.alt}/>
	}//if
	else{  // Video type
		return(
			<video controls style={media_styles}>
				<source src={require("../assets/"+media_info.src).default} type={"video/mp4"}/>
				Sorry, your browser doesn't support embedded videos.
			</video>
		)
	}//else
}//Media

function InfoText({cardData, ...props}){
	const textStyles = {
		marginBottom: ".2em"
	}
	return(
		<>
			<StyledSubheading style={textStyles}>
				{cardData.title}
			</StyledSubheading>
			<StyledParagraph style={textStyles}>
				{cardData.description}
			</StyledParagraph>
		</>
	)

}

function MobileCard({isOdd, cardData, ...props}){
	const color = (isOdd)? blue : dark;
	return (
		<MobileContainer color={color} triangle_aspect_ratio={cardData.triangle_aspect_ratio}>
			<Media media_info={cardData.media_info} />
			<InfoText cardData={cardData} />
		</MobileContainer>
	)
}

function MobileContainer({color, triangle_aspect_ratio, ...props}){
	const divStyles = {
		width: "100vw",
		paddingTop:"3vw",
		paddingBottom:"1vw",
		paddingLeft:"6vw",
		paddingRight:"6vw",
		background: color
	}//divStyles
	return(
		<>
			<TriangleTop color={color} scaleFactor={triangle_aspect_ratio}/>
			<div style={divStyles}>
				{props.children}
			</div>
			<TriangleBottom color={color} scaleFactor={triangle_aspect_ratio}/>
		</>
	)
}//MobileContainer

function DesktopCard({isOdd, cardData, ...props}){
	var mainColor = (isOdd)? dark : blue;
	const horizontalStyles = {
		display:"flex",
		width:"100vw",
		background: mainColor
	}
	const imageStyles = {
		width:"60%",
		paddingTop:"5vh"
	}
	const textStyles = {
		width:"40%",
		marginTop:"0vh",
		padding: "3vw",
		paddingTop:"5vh"
	}
	const TextBox = (
		<div  style={textStyles}>
			<InfoText cardData={cardData}/>
		</div>
	)
	const MediaBox = (
		<div style={imageStyles}>
			<Media media_info={cardData.media_info} />
		</div>
	)

	if(isOdd){
		return (
			<div style={horizontalStyles}>
				{TextBox}
				{MediaBox}
			</div>
		)
	}
	else{
		return (
			<div style={horizontalStyles}>
				{MediaBox}
				{TextBox}
			</div>
		)
	}
}

function TriangleTop(props){
	var height = 15;
	if("scaleFactor" in props){
		height = 100/props.scaleFactor;
	}//if
	const topStyles = {
		width: 0,
		height: 0,
		borderBottom: height+"vw solid "+props.color,
		borderLeft: "100vw solid transparent"
	}//topStyles
	return <div  style={topStyles}/>
}//TriangleTop

function TriangleBottom(props){
	var height = 20;
	if("scaleFactor" in props){
		height = 100/props.scaleFactor;
	}//if
	const bottom_styles = {
		width: 0,
		height: 0,
		borderTop: height+"vw solid "+props.color,
		borderRight: "100vw solid transparent"
	}//top_styles
	return <div  style={bottom_styles}/>
}//TriangleBottom

export default Card