import React from 'react';
import './hero.css';

function hero() {
    function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "Good morning!";
    } else if (hour < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
}
  return (
    <section className="hero-section">
      <h1>
        {getGreeting()}, I'm <span className="highlight">Adishesh Arbatti</span> 👋
      </h1>
      <p className="tagline">I build efficient, fast, accessible websites.</p>
      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary">View My Work</a>
        <a href="#contact" className="btn btn-secondary">Contact Me</a>
      </div>
    </section>
  );
}

export default hero;