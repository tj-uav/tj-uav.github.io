import React from "react"
import { red } from "theme/Colors"

export default ({ Component, children, ...props }) => {
	// let relative = false

	const linkRegex = /\[([^)]+)\]\(([^)]+)\)/g
	const matches = children.match(linkRegex)
	if (!matches) return <Component {...props}>{children}</Component>
	const splitRegex = new RegExp(
		matches.map(s => s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|")
	)
	const results = Array.from(children.matchAll(linkRegex)).map(([whole, label, link]) => [
		whole,
		label,
		link,
	])

	return (
		<Component {...props}>
			{children.split(splitRegex).flatMap((str, i) => [
				str,
				results[i] ? (
					<Component
						as="a"
						href={results[i][2]}
						target={!/^(https|www)/.test(results[i][2]) ? "" : "_blank"}
						rel={!/^(https|www)/.test(results[i][2]) ? "" : "noopener noreferrer"}
						style={{ color: red }}
						key={i}
					>
						{results[i][1]}
					</Component>
				) : (
					""
				),
			])}
		</Component>
	)
}
