import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="landing-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Fred Warui</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
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
          <h2>Focus Pooling</h2>
          <p>Ensuring every shot is crisp and impactful.</p>
        </div>
        <div className="service-item">
          <h2>Directing</h2>
          <p>Bringing creative visions to life through expert direction.</p>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Explore More ↓</span>
      </div>
    </div>
  );
};

export default Home;
