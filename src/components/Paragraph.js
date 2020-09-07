import React from "react"
import styled from "styled-components"

import { Paragraph as ParagraphStyles } from "theme/Styles"
import { red } from "theme/Colors"

const Paragraph = styled(styled.p(() => ParagraphStyles))`
	margin-bottom: 1rem;
`

const Link = styled(Paragraph)`
	color: ${red};
`

export default ({ children, ...props }) => {
	console.log(children)
	const match = /\[(?<label>[^)]+)\][(](?<link>[^)]+)[)]/.exec(children)
	const label = match?.groups?.label
	const link = match?.groups?.link

	const [before, after] = link && label ? children.split(`[${label}](${link})`) : []
	if (!(before && after)) return <Paragraph {...props}>{children}</Paragraph>

	return (
		<Paragraph {...props}>
			{before}
			<Link as="a" href={link} target="_blank" rel="noopener noreferrer">
				{label}
			</Link>
			{after}
		</Paragraph>
	)
}
