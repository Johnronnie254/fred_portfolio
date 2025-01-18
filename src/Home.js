import React from "react";
import "./Home.css"; // Import CSS for Home

import AboutUs from './Aboutus';
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar will be rendered globally */}
      <div className="home-content">
        <div className="welcome-section">
          <h3>Fred Warui</h3>
        </div>

        <div className="profile-image-holder">
          <div className="profile-image"></div>
        </div>

        <div className="centered-text">
          <span>Cinematography</span>
          <span>●</span>
          <span>Editing</span>
          <span>●</span>
          <span>Focus Pooling</span>
          <span>●</span>
          <span>Directing</span>
        </div>

        <div className="portfolio-summary">
          <p>
            "Capturing stories with precision and artistry."
            From behind the lens to post-production, bringing visions to life.
          </p>
        </div>
      </div>

      <AboutUs />

      {/* Contact Component */}
      <Contact />
    </div>
  );
};

export default Home;
