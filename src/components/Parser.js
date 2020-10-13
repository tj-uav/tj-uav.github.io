import React from "react"
import { red } from "theme/Colors"

export default function Parser({ Component, children, color = red, absolute }) {
	const linkRegex = /\[([^)]+)\]\(([^)]+)\)/g
	const matches = children.match(linkRegex)
	if (!matches) return <>{children}</>
	const splitRegex = new RegExp(
		matches.map(s => s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|")
	)
	const results = Array.from(children.matchAll(linkRegex)).map(([whole, label, link]) => [
		whole,
		label,
		link,
	])

	return (
		<>
			{children.split(splitRegex).flatMap((str, i) => [
				str,
				results[i] ? (
					<Component
						as="a"
						href={results[i][2]}
						target={
							absolute
								? "_blank"
								: !/^(https|www)/.test(results[i][2])
								? ""
								: "_blank"
						}
						rel={!/^(https|www)/.test(results[i][2]) ? "" : "noopener noreferrer"}
						style={{ color }}
						key={i}
					>
						{results[i][1]}
					</Component>
				) : (
					""
				),
			])}
		</>
	)
}
