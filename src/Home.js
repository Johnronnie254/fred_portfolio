import React from "react";
import "./Home.css"; // Import CSS for Home

import AboutUs from "./Aboutus";
import Contact from "./Contact";
import IMG from "./Prof.jpg"; // Profile image
import Carousel from "./Carousel"; // Import the Carousel component

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar will be rendered globally */}
      <div className="home-content">
        <div className="welcome-section"></div>

        <div className="profile-image-holder">
          <div
            className="profile-image"
            style={{ backgroundImage: `url(${IMG})` }}
          ></div>
        </div>

        {/* Portfolio Summary */}
        <div className="portfolio-summary">
          <p>
            "Capturing stories with precision and artistry." From behind the
            lens to post-production, bringing visions to life.
          </p>
        </div>
      </div>

      {/* Carousel for services */}
      <Carousel />

      {/* About Us Section */}
      <AboutUs />

      {/* Contact Component */}
      <Contact />
    </div>
  );
};

export default Home;
