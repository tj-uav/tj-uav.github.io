import React from "react"
import styled from "styled-components"
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

const Header = () => {
	return (
		<StyledHeader>
			<h1 style={Heading}>TJUAV</h1>
			<LinksList>
				<li>
					<p style={Paragraph}>Competition</p>
				</li>
				<li>
					<p style={Paragraph}>Members</p>
				</li>
				<li>
					<p style={Paragraph}>Gallery</p>
				</li>
				<li>
					<Button>Sponsor</Button>
				</li>
			</LinksList>
		</StyledHeader>
	)
}

export default Header
