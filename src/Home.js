import React, { useState, useEffect } from "react";
import "./Home.css";
import Work from './Work';
import Contact from './Contact';
import AboutUs from './Aboutus';


const Home = () => {
  const [showContent, setShowContent] = useState(false);

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
            <div className="logo">Fred Warui</div>
            <div className="nav-links">
              
              <a href="#about" onClick={() => scrollToSection("about")}>About</a>
              <a href="#work" onClick={() => scrollToSection("work")}>Work</a>
              <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>
            </div>
          </nav>

          {/* Centered Home Content */}
          <section id="home" className="home-section">
            <div className="centered-text">
              <h1>Cinematography</h1>
              <h1>Editing</h1>
              <h1>Directing</h1>
              <h1>Focus Pooling</h1>
            </div>
          </section>

          {/* Spacer to Push Other Sections Down */}
          <div className="spacer"></div>

          {/* About Section */}
          <section id="about" className="section">
            <AboutUs />
          </section>

          {/* Work Section */}
          <section id="work" className="section">
            <Work />
          </section>

          {/* Contact Section */}
          <section id="contact" className="section">
            <Contact />
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
