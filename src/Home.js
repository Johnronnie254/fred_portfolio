import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import Work from "./Work"; // Import Work component
import AboutUs from "./Aboutus"; // Import AboutUs component
import Contact from "./Contact"; // Import Contact component
import "./Home.css";

const Home = () => {
  return (
    <div className="landing-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Fred Warui</div>
        <ul className="nav-links">
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link> {/* Link to Home */}
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link> {/* Link to Portfolio */}
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>About</Link> {/* Link to About */}
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link> {/* Link to Contact */}
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home"> {/* Home section */}
        <div className="hero-content">
          <h1>Fred Warui</h1>
          <p>Cinematographer | Editor | Director</p>
        </div>
      </header>

      {/* About Section */}
      <section id="about">
        <AboutUs /> {/* Display AboutUs component */}
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <Work /> {/* Display Work component */}
      </section>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Explore More ↓</span>
      </div>

      {/* Contact Section */}
      <section id="contact">
        <Contact /> {/* Display Contact component */}
      </section>

      
    </div>
  );
};

export default Home;
