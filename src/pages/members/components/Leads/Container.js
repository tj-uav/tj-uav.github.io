import styled from "styled-components"

import { darker } from "theme/Colors"
import { mobile, tablet, desktop } from "theme/Breakpoints"
import Grid from "components/Grid"

const fixedWidth = "2.1875rem"

export default styled(Grid)`
	background: ${darker};
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
		--columns: 0 repeat(8, 1fr) 0;

		grid-template-areas:
			". . .       .       .       .       .       .       . . "
			". . heading heading heading heading heading heading . . "
			". . content content content content content content . . "
			". . .       .       .       .       .       .       . . ";
	}

	${desktop} {
		--columns: repeat(12, 1fr);

		grid-template-areas:
			". .       .       .       .       .       .       .       .       .       .       . "
			". heading heading heading heading heading heading heading heading heading heading . "
			". content content content content content content content content content content . "
			". .       .       .       .       .       .       .       .       .       .       . ";
	}
`
