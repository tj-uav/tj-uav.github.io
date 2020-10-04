import styled from "styled-components"

import { mobile, tablet, desktop } from "theme/Breakpoints"
import Grid from "components/Grid"

const fixedWidth = "2.1875rem"

export default styled(Grid)`
	grid-area: ${props => props.area};
	height: unset;
	gap: 1rem;

	${mobile} {
		--columns: 0 auto 0;
		--rows: ${fixedWidth} ${fixedWidth} min-content ${fixedWidth};

		grid-template-areas:
			". .       ."
			". heading ."
			". content ."
			". .       .";
	}

	${tablet} {
		--columns: repeat(6, 1fr);

		grid-template-areas:
			".       .       .       .       .       .      "
			"heading heading heading heading heading heading"
			"content content content content content content"
			".       .       .       .       .       .      ";
	}

	${desktop} {
		--columns: repeat(10, 1fr);
		--rows: ${fixedWidth} ${fixedWidth} min-content ${fixedWidth};

		grid-template-areas:
			".       .       .       .       .       .       .       .       .       .      "
			"heading heading heading heading heading heading heading heading heading heading"
			"content content content content content content content content content content"
			".       .       .       .       .       .       .       .       .       .      ";
	}
`
