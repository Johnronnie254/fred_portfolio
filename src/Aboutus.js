import React from 'react';
import IMG1 from './Profile.jpg'

const AboutUs = () => {
  const aboutStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
    padding: '50px',
  };

  const cardStyle = {
    backgroundColor: '#1c1c1c',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
  };

  const textContainerStyle = {
    maxWidth: '50%',
    paddingRight: '20px',
    lineHeight: '1.6',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  return (
    <div style={aboutStyle}>
      {/* About Me Text Section */}
      <div style={textContainerStyle}>
        <h1>About Me</h1>
        <p>
          Welcome to Waroyse Photography! With years of experience capturing life's most precious moments, I bring passion,
          creativity, and technical expertise to every project I undertake. My services extend beyond traditional photography,
          encompassing film editing, videography, and bespoke services tailored to your unique needs.
        </p>
        <h3>Photography</h3>
        <p>
          Whether it’s weddings, portraits, or nature shots, I specialize in creating timeless photographs that tell a story.
          My approach is to capture the authentic emotions and beauty in every frame, delivering images that resonate deeply
          with my clients.
        </p>
        <h3>Film Editing</h3>
        <p>
          As a skilled film editor, I bring raw footage to life. I meticulously edit films to craft compelling narratives that
          align with the vision of my clients. From short films to corporate videos, I ensure the final product is polished and
          impactful.
        </p>
        <h3>Videography</h3>
        <p>
          With a keen eye for detail, I capture cinematic moments that immerse viewers in the story. My videography services
          include event coverage, promotional videos, and creative projects designed to leave a lasting impression.
        </p>
        <h3>Services Offered</h3>
        <ul>
          <li>Event Photography</li>
          <li>Wedding Videography</li>
          <li>Film Editing for Short Films</li>
          <li>Documentaries</li>
          <li>Corporate Branding Videos</li>
          <li>Creative Portraits</li>
        </ul>
        <p>
          At Waroyse Photography, my mission is to provide exceptional visual storytelling that captures the essence of every
          moment. Let’s work together to create memories that will last a lifetime.
        </p>
      </div>

      {/* Image Card Section */}
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
