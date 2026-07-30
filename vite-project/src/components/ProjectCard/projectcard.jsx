import React from 'react';
import './projectcard.css';

function ProjectCard({ project }) {
  // Safety check to prevent crashing if project prop is missing
  if (!project) return null;

  const { title, description, tech = [], link, github } = project;

  return (
    <article className="project-card">
      <div className="project-card-body">
        <h3>{title || 'Untitled Project'}</h3>
        <p>{description || 'No description provided.'}</p>

        {tech.length > 0 && (
          <div className="project-tags">
            {tech.map(t => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="project-card-actions" style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View Live 🚀
            </a>
          ) : (
            <button className="btn btn-primary" disabled>
              View Project
            </button>
          )}

          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              GitHub 💻
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;