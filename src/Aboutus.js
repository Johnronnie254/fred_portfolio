import React from 'react';
import './About.css'; // Import the updated CSS

const AboutUs = () => {
  return (
    <div>
      {/* About Section */}
      <div className="about-container">
        {/* Text Card */}
        <div className="text-card">
          <h1>Get To Know Me</h1>
          <p>
            Fredrick Warui is a passionate filmmaker, experienced in the art of cinematography,
            directing, and focus pulling. With a deep love for storytelling, Fredrick's journey in
            the film industry has seen him excel as a 1st Assistant Camera (1st AC), ensuring precision
            and focus on countless sets. He has had the privilege of working alongside directors and
            Directors of Photography (DPs) from around the world.
            <br /><br />
            As a skilled Director of Photography (DP), Fredrick continues to hone his craft in color
            grading and lighting. He combines artistry and precision to create memorable visual
            narratives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
