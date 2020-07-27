import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Button from "./Button"
import Grid from "./Grid"
import { darker } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"

const HeaderGrid = Grid.withComponent("header")

// prettier-ignore
const Container = styled(HeaderGrid)`
	--rows: unset;
	grid-template-areas: 
        ".        logo    logo    content content content content content content content content .       ";

	background: ${darker};
    align-items: center;
    position: absolute;
    height: 5.375rem;
	z-index: 1;
	right: 0;
	left: 0;
	top: 0;
`

const LinksList = styled.ul`
	justify-self: flex-end;
	list-style-type: none;
	display: flex;

	li {
		&:not(:first-of-type) {
			margin-left: 1rem;
		}

		&:not(:last-of-type) {
			margin-right: 1rem;
		}
	}
`

const StyledLink = styled(Link)`
	text-decoration: none;
	:hover {
		text-decoration: underline;
	}
`

const Header = () => (
	<Container>
		<StyledLink to="/home" style={{ ...Heading, alignSelf: "initial", gridArea: "logo" }}>
			TJUAV
		</StyledLink>

		<LinksList style={{ gridArea: "content" }}>
			<li>
				<StyledLink to="/competition" style={Paragraph}>
					Competition
				</StyledLink>
			</li>
			<li>
				<StyledLink to="/members" style={Paragraph}>
					Members
				</StyledLink>
			</li>
			<li>
				<StyledLink to="/gallery" style={Paragraph}>
					Gallery
				</StyledLink>
			</li>
			<li>
				<Button href="/home#sponsor">Sponsor</Button>
			</li>
		</LinksList>
	</Container>
)

export default Header
