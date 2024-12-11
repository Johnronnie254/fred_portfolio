import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import AboutUs from './Aboutus';
import Work from './Work';
import Contact from './Contact';

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      {/* Welcome Screen */}
      {!showContent ? (
        <div className="welcome-screen">
          <div className="welcome-text">
            <h1>Welcome</h1>
            <h3>Fred Warui</h3>
          </div>
        </div>
      ) : (
        <>
          {/* Navigation Bar */}
          <nav className="navbar">
            <div className="menu-icon" onClick={() => setMenuVisible(!menuVisible)}>
              ☰
            </div>
            <div className={`nav-menu ${menuVisible ? "visible" : ""}`}>
              <a
                href="#home"
                className="nav-link"
                onClick={() => scrollToSection("home")}
                id="nav-home"
              >
                Home
              </a>
              <a
                href="#about"
                className="nav-link"
                onClick={() => scrollToSection("about")}
                id="nav-about"
              >
                About Me
              </a>
              <a
                href="#work"
                className="nav-link"
                onClick={() => scrollToSection("work")}
                id="nav-work"
              >
                Work
              </a>
              <a
                href="#contact"
                className="nav-link"
                onClick={() => scrollToSection("contact")}
                id="nav-contact"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Carousel */}
          <Carousel fade interval={3000} controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://i.pinimg.com/736x/3d/dd/72/3ddd72e46ef8d5ca7d742514ac9c8051.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://i.pinimg.com/736x/1e/0d/48/1e0d486e1e44110e66647689a7f09c18.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src="https://i.pinimg.com/736x/74/58/e7/7458e7150d4cde7b74aa98b11b3687a9.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

          {/* Center Content */}
          <div className="centered-text">
            <h1>Cinematography</h1>
            <h1>Editing</h1>
            <h1>Directing</h1>
            <h1>Focus Pooling</h1>
          </div>

          {/* Sections */}
          <section id="about" className="section">
            < AboutUs />
          </section>
          <section id="work" className="section">
            < Work />
          </section>
          <section id="contact" className="section">
           <Contact />
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
