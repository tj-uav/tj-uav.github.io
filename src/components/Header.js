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

const Container = styled.header`
  background: rgba(10, 15, 30, 0.92);
  height: ${props => props.height || "60px"};
  z-index: 10;
  right: 0;
  left: 0;
  top: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(13, 110, 253, 0.2);
  border-radius: 0 0 12px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: absolute;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 0.5rem 1rem;
  }
`

const LogoContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  margin-right: 1rem;
`

const SearchContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 0 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0.5rem 0;
    order: 2;
  }
`

const RightContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    order: 1;
  }
`

const LinksList = ({ hook, ...props }) => {
  const [active] = hook
  return <StyledLinksList active={active} {...props} />
}

const StyledLinksList = styled.ul`
  display: ${props => (props.active ? "flex" : "none")};
  flex-direction: column;
  list-style-type: none;
  width: 100%;
  background: rgba(15, 20, 35, 0.95);
  padding: 1rem;
  margin: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(13, 110, 253, 0.2);
  border-top: none;
  z-index: 5;
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;

  ${desktop} {
    position: absolute;
    top: 100%;
    right: 0;
    width: 250px;
    left: auto;
  }
`

const LinkItem = styled.li.attrs(props => ({
  children: props.children,
  onClick: () => {
    props.hook[1](false)
  },
}))`
  justify-content: center;
  margin: 0.75rem auto;
  display: flex;
  position: relative;
  width: 100%;
  
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
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  display: grid;
  row-gap: 5px;
  margin-left: 0.5rem;
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
  display: flex;
  align-items: center;
  width: 100%;
`

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 20px 0 0 20px;
  border: 1px solid rgba(13, 110, 253, 0.4);
  border-right: none;
  background: rgba(15, 20, 35, 0.6);
  color: white;
  outline: none;
  width: 100%;
  font-size: 0.85rem;
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
  padding: 0.5rem 1rem;
  border-radius: 0 20px 20px 0;
  background: linear-gradient(90deg, rgba(13, 110, 253, 0.8), rgba(23, 92, 204, 0.8));
  color: white;
  border: 1px solid rgba(13, 110, 253, 0.4);
  cursor: pointer;
  font-weight: 500;
  font-size: 0.85rem;
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
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(220, 53, 69, 0.5);
    background: linear-gradient(90deg, rgba(220, 53, 69, 1), rgba(178, 34, 52, 1));
  }

  @media (max-width: 992px) {
    display: none;
  }
`

const MobileEnhancedButton = styled(EnhancedButton)`
  display: none;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    display: flex;
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
    <Container height={props.headerHeight}>
      <LogoContainer>
        <LogoLink to="/" style={Heading}>
          TJUAV
        </LogoLink>
      </LogoContainer>

      <SearchContainer>
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
      </SearchContainer>

      <RightContainer>
        <EnhancedButton href="/tjuav-sponsorship-packet(25-26).pdf" target="blank">
          Sponsorship Info
        </EnhancedButton>
        <Burger hook={[active, setActive]} />
      </RightContainer>

      <LinksList hook={[active, setActive]}>
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
          <MobileEnhancedButton href="/sponsorship-packet.pdf" target="blank">
            Sponsorship Info
          </MobileEnhancedButton>
        </LinkItem>
      </LinksList> 
    </Container>
  )
}

export default Header