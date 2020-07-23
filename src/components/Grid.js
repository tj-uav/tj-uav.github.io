import styled from "styled-components"

// requires `--columns` to be defined
export const width = "calc(100% * (1 / var(--columns)) - 1rem * (var(--columns) - 1) / var(--columns))"

// requires `--rows` to be defined
export const height = "calc(100% * (1 / var(--rows)) - 1rem * (var(--rows) - 1) / var(--rows))"

// extend with `styled(Grid)`
const Grid = styled.section`
	--columns: 12;
	--rows: 9;
	--w: ${width};
	--h: ${height};

	position: relative;
	gap: 1rem;
	height: 100vh;
	display: grid;
`

export default Grid
