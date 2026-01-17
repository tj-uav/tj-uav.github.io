import React from "react"
import styled from "styled-components"
import Grid from "components/Grid"
import { darker } from "theme/Colors"
import { Paragraph } from "theme/Styles"
import { mobile, tablet, desktop } from "theme/Breakpoints"

// Footer container with similar styling to header
const Container = styled(Grid)`
  --columns: repeat(12, 1fr);
  --rows: unset;
  grid-template-areas:
    ".       content content content content content content content content content content .       ";
  background: rgba(10, 15, 30, 0.92);
  align-items: center;
  height: 5.375rem;
  width: 100%;
  bottom: 0;
  
  ${mobile} {
    height: auto;
    padding: 1.5rem 0;
  }
`

const FooterContent = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
  text-shadow: 0 0 10px rgba(13, 110, 253, 0.3);
  letter-spacing: 0.02em;
  
  ${tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Copyright = styled.p`
  margin: 0;
  line-height: 1.6;
  
  ${mobile} {
    margin-bottom: 0.5rem;
  }
  
  ${tablet} {
    margin-bottom: 0;
  }
`

const Contributors = styled.p`
  margin: 0;
  line-height: 1.6;
  
  ${mobile} {
    font-size: 0.9rem;
  }
`

const Highlight = styled.span`
  color: #ffffff;
  font-weight: 500;
  text-shadow: 0 0 10px rgba(13, 110, 253, 0.6);
`

const Footer = () => (
  <Container as="footer">
    <FooterContent>
      <Copyright style={Paragraph}>
        Copyright &copy; <Highlight>TJUAV</Highlight> 2026
      </Copyright>
      <Contributors style={Paragraph}>
        Contributors: Ritwik Sinha '26, Aarya Srikanth '26, William Black '25, Nicolas Makovnik '23, Jason Klein '22
      </Contributors>
    </FooterContent>
  </Container>
)

export default Footer