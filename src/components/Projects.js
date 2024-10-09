// components/Projects.js
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Laravel and Vue.js.',
    image: '/path-to-ecommerce-image.jpg',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Stripe API'],
    githubLink: 'https://github.com/your-username/ecommerce-platform',
    liveLink: 'https://your-ecommerce-site.com',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets using Python and D3.js.',
    image: '/path-to-dashboard-image.jpg',
    technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL'],
    githubLink: 'https://github.com/your-username/data-viz-dashboard',
    liveLink: 'https://your-dashboard-demo.com',
  },
  // Add more projects...
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));

  return (
    <section id="projects" className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2 className="mb-5 text-center display-4">Projects</h2>
        <div className="mb-4">
          <button onClick={() => setFilter('all')} className="btn btn-outline-primary me-2">All</button>
          <button onClick={() => setFilter('Laravel')} className="btn btn-outline-primary me-2">Laravel</button>
          <button onClick={() => setFilter('Python')} className="btn btn-outline-primary me-2">Python</button>
          {/* Add more filter buttons as needed */}
        </div>
        <div className="row">
          {filteredProjects.map((project, index) => (
            <div className="mb-4 col-md-6" key={index}>
              <div className="shadow-sm card h-100">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="badge bg-secondary me-1">{tech}</span>
                    ))}
                  </div>
                  <a href={project.githubLink} className="btn btn-outline-dark me-2" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="me-1" /> GitHub
                  </a>
                  <a href={project.liveLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="me-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
