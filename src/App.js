import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar component
import Home from './Home'; // Import Home component
import AboutUs from './Aboutus'; // Assuming you have AboutUs component
import Work from './Work'; // Assuming you have Work component
import Contact from './Contact'; // Assuming you have Contact component

const App = () => {
  return (
    <Router>
      {/* Navbar will appear on all routes */}
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
