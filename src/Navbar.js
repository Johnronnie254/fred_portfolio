// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // For React Router
import "./Navbar.css"; // Import CSS for Navbar

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

  return (
    <nav className="navbar">
      <div className="logo">Fred Warui</div>
      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "nav-links-active" : ""}`}>
        <Link to="/home">Home </Link>
        
        <Link to="/work">Work</Link>
        
      </div>
      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
