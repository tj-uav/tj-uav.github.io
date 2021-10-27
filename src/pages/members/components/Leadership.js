import Officers from "./Big Cards/Officers"
import Leads from "./Big Cards/Leads"
import { HorizontalContainer } from "theme/Components"
import { isTablet, isDesktop } from "theme/Breakpoints"
import { dark } from "theme/Colors"
import { useEffect, useState } from "react"

export default function Leadership(props){
	

	//THE BELOW CHUNK OF CODE HANDLES BROWSER RESIZING
	var [currentState, setState]  = useState({
		tablet: isTablet(),
		desktop: isDesktop()
	});
    useEffect(() => { //useEffect will run the callBack function after this component is rendered
        //this is nice because it allows it to wait until the UI is in place before executing any code that isn't necessary yet
        
        //The code snippet below will rerender the Home component when the screen width is changed enough to need a new number of columns
        window.addEventListener('resize', possiblyUpdateState);

        function possiblyUpdateState(){
			const newState = {
				tablet: isTablet(),
				desktop: isDesktop()				
			}//newState
            if(!(newState === currentState)){
                setState(newState)
                window.removeEventListener('resize', possiblyUpdateState) //removes it so that the rerendered component can safely make its own listener afterwards
            }//if
        }
    });


	const containerStyles = {background: dark}

	if(currentState.tablet || currentState.desktop){ //if they are on a desktop, the officers and leads will be in two columns: ;
		const separatorStyles = {
			"width":"50%",
		}
		return(
			<HorizontalContainer style={containerStyles}>
				<div style={separatorStyles}>
					<Officers/>
				</div>
				<div style={separatorStyles}>
					<Leads/>
				</div>
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