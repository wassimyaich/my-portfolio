// components/About.js
import React from 'react';
import { FaCode, FaChartBar, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-5 mt-5 heroprojects" data-aos="fade-up">
      <div className="container">
        <h2 className="mb-5 text-center display-4">About Me</h2>
        <div className="row">
          <div className="col-md-6">
            <img src="/path-to-your-image.jpg" alt="Wassim Yaich" className="mb-4 img-fluid rounded-circle" />
          </div>
          <div className="col-md-6">
            <p className="lead">
              I'm a dedicated full-stack developer with a strong foundation in data analysis and Python. My journey began as a data analyst, where I honed my skills in Python and Django to extract insights from complex datasets.
            </p>
            <p className="lead">
              Over time, my passion for building comprehensive web applications led me to expand my expertise into full-stack development. I've become proficient in Laravel, a powerful PHP framework, and Flutter, a cross-platform UI framework.
            </p>
            <div className="mt-5 d-flex justify-content-around">
              <div className="text-center">
                <FaCode size={40} className="mb-2 text-primary" />
                <h5>Full-Stack Development</h5>
              </div>
              <div className="text-center">
                <FaChartBar size={40} className="mb-2 text-primary" />
                <h5>Data Analysis</h5>
              </div>
              <div className="text-center">
                <FaLaptopCode size={40} className="mb-2 text-primary" />
                <h5>Mobile Development</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
