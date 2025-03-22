export default function Contact() {
	const containerStyle = {
	  maxWidth: '1200px',
	  margin: '0 auto',
	  padding: '48px 16px',
	  fontFamily: 'system-ui, -apple-system, sans-serif',
	  backgroundColor: '#1D242A',
	  color: 'white'
	};
  
	const headingStyle = {
	  fontSize: '30px',
	  fontWeight: 'bold',
	  marginBottom: '32px',
	  color: 'white'
	};
  
	const gridStyle = {
	  display: 'grid',
	  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
	  gap: '32px'
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
	  border: '1px solid #2D343A',
	  borderRadius: '4px',
	  fontSize: '16px',
	  backgroundColor: '#1D242A',
	  color: 'white'
	};
  
	const textareaStyle = {
	  ...inputStyle,
	  minHeight: '120px',
	  resize: 'vertical'
	};
  
	const buttonStyle = {
	  backgroundColor: '#2563eb',
	  color: 'white',
	  padding: '10px 16px',
	  border: 'none',
	  borderRadius: '4px',
	  fontSize: '16px',
	  fontWeight: '500',
	  cursor: 'pointer',
	  width: '100%'
	};
  
	const infoBoxStyle = {
	  backgroundColor: '#1D242A',
	  borderRadius: '8px',
	  padding: '24px',
	  boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
	  border: '1px solid #2D343A'
	};
  
	const infoHeadingStyle = {
	  fontSize: '22px',
	  fontWeight: '600',
	  marginBottom: '16px',
	  color: 'white'
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
	  transition: 'color 0.2s ease'
	};
  
	const socialIconStyle = {
	  marginRight: '10px'
	};
  
	const dividerStyle = {
	  height: '1px',
	  backgroundColor: '#2D343A',
	  margin: '24px 0'
	};
  
	return (
	  <div style={containerStyle}>
		<h1 style={headingStyle}>Contact Us</h1>
		
		<div style={gridStyle}>
		  <div>
			{/* Form section */}
			<form action="https://formspree.io/f/xwploplr" method="POST" style={formStyle}>
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
  
			  {/* This hidden field will forward emails to alexlenlakers@gmail.com */}
			  <input type="hidden" name="_replyto" value="alexlenlakers@gmail.com" />
  
			  {/* This ensures emails are sent to your specified address */}
			  <input type="hidden" name="_cc" value="alexlenlakers@gmail.com" />
  
			  <button
				type="submit"
				style={buttonStyle}
			  >
				Send Message
			  </button>
			</form>
		  </div>
		  
		  <div style={infoBoxStyle}>
			<h2 style={infoHeadingStyle}>Get in Touch</h2>
			
			<div style={infoItemStyle}>
			  <div style={{marginTop: '4px'}}>
				{/* Email icon */}
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
				{/* Location icon */}
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
			
			<h3 style={{...infoItemHeadingStyle, fontSize: '18px', marginBottom: '12px'}}>Connect With Us</h3>
			
			<div>
			  <a href="https://github.com/tj-uav" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={socialIconStyle}>
				  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
				</svg>
				GitHub: tj-uav
			  </a>
			  
			  <a href="https://www.instagram.com/tjuav/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={socialIconStyle}>
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
	);
  }