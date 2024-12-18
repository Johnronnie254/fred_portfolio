// Home.js
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import "./Home.css"; // Import CSS for Home

const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3000); // Delay before content shows
    return () => clearTimeout(timer);
  }, []);

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
          {/* Navbar Component */}
          <Navbar />
          
          {/* Home Section with Background Image */}
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
        </>
      )}
    </div>
  );
};

export default Home;
