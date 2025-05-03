import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import { Link, useNavigate } from "react-router-dom" 
import Grid from "./Grid"
import { dark, darker, text } from "theme/Colors"
import { Heading, Paragraph } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"
import Button from "./Button"

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`

const pulse = keyframes`
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.3;
  }
`

const Container = styled(Grid)`
  --rows: unset;
  background: rgba(10, 15, 30, 0.92);
  align-items: center;
  position: absolute;
  height: ${props => props.height || "60px"};
  z-index: 10;
  right: 0;
  left: 0;
  top: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(13, 110, 253, 0.2);
  border-radius: 0 0 12px 12px;

  ${mobile} {
    --rows: 100% auto;
    --columns: 1rem repeat(10, 1fr) 1rem;
    gap: 0;

    grid-template-areas:
      ".       logo    logo    .       .       .       .       .       .       .       burger  .       "
      "content content content content content content content content content content content content ";
  }

  ${tablet} {
    --columns: 0 repeat(8, 1fr) 0;
    column-gap: 1rem;

    grid-template-areas:
      ".        .       logo    logo    .       .       .       burger  .       .      "
      "content  content content content content content content content content content";
  }

  ${desktop} {
    --columns: repeat(12, 1fr);
    
    grid-template-areas:
      ".       logo    logo    content content content content content content content content .       ";
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    min-width: 100%;
    overflow-x: visible;
  }
`

const LinksList = ({ hook, ...props }) => {
  const [active] = hook
  return <StyledLinksList active={active} {...props} />
}

const StyledLinksList = styled.ul`
  display: ${props => (props.active ? "initial" : "none")};
  justify-self: flex-end;
  list-style-type: none;
  width: 100%;
  background: rgba(15, 20, 35, 0.95);
  padding: 0;
  margin: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(13, 110, 253, 0.2);
  border-top: none;
  z-index: 5;

  ${desktop} {
    width: initial;
    background: transparent;
    display: flex;
    border: none;
    box-shadow: none;
    margin-right: 200px; /* Make room for search bar */
    font-size: 0.9rem;

    li {
      &:not(:first-of-type) {
        margin-left: 0.6rem;
      }
      &:not(:last-of-type) {
        margin-right: 0.6rem;
      }
    }
  }
`

const LinkItem = styled.li.attrs(props => ({
  children: props.children,
  onClick: () => {
    props.hook[1](false)
  },
}))`
  justify-content: center;
  margin: 1rem auto;
  display: flex;
  position: relative;
  
  &:hover::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    height: 2px;
    background: linear-gradient(90deg, rgba(13, 110, 253, 0.2), rgba(13, 110, 253, 0.8), rgba(13, 110, 253, 0.2));
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(13, 110, 253, 0.3);
  letter-spacing: 0.02em;
  font-size: 0.9rem;

  &:hover {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 0 15px rgba(13, 110, 253, 0.6);
    transform: translateY(-2px);
  }
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 0.05em;
  font-size: 1.2rem;
  text-shadow: 0 0 10px rgba(13, 110, 253, 0.6), 0 0 20px rgba(13, 110, 253, 0.4);
  transition: all 0.3s ease;
  
  &:hover {
    text-shadow: 0 0 15px rgba(13, 110, 253, 0.8), 0 0 30px rgba(13, 110, 253, 0.6);
  }
`

const StyledExternalLink = (props) => {
  return (
    <RawLinkObject href={props.to} target="blank" style={Paragraph}>
      {props.children}
    </RawLinkObject>
  )
}

const RawLinkObject = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(13, 110, 253, 0.3);
  letter-spacing: 0.02em;
  font-size: 0.9rem;

  &:hover {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 0 15px rgba(13, 110, 253, 0.6);
    transform: translateY(-2px);
  }
`

const StyledBurger = styled.div`
  grid-template-rows: repeat(3, 3px);
  grid-area: burger;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  display: grid;
  row-gap: 5px;
  z-index: 20;

  ${tablet} {
    justify-self: flex-end;
  }
  ${desktop} {
    display: none;
  }
`

const Burger = ({ hook, ...props }) => {
  const [active, setActive] = hook

  return (
    <StyledBurger
      {...props}
      onClick={() => {
        setActive(!active)
      }}
    >
      <InnerBurger className="top" location="top" active={active} />
      <InnerBurger className="center" location="center" active={active} />
      <InnerBurger className="bottom" location="bottom" active={active} />
    </StyledBurger>
  )
}

