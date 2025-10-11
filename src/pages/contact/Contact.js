import React from "react"
import styled from "styled-components"
import CosmicBackground from "./components/CosmicBackground"
import ParticleBackground from "./components/ParticleBackground"

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`
const particleColors = ["#9d4edd", "#5e60ce", "#5390d9"]

export default function Contact() {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 24px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: 'transparent',
    color: 'white',
    position: 'relative',
    zIndex: 1
  };

  const headingStyle = {
    fontSize: '34px',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: 'white',
    position: 'relative',
    display: 'inline-block',
    paddingBottom: '12px'
  };

  const headingAfterStyle = {
    content: '""',
    position: 'absolute',
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #9d4edd, #5e60ce)',
    bottom: '0',
    left: '0'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '4px',
    color: 'white'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 16px',
    border: '1px solid rgba(157, 78, 221, 0.3)',
    borderRadius: '8px',
    fontSize: '16px',
    backgroundColor: 'rgba(26, 26, 46, 0.7)',
    color: 'white',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical'
  };

  const buttonStyle = {
    background: 'linear-gradient(135deg, #9d4edd, #5e60ce)',
    color: 'white',
    padding: '12px 16px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    width: '100%',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(157, 78, 221, 0.5)'
  };

  const infoBoxStyle = {
    background: 'linear-gradient(145deg, rgba(26, 26, 46, 0.8), rgba(15, 52, 96, 0.8))',
    borderRadius: '12px',
    padding: '28px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 30px rgba(157, 78, 221, 0.2)',  // Multi-layered shadow with purple glow
    border: '1px solid rgba(157, 78, 221, 0.2)'
  };

  const infoHeadingStyle = {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '20px',
    color: 'white',
    position: 'relative',
    display: 'inline-block',
    paddingBottom: '10px'
  };

  const infoHeadingAfterStyle = {
    content: '""',
    position: 'absolute',
    width: '60px',
    height: '3px',
    background: 'linear-gradient(90deg, #9d4edd, #5e60ce)',
    bottom: '0',
    left: '0'
  };

  const infoItemStyle = {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px'
  };

  const infoItemHeadingStyle = {
    fontWeight: '500',
    marginBottom: '4px',
    color: 'white'
  };

  const infoTextStyle = {
    color: '#A0AEC0'
  };

  const socialLinkStyle = {
    color: '#A0AEC0',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    transition: 'all 0.2s ease'
  };
  
  const socialLinkHoverStyle = {
    color: '#ffffff',
    textDecoration: 'underline'
  };

  const socialIconStyle = {
    marginRight: '10px'
  };

  const dividerStyle = {
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(157, 78, 221, 0.5), transparent)',
    margin: '28px 0'
  };

  return (
    <PageContainer>
      <CosmicBackground />
      <ParticleBackground colors={particleColors} />
      <div style={containerStyle}>
        <h1 style={headingStyle}>
          Contact Us
          <div style={headingAfterStyle}></div>
        </h1>
        
        <div style={gridStyle}>
          <div>
            <form action="https://formspree.io/f/mvgwwlnb" method="POST" style={formStyle}>
              <div style={inputGroupStyle}>
                <label htmlFor="name" style={labelStyle}>
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  style={inputStyle}
                />
              </div>

              <div style={inputGroupStyle}>
                <label htmlFor="email" style={labelStyle}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  style={inputStyle}
                />
              </div>

              <div style={inputGroupStyle}>
                <label htmlFor="message" style={labelStyle}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  style={textareaStyle}
                />
              </div>
              <button
                type="submit"
                style={buttonStyle}
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div style={infoBoxStyle}>
            <h2 style={infoHeadingStyle}>
              Get in Touch
              <div style={infoHeadingAfterStyle}></div>
            </h2>
            
            <div style={infoItemStyle}>
              <div style={{marginTop: '4px'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9d4edd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h3 style={infoItemHeadingStyle}>Email</h3>
                <p style={infoTextStyle}>tjhsstuav@gmail.com</p>
              </div>
            </div>
            
            <div style={infoItemStyle}>
              <div style={{marginTop: '4px'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9d4edd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 style={infoItemHeadingStyle}>Address</h3>
                <p style={infoTextStyle}>
                  6650 Braddock Rd<br />
                  Alexandria, VA 22312
                </p>
              </div>
            </div>
            
            <div style={dividerStyle}></div>
            
            <h3 style={{...infoItemHeadingStyle, fontSize: '18px', marginBottom: '16px', position: 'relative', display: 'inline-block', paddingBottom: '8px'}}>
              Connect With Us
              <div style={{...infoHeadingAfterStyle, width: '40px', height: '2px'}}></div>
            </h3>
            
            <div>
              <a 
                href="https://github.com/tj-uav" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={socialLinkStyle}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, socialLinkHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, socialLinkStyle)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9d4edd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={socialIconStyle}>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub: tj-uav
              </a>
              
              <a 
                href="https://www.instagram.com/tjuav/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={socialLinkStyle}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, socialLinkHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, socialLinkStyle)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9d4edd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={socialIconStyle}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram: @tjuav
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}