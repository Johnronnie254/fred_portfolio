import React from 'react';
import './About.css'; // Import the updated CSS

const AboutUs = () => {
  return (
    <div>
      {/* About Section */}
      <div className="about-container">
        {/* Left Column with Image */}
        <div className="about-image">
          <img src={require('./Prof.jpg')} alt="Fredrick Warui" />
        </div>

        {/* Right Column with Text */}
        <div className="about-text">
          <h1>Get To Know Me</h1>
          <p>
            Fredrick Warui is a passionate filmmaker, experienced in cinematography, directing, and focus pulling.
            With a deep love for storytelling, Fredrick's journey in the film industry has seen him excel as a 1st Assistant Camera (1st AC), ensuring precision and focus on countless sets.
            He has had the privilege of working alongside directors and Directors of Photography (DPs) from around the world.
            <br /><br />
            As a skilled Director of Photography (DP), Fredrick continues to hone his craft in color grading and lighting.
            He combines artistry and precision to create memorable visual narratives.
          </p>
          
          {/* Key Achievements or Fun Facts */}
          <div className="achievements">
            <div className="achievement">
              <h3>10+ Years of Experience</h3>
            </div>
            <div className="achievement">
              <h3>Worked with Top Directors</h3>
            </div>
            <div className="achievement">
              <h3>Expert in Cinematography & Focus Pulling</h3>
            </div>
          </div>

          {/* Call to Action */}
          <a href="#portfolio" className="cta-btn">Explore My Work</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
