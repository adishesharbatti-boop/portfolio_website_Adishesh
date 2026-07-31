import React from 'react';
import { Link } from 'react-router-dom';
import './projectcard.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="card-top">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        {/* Yellow Tag Badges */}
        <div className="tags-container">
          {project.tags?.map((tag, index) => (
            <span key={index} className="tag-badge">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Button Row */}
      <div className="button-group">
        {/* Dark Navy Button linking to Details/Live Page */}
        <Link to={`/projects/${project.id}`} className="btn btn-live">
          View Live 🚀
        </Link>

        {/* Bordered Button linking to GitHub */}
        {project.githubLink && (
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-github"
          >
            GitHub 💻
          </a>
        )}
      </div>
    </div>
  );
}
