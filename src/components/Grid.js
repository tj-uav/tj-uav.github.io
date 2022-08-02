import styled from "styled-components"

const Grid = styled.section`
	--columns: repeat(12, 1fr); /* defaults, these cascade down */
	--rows: repeat(9, 1fr); /* defaults, these cascade down */

	grid-template-columns: var(--columns);
	grid-template-rows: var(--rows);

	position: relative;
	gap: 1rem;
	height: 100vh;
	display: grid;
`

export default Grid