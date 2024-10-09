// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div>
        {/* Add social media links/icons if desired */}
        <a href="https://github.com/your-username" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your-username" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {/* Add more links as needed */}
      </div>
    </footer>
  );
};

export default Footer;
