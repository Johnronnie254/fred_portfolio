import React from 'react';
import IMG1 from './Profile.jpg';

const AboutUs = () => {
  const aboutStyle = {
    display: 'flex',
    justifyContent: 'center', // Center cards horizontally
    alignItems: 'center', // Center cards vertically
    backgroundColor: 'black',
    color: 'white',
    minHeight: '50vh', // Set height to half the screen size
    padding: '20px',
    gap: '20px', // Add spacing between cards
    flexWrap: 'wrap', // Allow wrapping for smaller screens
  };

  const cardStyle = {
    backgroundColor: '#1c1c1c',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px', // Set a fixed width for uniformity
    margin: '10px',
    textAlign: 'center', // Center text content
  };

  const imageStyle = {
    width: '100%',
    height: '100%', // Ensure the image fills the height of the card
    objectFit: 'cover', // Maintain the aspect ratio of the image
    borderRadius: '10px 10px 0 0', // Rounded corners for the top of the image
  };

  const textCardStyle = {
    ...cardStyle,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Vertically center the text in the card
    height: '300px', // Set fixed height for both text and image cards
  };

  const mediaQueryStyle = `
    @media (max-width: 768px) {
      .about-container {
        flexDirection: column; /* Stack the cards on smaller screens */
        alignItems: center;
        minHeight: auto; /* Adjust height for smaller screens */
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
