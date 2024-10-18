import React, { useState } from 'react';

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Laravel.',
    technologies: ['Laravel', 'javascript', 'MySQL', 'sanctum API'],
    githubLink: 'https://github.com/your-username/ecommerce-platform',
   
  },
  {
    title: 'E-commerce App (Flutter/Laravel)',
    description: 'Developed a cross-platform e-commerce mobile app using Flutter, with a robust backend built with Laravel. Implemented secure API authentication using Sanctum.',
    technologies: ['Flutter',  'javascript','MySQL'],
    githubLink: 'https://github.com/wassimyaich/flutter_mobileEcommerce_with_laravel',
    
  },
  {
    title: 'Satisfaction Analysis Solution For Phone Service Providers',
    description: 'Interactive dashboard for visualizing complex datasets using Machine Learning.',
    technologies: ['Python', 'Django', 'Cassandra'],
    githubLink: 'https://github.com/wassimyaich/Satisfaction-Analysis-Solution-For-Phone-Service-Providers',
    
  },
  
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my work.',
    technologies: ['React', 'HTML','CSS', 'JavaScript'],
    githubLink: 'https://github.com/wassimyaich/my-portfolio',
   
  },
  {
    title: 'Rule Based Recommender System For Project Risk Management',
    description: 'Automates risk management for project managers using NLP.A web app generates recommendations based on user queries by creating an ontology from project docs.',
    technologies: ['Python', 'Artifical Intelligence'],
    githubLink: 'https://github.com/wassimyaich/Rule-Based-Recommender-System-For-Project-Risk-Management',
    
  },
 
  
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.technologies.includes(filter));
    const backgroundSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <!-- Background Color -->
        <rect width="800" height="600" fill="#018ABD" /> <!-- Light blue background -->

        <!-- Decorative Shapes -->
        <circle cx="100" cy="100" r="80" fill="#004581" opacity="0.5" />
        <circle cx="700" cy="500" r="100" fill="#004581" opacity="0.3" />
        <rect x="300" y="400" width="200" height="150" fill="#3b82f6" opacity="0.5" rx="10" />
        <path d="M0,300 Q400,100 800,300" stroke="#2563eb" stroke-width="5" fill="none" />
    </svg>
`;
      const backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(backgroundSvg)}")`;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    // <section id="projects" className="py-5 heroprojects bg-light" data-aos="fade-up">
    <section id="skills" className="py-5 skills-section"data-aos="fade-up">

      <div className="container">
        <h2 className="mb-5 text-center display-4">Projects</h2>

        <div className="mb-4">
          <button onClick={() => setFilter('all')} className="btn btn-outline-primary me-2">All</button>
          <button onClick={() => setFilter('Laravel')} className="btn btn-outline-primary me-2">Laravel</button>
          <button onClick={() => setFilter('Python')} className="btn btn-outline-primary me-2">Python</button>
        </div>

        <div className="row">
          {currentProjects.map((project, index) => (
            <div className="mb-4 col-md-6" key={index}>
              <div className="shadow-sm card h-100" style={{
                backgroundImage: backgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                <div className="card-body">
                  <dt className="card-title">{project.title}</dt>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="badge bg-secondary me-1">{tech}</span>
                    ))}
                  </div>
                  <div className="bottom-0 position-absolute end-0">
                  <a 
                    href={project.githubLink} 
                    className="inline-flex items-center btn btn-outline-dark me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                    <span className="ml-2">View on GitHub</span>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <nav>
          <ul className="pagination justify-content-center">
            {Array.from({ length: totalPages }, (_, i) => (
              <li className={`page-item ${i + 1 === currentPage ? 'active' : ''}`} key={i}>
                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Projects;

