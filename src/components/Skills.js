import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaPython, FaDatabase, FaGitAlt } from 'react-icons/fa';

const skillsData = [
  { name: 'HTML5', icon: FaHtml5, level: 90 },
  { name: 'CSS3', icon: FaCss3Alt, level: 85 },
  { name: 'JavaScript', icon: FaJs, level: 80 },
  { name: 'React', icon: FaReact, level: 75 },
  { name: 'PHP', icon: FaPhp, level: 85 },
  { name: 'Python', icon: FaPython, level: 80 },
  { name: 'SQL', icon: FaDatabase, level: 75 },
  { name: 'Git', icon: FaGitAlt, level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="mb-5 text-center display-4">Skills</h2>
        <div className="row">
          {skillsData.map((skill, index) => (
            <div className="mb-4 col-md-3 col-sm-6" key={index}>
              <div className="text-center card h-100">
                <div className="card-body">
                  <skill.icon size={50} className="mb-3 text-primary" />
                  <h5 className="card-title">{skill.name}</h5>
                  <div className="progress">
                    <div 
                      className="progress-bar" 
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
    </section>
  );
};

export default Skills;
