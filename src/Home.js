import React from "react";
import "./Home.css"; // Import CSS for Home

import AboutUs from './Aboutus';
import Contact from "./Contact";
import IMG from "./Prof.jpg"; // Import the image

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar will be rendered globally */}
      <div className="home-content">
        <div className="welcome-section"></div>

        <div className="profile-image-holder">
          {/* Apply the imported image as the background */}
          <div
            className="profile-image"
            style={{ backgroundImage: `url(${IMG})` }}
          ></div>
        </div>

        <div className="centered-text">
          <span className="service cinematography">Cinematography</span>
          <span className="separator">●</span>
          <span className="service editing">Editing</span>
          <span className="separator">●</span>
          <span className="service focus-pooling">Focus Pooling</span>
          <span className="separator">●</span>
          <span className="service directing">Directing</span>
        </div>

        <div className="portfolio-summary">
          <p>
            "Capturing stories with precision and artistry." From behind the
            lens to post-production, bringing visions to life.
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
