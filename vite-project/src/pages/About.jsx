import React from 'react';
import AboutSection from '../components/About/about';
import GitHubStats from '../components/Githubstats/Github';
import SkillCard from '../components/SkillCard/skillcard';

const SKILLS = [
  { name: 'HTML5', level: 'Advanced', icon: '🌐' },
  { name: 'CSS3', level: 'Advanced', icon: '🎨' },
  { name: 'JavaScript', level: 'Advanced', icon: '⚡' },
  { name: 'React', level: 'Intermediate', icon: '⚛️' },
  { name: 'Python', level: 'Basic', icon: '🐍' },
  { name: 'C / C++', level: 'Intermediate', icon: '⚙️' }
];

function About() {
  return (
    <div className="about-page container">
      <AboutSection />

      <section id="skills" className="skills-section" style={{ marginTop: '40px' }}>
        <h2>Skills</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '20px'
          }}
        >
          {SKILLS.map(skill => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
      </section>

      <section className="github-section" style={{ marginTop: '40px' }}>
        <h2>GitHub Activity</h2>
        <GitHubStats username="adishesharbatti-boop" />
      </section>
    </div>
  );
}

export default About;