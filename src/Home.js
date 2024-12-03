import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      {!showContent ? (
        <div className="welcome-screen">
          <div className="moving-text">
            <h1>Welcome</h1>
            <h3>Waroyse Photography</h3>
          </div>
        </div>
      ) : (
        <div className="main-content">
          {/* Navigation Links */}
          <div className="nav-links">
            <div
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
              className="dropdown-container"
            >
              <a href="#work" className="nav-link work-link">Work</a>
              {dropdownVisible && (
                <div className="work-dropdown">
                  <a href="#music-video" className="dropdown-item">Music Video</a>
                  <a href="#short-film" className="dropdown-item">Short Film</a>
                  <a href="#documentary" className="dropdown-item">Documentary</a>
                  <a href="#photography" className="dropdown-item">Photography</a>
                </div>
              )}
            </div>
            <a href="#about" className="nav-link about-link">About Me</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Carousel */}
          <div className="carousel-container">
            <Carousel fade interval={3000} controls={false} indicators={false} keyboard={false} pause="false">
              <Carousel.Item>
                <img className="d-block w-100 carousel-image" src="https://i.pinimg.com/736x/3d/dd/72/3ddd72e46ef8d5ca7d742514ac9c8051.jpg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 carousel-image" src="https://i.pinimg.com/736x/1e/0d/48/1e0d486e1e44110e66647689a7f09c18.jpg" alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 carousel-image" src="https://i.pinimg.com/736x/74/58/e7/7458e7150d4cde7b74aa98b11b3687a9.jpg" alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Main Content Overlay */}
          <div className="content-overlay">
            <div className="services">
              <h1 className="service-title">Photography. Videography. Film Editing.</h1>
            </div>
            <div className="profile">
              <h2 className="profile-title">Get to know me!</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
