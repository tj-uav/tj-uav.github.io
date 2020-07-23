// requires `--columns` to be defined
export const width = "calc(100% * (1 / var(--columns)) - 1rem * (var(--columns) - 1) / var(--columns))"

// requires `--rows` to be defined
export const height = "calc(100% * (1 / var(--rows)) - 1rem * (var(--rows) - 1) / var(--rows))"
