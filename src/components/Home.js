// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="hero d-flex align-items-center">
      <div className="container">
        <h1 className="mb-4 display-1 fw-bold">Wassim Yaich</h1>
        <h2 className="mb-4 h2">Full-Stack Developer & Data Analyst</h2>
        <p className="mb-5 lead">
          Passionate about creating robust web applications and deriving insights from data.
        </p>
        <Link to="/projects" className="btn btn-primary btn-lg">
          View My Work <FaArrowRight className="ms-2" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
