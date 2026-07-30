import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar({ theme, toggleTheme }) {
  // State for the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo">AA</div>

        <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
          <li>
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? 'active' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;