import React, { useState } from "react";
import { Link } from "react-scroll";
import Work from "./Work";
import AboutUs from "./Aboutus";
import Achievement from "./Achievement"; // Import the new Achievement component
import Contact from "./Contact";
import "./Home.css";

const Home = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNavbar = () => {
    setNavActive(!navActive);
  };

  return (
    <div className="landing-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className={`hamburger ${navActive ? "active" : ""}`} onClick={toggleNavbar}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`nav-links ${navActive ? "active" : ""}`}>
          <li>
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="achievements" smooth={true} duration={500}>Achievements</Link> {/* New Achievements Link */}
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
          <h1>Fred Warui</h1>
          <p>Cinematographer | Editor | Director</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="services">
        <div className="service-item">
          <h2>Cinematography</h2>
          <p>Mastering visuals that capture the essence of your story.</p>
        </div>
        <div className="service-item">
          <h2>Editing</h2>
          <p>Turning raw footage into cinematic masterpieces.</p>
        </div>
        <div className="service-item">
          <h2>Focus Pulling</h2>
          <p>Ensuring every shot is crisp and impactful.</p>
        </div>
        <div className="service-item">
          <h2>Directing</h2>
          <p>Bringing creative visions to life through expert direction.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Achievements Section */}
      <section id="achievements">
        <Achievement /> {/* Display Achievement component */}
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <Work />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
