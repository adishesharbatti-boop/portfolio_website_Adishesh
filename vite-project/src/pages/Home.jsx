import React from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard/projectcard';
import Hero from '../components/Hero/hero';
import AboutSection from '../components/About/about';

function Home() {
  const featured = projectsData ? projectsData.filter(p => p.featured) : [];

  return (
    <div className="home-page">
      <Hero />
      <AboutSection />

      <section className="featured-section container" id="projects">
        <h2>Featured Projects</h2>

        {featured.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px',
              marginTop: '20px'
            }}
          >
            {featured.map(project => (
              <ProjectCard key={project.id || project.title} project={project} />
            ))}
          </div>
        ) : (
          <p>No featured projects to display right now.</p>
        )}
      </section>
    </div>
  );
}

export default Home;