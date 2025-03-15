import styled from "styled-components"
import { MapPin, Phone, Mail, Clock } from "./Icons"
import { Paragraph } from "theme/Styles"
import { dark } from "theme/Colors"

const Container = styled.div`
  background-color: ${dark};
  border-radius: 8px;
  padding: 2rem;
  height: 65%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #fff;
`

const InfoItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`

const InfoLabel = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: #fff;
`

const InfoText = styled.p`
  ${Paragraph};
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`

const ContactInfo = () => {
  return (
    <Container>
      <div>
        <Title>Contact Information</Title>

        <InfoItem>
          <IconWrapper>
            <MapPin size={20} />
          </IconWrapper>
          <InfoContent>
            <InfoLabel>Our Location</InfoLabel>
            <InfoText>TJHSST - 6560 Braddock Rd, Alexandria, VA 22312</InfoText>
          </InfoContent>
        </InfoItem>

        <InfoItem>
          <IconWrapper>
            <Mail size={20} />
          </IconWrapper>
          <InfoContent>
            <InfoLabel>Email Address</InfoLabel>
            <InfoText>tjhsstuav@gmail.com</InfoText>
          </InfoContent>
        </InfoItem>
      </div>

      <SocialLinks>
        <SocialLink href="#" aria-label="Twitter">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
          </svg>
        </SocialLink>
        <SocialLink href="#" aria-label="LinkedIn">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </SocialLink>
        <SocialLink href="#" aria-label="Instagram">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </SocialLink>
        <SocialLink href="#" aria-label="GitHub">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </SocialLink>
      </SocialLinks>
    </Container>
  )
}

export default ContactInfo

