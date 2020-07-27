import React from "react"
import styled from "styled-components"
import Image from "components/Image"
import Grid from "components/Grid"
import { Subheading, Breakpoints } from "theme/Styles"
import { darker } from "theme/Colors"

const Container = styled(Grid)`
	background-color: ${darker};

	${Breakpoints.small} {
		--rows: repeat(13, 2.1875rem) auto;
		--columns: unset;

		height: initial;
		padding: 0 1rem;

		/* prettier-ignore */
		grid-template-areas:
			" .     "
			" .     "
			" .     "
			" logo  "
			" logo  "
			" .     "
			" .     "
			" image "
			" image "
			" image "
			" image "
			" image "
			" .     "
			" text  ";
	}

	${Breakpoints.desktop} {
		--rows: repeat(18, 1fr);

		/* prettier-ignore */
		grid-template-areas: 
		".     .     .     .     .     .     .     .     .     .     .     .     "
		".     .     .     .     .     .     .     .     .     .     .     .     "
		".     .     .     .     .     .     .     .     .     .     .     .     "
		".     .     .     .     .     .     .     .     .     .     .     .     "
		".     .     .     .     .     .     .     .     .     .     .     .     "
		".     logo  logo  logo  logo  logo  .     image image image image .     "
		".     logo  logo  logo  logo  logo  .     image image image image .     "
		".     logo  logo  logo  logo  logo  .     image image image image .     "
		".     .     .     .     .     .     .     image image image image .     "
		".     text  text  text  text  text  .     image image image image .     "
		".     text  text  text  text  text  .     image image image image .     "
		".     text  text  text  text  text  .     image image image image .     "
		".     text  text  text  text  text  .     image image image image .     "
		".     .     .     .     .     .     .     .     .     .     .     .     "
		".     .     .     .     .     .     .     .     .     .     .     .     "
		".     .     .     .     .     .     .     .     .     .     .     .     "
		".     .     .     .     .     .     .     .     .     .     .     .     "
		".     .     .     .     .     .     .     .     .     .     .     .     ";
	}
`

const logoProps = {
	src: require("pages/home/assets/logo.svg"),
	style: { gridArea: "logo" },
	alt: "TJUAV Logo",
}

const heroProps = {
	src: require("pages/home/assets/img1.jpeg"),
	style: { width: "100%", height: "100%", objectFit: "cover" },
	alt: "The team",
	border: true,
}

const ThemedSubheading = styled.h2(() => Subheading)
const StyledSubheading = styled(ThemedSubheading)`
	align-self: flex-end;
	grid-area: text;
`

const HeroContainer = styled.div`
	grid-area: image;
`

const Hero = ({ content, ...props }) => (
	<Container {...props}>
		<Image {...logoProps} />
		<StyledSubheading>{content.description}</StyledSubheading>
		<HeroContainer>
			<Image {...heroProps} />
		</HeroContainer>
	</Container>
)

export default Hero
