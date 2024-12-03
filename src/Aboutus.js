import React from 'react';
import IMG1 from './Profile.jpg';

const AboutUs = () => {
  const aboutStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    padding: '50px',
    flexWrap: 'wrap', // Allows wrapping for smaller screens
  };

  const cardStyle = {
    backgroundColor: '#1c1c1c',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px',
    margin: '10px',
  };

  const textCardStyle = {
    ...cardStyle,
    textAlign: 'left',
    padding: '20px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  const mediaQueryStyle = `
    @media (max-width: 768px) {
      .about-container {
        flexDirection: column; /* Stack the cards on mobile */
        alignItems: center;
      }
    }
  `;

  return (
    <div style={aboutStyle} className="about-container">
      <style>{mediaQueryStyle}</style>
      {/* Description Card */}
      <div style={textCardStyle}>
        <h1>About Me</h1>
        <p>
          Welcome to Waroyse Photography! With years of experience capturing life's most precious moments, I bring passion,
          creativity, and technical expertise to every project I undertake. My services extend beyond traditional photography,
          encompassing film editing, videography, and bespoke services tailored to your unique needs.
        </p>
      </div>

      {/* Image Card */}
      <div style={cardStyle}>
        <img
          src={IMG1}
          alt="Waroyse Photography"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default AboutUs;
