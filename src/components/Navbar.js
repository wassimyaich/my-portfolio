// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Wassim yaich</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link 
                activeClass="active" 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                activeClass="active" 
                to="projects" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="nav-link"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                activeClass="active" 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
