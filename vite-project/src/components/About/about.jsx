import React from 'react';
import './about.css';
//final

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper container">
        <div className="about-image">
          <img src="/profile.jpeg" alt="Adishesh Arbatti" loading="lazy" />
        </div>
        <div className="about-copy">
          <h1>About Me</h1>
          <p>
            Hi! I'm Adishesh, a developer based in India building fast, accessible web experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;