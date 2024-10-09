// src/components/Projects.js
import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: 'assets/project1.jpg',
    link: 'https://github.com/your-username/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: 'assets/project2.jpg',
    link: 'https://github.com/your-username/project-two',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="display-4 text-center mb-5">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="mt-auto btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View Project
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
