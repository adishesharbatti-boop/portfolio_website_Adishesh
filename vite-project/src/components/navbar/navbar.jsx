import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div>
      <header className="site-header">
        <nav className="navbar">
          <div className="logo">AA</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;