import { useState } from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/navbar';
import ProjectCard from './components/ProjectCard/projectcard';
import SkillCard from './components/SkillCard/skillcard';
import ContactForm from './components/ContactForm/contactform';
import Hero from './components/Hero/hero'
import GitHubStats from './components/Githubstats/github';

const projects = [
  { id: 1, name: "Weather App", category: "web", tech: ["React", "API"] },
  { id: 2, name: "Todo App", category: "web", tech: ["JavaScript"] },
  { id: 3, name: "Portfolio", category: "design", tech: ["HTML", "CSS"] },
  { id: 4, name: "Calculator", category: "web", tech: ["JavaScript"] }
];

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <main style={{ padding: '40px 5%', minHeight: '60vh' }}>

         {/* --- GITHUB STATS SECTION --- */}
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>GitHub Profile</h2>
                
                {/* Notice how we wrap it in a div to easily control its layout */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
                    <GitHubStats username="adishesharbatti-boop" /> {/* Replace with your username! */}
                </div>
        {/* SKILLS SECTION */}
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>My Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          <SkillCard name="HTML5" level="Advanced" icon="🌐" />
          <SkillCard name="CSS3" level="Advanced" icon="🎨" />
          <SkillCard name="JavaScript" level="Intermediate" icon="⚡" />
          <SkillCard name="React" level="Beginner" icon="⚛️" />
        </div>

        {/* PROJECTS SECTION */}
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>My Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              name={project.name}
              tech={project.tech}
            />
          ))}
        </div>
         {/*CONTACTS SECTION*/}
                <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Get in Touch</h2>
                <ContactForm/>
      </main>
      <Footer />
    </>
  );
}

export default App;