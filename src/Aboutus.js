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
    height: '400px', // Set a fixed height for both cards to match
    margin: '10px',
    textAlign: 'center', // Center text content
  };

  const imageStyle = {
    width: '100%',
    height: '60%', // Ensure the image fills a portion of the card, leaving space for text
    objectFit: 'cover', // Maintain the aspect ratio of the image
    borderRadius: '10px 10px 0 0', // Rounded corners for the top of the image
  };

  const textCardStyle = {
    ...cardStyle,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Vertically center the text in the card
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
         About Fredrick Warui

Fredrick Warui is a passionate filmmaker, experienced in the art of cinematography, directing, and focus pulling. With a deep love for storytelling, Fredrick's journey in the film industry has seen him excel as a 1st Assistant Camera (1st AC), ensuring precision and focus on countless sets. He has had the privilege of working alongside directors and Directors of Photography (DPs) from around the world, gaining invaluable experience and a global perspective on filmmaking.  

As a skilled Director of Photography (DP), Fredrick continues to hone his craft in color grading and lighting, aiming to bring stories to life with visual excellence. Beyond the technical lens, he thrives as a director, having worked on impactful commercials, short films, and creative projects that resonate with audiences.  

Driven by a vision to inspire through film, Fredrick combines artistry and precision to create memorable visual narratives. Whether it's behind the camera or guiding a story as a director, his focus remains on excellence, innovation, and delivering stories that matter.  

Feel free to reach out.
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
