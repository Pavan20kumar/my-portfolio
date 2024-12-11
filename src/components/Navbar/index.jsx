import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href={"#home"}>
          <span className="brand-text">Portfolio</span>
        </a>

        <button 
          className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href={"#home"}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"#about"}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"#projects"}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={"#contact"}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
