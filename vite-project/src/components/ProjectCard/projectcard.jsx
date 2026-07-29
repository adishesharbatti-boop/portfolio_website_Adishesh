import React from 'react';
import './projectcard.css';

function ProjectCard({ name, tech }) {
  return (
    <article className="project-card">
      <h3 className="project-title">{name}</h3>
      
      <div className="project-tags">
        {tech && tech.map((item, index) => (
          <span key={index} className="tag">{item}</span>
        ))}
      </div>

      <button className="view-project-btn">View Project</button>
    </article>
  );
}

export default ProjectCard;