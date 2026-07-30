import React from 'react';
import ProjectCard from '../ProjectCard/projectcard'; // Ensure path matches your file name casing

function ProjectGrid({ projects = [] }) {
  // 1. Check if projects is empty or not an array
  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <div className="project-grid-empty" style={{ textAlign: 'center', padding: '40px 0' }}>
        <p>No projects found in this category.</p>
      </div>
    );
  }

  return (
    <div className="project-grid">
      {projects.map(project => (
        <ProjectCard key={project.id || project.title} project={project} />
      ))}
    </div>
  );
}

export default ProjectGrid;