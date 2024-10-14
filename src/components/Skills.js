import React from 'react';
import { 
  FaMobile, 
  FaJs, 
  FaReact, 
  FaPhp, 
  FaPython, 
  FaDatabase, 
  FaGitAlt, 
  FaCode, 
  FaJava, 
  FaFlask, 
  FaFireAlt, 
  FaTable, 
  FaProjectDiagram, 
  FaBrain, 
  FaEye, 
  FaServer, 
  FaChartBar, 
  FaAngular 
} from 'react-icons/fa';
import './Skills.css'; // Import the CSS file
// src/components/Skills.js

const skillsData = {
  "Programming Languages": [
    { name: 'Python', icon: FaPython, level: 80 },
    { name: 'R', icon: FaCode, level: 70 },
    { name: 'Java', icon: FaJava, level: 75 },
    { name: 'C', icon: FaCode, level: 70 },
    { name: 'C++', icon: FaCode, level: 70 },
    { name: 'Micro C', icon: FaCode, level: 65 },
    { name: 'JavaScript', icon: FaJs, level: 85 },  // Added JavaScript
  ],
  "Frameworks": [
    { name: 'Spring Boot', icon: FaJava, level: 75 },
    { name: 'Django', icon: FaPython, level: 75 },
    { name: 'Flask', icon: FaPython, level: 70 },
    { name: 'React', icon: FaReact, level: 75 },
    { name: 'Angular', icon: FaAngular, level: 70 },
    { name: 'Laravel', icon: FaPhp, level: 80 },  // Added Laravel
    { name: 'Flutter', icon: FaMobile, level: 70 },  // Added Flutter
  ],
  "Machine Learning": [
    { name: 'Scikit-learn', icon: FaFlask, level: 80 },
    { name: 'Spark (MLLib)', icon: FaFireAlt, level: 70 },
    { name: 'Pandas', icon: FaTable, level: 80 },
    { name: 'Numpy', icon: FaProjectDiagram, level: 75 },
    { name: 'PNL', icon: FaBrain, level: 65 },
    { name: 'Spacy', icon: FaBrain, level: 65 },
  ],
  "Deep Learning": [
    { name: 'Tensorflow', icon: FaBrain, level: 75 },
    { name: 'Keras', icon: FaBrain, level: 70 },
    { name: 'OpenCV', icon: FaEye, level: 70 },
  ],
  "Big Data": [
    { name: 'Hadoop', icon: FaDatabase, level: 70 },
    { name: 'Spark', icon: FaFireAlt, level: 70 },
    { name: 'Hive', icon: FaServer, level: 65 },
  ],
  "Business Intelligence": [
    { name: 'Power BI', icon: FaChartBar, level: 70 },
    { name: 'Grafana', icon: FaChartBar, level: 65 },
  ],
  "Databases": [
    { name: 'MySQL', icon: FaDatabase, level: 80 },
    { name: 'Cassandra', icon: FaDatabase, level: 65 },
    { name: 'MongoDB', icon: FaDatabase, level: 70 },
    { name: 'Postgresql', icon: FaDatabase, level: 75 },
  ],
  "Tools": [
    { name: 'Git', icon: FaGitAlt, level: 85 },
    { name: 'SQL', icon: FaDatabase, level: 75 },
  ],
};



const Skills = () => {
  return (
    <section id="skills" className="py-5 skills-section"data-aos="fade-up">
      <div className="container skills-container">
        <h2 className="mb-5 text-center display-4">Skills</h2>
        
        {Object.keys(skillsData).map((category, index) => (
          <div key={index} className="mb-5">
            <h3 className="mb-4 text-center">{category}</h3>
            <div className="row">
              {skillsData[category].map((skill, idx) => (
                <div className="mb-4 col-md-4 col-lg-3" key={idx}>
                  <div className="text-center shadow-sm card h-100 skills-card" style={{ borderRadius: '10px' }}>
                    <div className="card-body">
                      <skill.icon size={50} className="mb-3 text-primary" />
                      <h5 className="mb-3 card-title">{skill.name}</h5>
                      <div className="progress" style={{ height: '10px' }}>
                        <div 
                          className="progress-bar bg-primary" 
                          role="progressbar" 
                          style={{width: `${skill.level}%`}} 
                          aria-valuenow={skill.level} 
                          aria-valuemin="0" 
                          aria-valuemax="100"
                        >
                          {skill.level}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Skills;