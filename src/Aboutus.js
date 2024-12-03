import React from 'react';
import IMG1 from './Profile.jpg';

const AboutUs = () => {
  const aboutStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    padding: '50px',
    gap: '20px', // Space between cards
  };

  const cardStyle = {
    backgroundColor: '#1c1c1c',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '400px',
    height: 'auto',
    padding: '20px',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  };

  const textStyle = {
    lineHeight: '1.6',
    fontSize: '16px',
  };

  return (
    <div style={aboutStyle}>
      {/* About Me Description Card */}
      <div style={cardStyle}>
        <h1>About Me</h1>
        <p style={textStyle}>
          Welcome to Waroyse Photography! With years of experience capturing life’s most precious moments, I bring a unique
          blend of passion, creativity, and technical expertise to photography, videography, and film editing. Let’s work
          together to create timeless memories that you’ll cherish forever.
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
