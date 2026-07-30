import React, { useState } from 'react';
import { projectsData, categories } from '../data/projects';
import ProjectGrid from '../components/ProjectGrid/ProjectGrid';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Safe fallback arrays in case imports are undefined
  const safeProjects = projectsData || [];
  const safeCategories = categories || ['all'];

  // Filter projects (case-insensitive compare for safety)
  const visibleProjects = activeFilter.toLowerCase() === 'all'
    ? safeProjects
    : safeProjects.filter(
        project => project.category?.toLowerCase() === activeFilter.toLowerCase()
      );

  return (
    <div className="projects-page container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <div className="project-filters">
          {safeCategories.map(cat => (
            <button
              key={cat}
              className={
                cat.toLowerCase() === activeFilter.toLowerCase()
                  ? 'filter-btn active'
                  : 'filter-btn'
              }
              onClick={() => setActiveFilter(cat)}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <ProjectGrid projects={visibleProjects} />
    </div>
  );
}

export default Projects;