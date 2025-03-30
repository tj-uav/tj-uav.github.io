// This function takes an SVG component and applies professional styling
export const styleSvgIcon = (SvgComponent, color = "#007bff") => {
	return (props) => (
	  <SvgComponent
		{...props}
		style={{
		  ...props.style,
		  fill: color,
		  stroke: color,
		  width: "100%",
		  height: "100%",
		}}
	  />
	)
  }
  
  