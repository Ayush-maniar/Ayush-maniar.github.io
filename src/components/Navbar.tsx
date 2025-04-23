import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to handle section navigation from any route
  const handleSectionNav = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false); // Close menu on navigation
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

  // Close menu on route change (optional, for better UX)
  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo" style={{ color: '#a0f' }}>Ayush Maniar</span>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
          <li className="nav-item"><Link className="nav-links" to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li className="nav-item"><a className="nav-links" href="#about" onClick={handleSectionNav('about')}>About</a></li>
          <li className="nav-item"><a className="nav-links" href="#projects" onClick={handleSectionNav('projects')}>Projects</a></li>
          <li className="nav-item"><a className="nav-links" href="#resume" onClick={handleSectionNav('resume')}>Resume</a></li>
          <li className="nav-item"><Link className="nav-links" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;