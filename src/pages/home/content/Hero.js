import React from "react"
import styled from "styled-components"

import { Subheading } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"
import { darker } from "theme/Colors"

import Parser from "components/Parser"
import Image from "components/Image"
import Grid from "components/Grid"

import Img1 from "../assets/img1.jpeg"
import Logo from "../assets/logo.svg"

const Container = styled(Grid)`
	background-color: ${darker};

	${mobile} {
		--rows: repeat(13, 2.1875rem) auto;
		--columns: 1fr;

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

	${tablet} {
		--columns: repeat(8, 1fr);

		/* prettier-ignore */
		grid-template-areas:
			" .      .      .      .      .      .      .      .      "
			" .      .      .      .      .      .      .      .      "
			" .      .      .      .      .      .      .      .      "
			" .      logo   logo   logo   logo   logo   logo   .      "
			" .      logo   logo   logo   logo   logo   logo   .      "
			" .      .      .      .      .      .      .      .      "
			" .      .      .      .      .      .      .      .      "
			" .      image  image  image  image  image  image  .      "
			" .      image  image  image  image  image  image  .      "
			" .      image  image  image  image  image  image  .      "
			" .      image  image  image  image  image  image  .      "
			" .      image  image  image  image  image  image  .      "
			" .      .      .      .      .      .      .      .      "
			" .      text   text   text   text   text   text   .      ";
	}

	${desktop} {
		--rows: repeat(18, 1fr);
		--columns: repeat(12, 1fr);

		height: 100vh;
		padding: unset;

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
		".     .     .     .     .     .     .     image image image image .     "
		".     text  text  text  text  text  .     image image image image .     "
		".     text  text  text  text  text  .     image image image image .     "
		".     text  text  text  text  text  .     image image image image .     "
		".     text  text  text  text  text	 .     .     .     .     .     .     "
		".     .     .     .     .     .     .     .     .     .     .     .     "
		".     .     .     .     .     .     .     .     .     .     .     .     "
		".     .     .     .     .     .     .     .     .     .     .     .     "
		".     .     .     .     .     .     .     .     .     .     .     .     ";
	}
`

const logoProps = {
	src: Logo,
	alt: "TJUAV Logo",
}

const StyledImage = styled(Image)`
	grid-area: logo;
	margin: 0 auto;
	${mobile} {
		max-width: 80vw;
	}

	${tablet} {
		max-width: 70vw;
	}

	${desktop} {
		max-width: 40vw;
	}
`

const heroProps = {
	src: Img1,
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
		<StyledImage {...logoProps} />
		<StyledSubheading>
			<Parser Component={StyledSubheading}>{content.description}</Parser>
		</StyledSubheading>
		<HeroContainer>
			<Image {...heroProps} />
		</HeroContainer>
	</Container>
)

export default Hero
