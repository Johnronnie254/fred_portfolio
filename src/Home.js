import React from "react";
import "./Home.css"; // Import CSS for Home

import AboutUs from "./Aboutus";
import Contact from "./Contact";
import Carousel from "./Carousel"; // Import the Carousel component

const Home = () => {
  return (
    <div className="home-container">
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
