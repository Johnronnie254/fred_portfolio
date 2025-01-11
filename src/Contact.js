import React from 'react';
import { EnvelopeFill, TelephoneFill, GeoAltFill } from 'react-bootstrap-icons';
import { FaInstagram } from 'react-icons/fa';
import { FaVimeo, FaImdb } from 'react-icons/fa'; // Import Vimeo and IMDb icons

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
      <h1>Contact</h1>
      
      {/* Clickable Email */}
      <div style={iconTextStyle}>
        <EnvelopeFill size={20} />
        <a href="mailto:fredwarui@gmail.com" style={linkStyle}>
          <span>Email: fredwarui@gmail.com</span>
        </a>
      </div>

      {/* Clickable Phone */}
      <div style={iconTextStyle}>
        <TelephoneFill size={20} />
        <a href="tel:+254720062393" style={linkStyle}>
          <span>Phone: +254720062393</span>
        </a>
      </div>

      {/* Location */}
      <div style={iconTextStyle}>
        <GeoAltFill size={20} />
        <span>Location: Nairobi, Kenya</span>
      </div>

      {/* Social Media Icons */}
      <div style={socialIconsStyle}>
        
        <a
          href="https://www.instagram.com/warui_fred/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaInstagram />
        </a>

        {/* Vimeo and IMDb Icons */}
        <a
          href="https://vimeo.com/waruifred"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaVimeo />
        </a>
        <a
          href="https://www.imdb.com/name/nm9577816/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaImdb />
        </a>
      </div>
    </div>
  );
};

export default Contact;
