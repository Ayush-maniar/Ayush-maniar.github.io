import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to handle section navigation from any route
  const handleSectionNav = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      // Wait for navigation, then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo" style={{ color: '#a0f' }}>Ayush Maniar</span>
        <ul className="nav-menu">
          <li className="nav-item"><Link className="nav-links" to="/">Home</Link></li>
          <li className="nav-item"><a className="nav-links" href="#about" onClick={handleSectionNav('about')}>About</a></li>
          <li className="nav-item"><a className="nav-links" href="#projects" onClick={handleSectionNav('projects')}>Projects</a></li>
          <li className="nav-item"><a className="nav-links" href="#resume" onClick={handleSectionNav('resume')}>Resume</a></li>
          <li className="nav-item"><Link className="nav-links" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;