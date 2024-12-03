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
          <div
            className="nav-links"
            style={{
              display: 'flex',
              position: 'absolute',
              top: '100px',
              right: '20px',
              gap: '20px',
              fontSize: '20px',
              color: 'white',
              zIndex: '10',
            }}
          >
            <div
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => setDropdownVisible(false)}
              style={{ position: 'relative' }}
            >
              <a
                href="#work"
                className="nav-link work-link"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Work
              </a>
              {dropdownVisible && (
                <div
                  className="work-dropdown"
                  style={{
                    position: 'absolute',
                    top: '30px',
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    padding: '10px',
                    borderRadius: '4px',
                    zIndex: '10',
                  }}
                >
                  <a
                    href="#music-video"
                    className="dropdown-item"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '5px',
                    }}
                  >
                    Music Video
                  </a>
                  <a
                    href="#short-film"
                    className="dropdown-item"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '5px',
                    }}
                  >
                    Short Film
                  </a>
                  <a
                    href="#documentary"
                    className="dropdown-item"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'block',
                      marginBottom: '5px',
                    }}
                  >
                    Documentary
                  </a>
                  <a
                    href="#photography"
                    className="dropdown-item"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      display: 'block',
                    }}
                  >
                    Photography
                  </a>
                </div>
              )}
            </div>
            <a
              href="#about"
              className="nav-link about-link"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              About Me
            </a>
            <a
              href="#contact"
              className="nav-link"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              Contact
            </a>
          </div>

          {/* Carousel */}
          <div className="carousel-container">
            <Carousel fade interval={3000} controls={false} indicators={false} keyboard={false} pause="false">
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
          </div>

          {/* Main Content Overlay */}
          <div className="content-overlay">
            <div className="services">
              <h1 className="service-title" style={{ color: 'white' }}>
                Photography. Videography. Film Editing.
              </h1>
            </div>
            <div
              className="profile"
              style={{
                marginTop: '300px',
                color: 'white',
              }}
            >
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
