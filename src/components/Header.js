import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Button from "./Button"
import { darker } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"

const StyledHeader = styled.header`
	position: absolute;
	z-index: 1;
	left: 0;
	right: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 7.5625rem;
	padding-right: 7.5625rem;
	height: 5.375rem;
	background: ${darker};
`

const LinksList = styled.ul`
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
	<StyledHeader>
		<StyledLink to="/home" style={{ ...Heading, alignSelf: "initial" }}>
			TJUAV
		</StyledLink>

		<LinksList>
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
	</StyledHeader>
)

export default Header
