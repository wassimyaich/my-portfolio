import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css'; // Import custom CSS for additional styling

const Footer = () => {
  return (
    <footer className="text-white footer bg-dark">
      <div className="text-center containers">
        <div className="mb-3 social-links">
          <a href="https://github.com/your-username" className="mx-2 text-white" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/wassim-yaich" className="mx-2 text-white" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/your-username" className="mx-2 text-white" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Wassim Yaich. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;