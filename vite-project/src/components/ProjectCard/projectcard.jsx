import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="card-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        {/* Tags */}
        <div className="tags-container">
          {project.tags?.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="button-group">
        {/* Navigates to detail page */}
        <Link to={`/projects/${project.id}`} className="btn btn-primary">
          View Project 🚀
        </Link>

        {/* GitHub Button */}
        {project.githubLink && (
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
          >
            GitHub 💻
          </a>
        )}
      </div>
    </div>
  );
}
