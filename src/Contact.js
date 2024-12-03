import React from 'react';
import { EnvelopeFill, TelephoneFill, GeoAltFill } from 'react-bootstrap-icons';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '50vh', // Set to half the screen height
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
  };

  const iconTextStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '18px',
    margin: '10px 0',
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
    fontSize: '30px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <h1>Contact Us</h1>
      <div style={iconTextStyle}>
        <EnvelopeFill size={20} />
        <span>Email: fredwarui@gmail.com</span>
      </div>
      <div style={iconTextStyle}>
        <TelephoneFill size={20} />
        <span>Phone: +254720062393</span>
      </div>
      <div style={iconTextStyle}>
        <GeoAltFill size={20} />
        <span>Location: Nairobi, Kenya</span>
      </div>
      <div style={socialIconsStyle}>
        <a
          href="https://twitter.com/yourtwitterhandle"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com/yourinstagramhandle"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Contact;