const InnerBurger = styled.div`
  ${props => {
    if (props.active) {
      switch (props.location) {
        case "center":
          return "transform: scaleX(0);"
        case "top":
          return "transform: translateY(8px) rotate(45deg);"
        case "bottom":
          return "transform: translateY(-8px) rotate(-45deg);"
        default:
          return ""
      }
    }
  }}

  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(13, 110, 253, 0.9), rgba(23, 92, 204, 0.9));
  box-shadow: 0 0 5px rgba(13, 110, 253, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-origin: center;
`

const SearchForm = styled.form`
  grid-area: content;
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  max-width: 180px;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  
  ${desktop} {
    position: absolute;
    right: 1rem;
    transform: translateY(-50%);
    margin-left: auto;
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
    max-width: 100%;
    padding: 0 1rem;
    position: relative;
    right: 0;
    transform: none;
  }
`

const SearchInput = styled.input`
  padding: 0.3rem 0.5rem;
  border-radius: 20px 0 0 20px;
  border: 1px solid rgba(13, 110, 253, 0.4);
  border-right: none;
  background: rgba(15, 20, 35, 0.6);
  color: white;
  outline: none;
  width: 120px;
  font-size: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  
  &:focus {
    background: rgba(15, 20, 35, 0.8);
    border-color: rgba(13, 110, 253, 0.6);
    box-shadow: 0 0 10px rgba(13, 110, 253, 0.3), inset 0 0 5px rgba(0, 0, 0, 0.3);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const SearchButton = styled.button`
  padding: 0.3rem 0.5rem;
  border-radius: 0 20px 20px 0;
  background: linear-gradient(90deg, rgba(13, 110, 253, 0.8), rgba(23, 92, 204, 0.8));
  color: white;
  border: 1px solid rgba(13, 110, 253, 0.4);
  cursor: pointer;
  font-weight: 500;
  font-size: 0.75rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(90deg, rgba(13, 110, 253, 1), rgba(23, 92, 204, 1));
    box-shadow: 0 0 10px rgba(13, 110, 253, 0.5);
  }
`

const EnhancedButton = styled(Button)`
  background: linear-gradient(90deg, rgba(220, 53, 69, 0.9), rgba(178, 34, 52, 0.9));
  border: 1px solid rgba(220, 53, 69, 0.4);
  box-shadow: 0 0 10px rgba(220, 53, 69, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(220, 53, 69, 0.5);
    background: linear-gradient(90deg, rgba(220, 53, 69, 1), rgba(178, 34, 52, 1));
  }
`

const Header = (props) => {
  const [active, setActive] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
  }

  return (
    <Container active={active} as="header" height={props.headerHeight}>
      <LogoLink to="/" style={{ ...Heading, alignSelf: "initial", gridArea: "logo" }}>
        TJUAV
      </LogoLink>

      <Burger hook={[active, setActive]} />

      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton type="submit">
          Search
        </SearchButton>
      </SearchForm>

      <LinksList hook={[active, setActive]} style={{ gridArea: "content" }}>
        <LinkItem hook={[active, setActive]}>
          <StyledLink to="/" style={Paragraph}>
            Home
          </StyledLink>
        </LinkItem>
        <LinkItem hook={[active, setActive]}>
          <StyledLink to="/members" style={Paragraph}>
            Members
          </StyledLink>
        </LinkItem> 
        <LinkItem hook={[active, setActive]}>
          <StyledLink to="/subteams" style={Paragraph}>
            Subteams
          </StyledLink>
        </LinkItem>
        <LinkItem hook={[active, setActive]}>
          <StyledLink to="/contact" style={Paragraph}>
            Contact
          </StyledLink>
        </LinkItem>
        <LinkItem hook={[active, setActive]}>
          <StyledExternalLink to="https://tjuav.gitbook.io/tjuav/">
            Documentation
          </StyledExternalLink>
        </LinkItem>
        <LinkItem hook={[active, setActive]}>
          <StyledLink to="/blogs" style={Paragraph}>
            Blogs
          </StyledLink>
        </LinkItem>
        <LinkItem hook={[active, setActive]}>
          <EnhancedButton href="/sponsorship-packet.pdf" target="blank">Sponsorship Info</EnhancedButton>
        </LinkItem>
      </LinksList> 
    </Container>
  )
}

export default Header