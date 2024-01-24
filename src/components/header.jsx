import React from 'react';

function Header({ activeSection, setActiveSection }) {
  return (
    <header className="bg-light py-3">
      <div><h2>Logan Losee</h2></div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
               href="#about"
               onClick={() => setActiveSection('about')}>About Me</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
               href="#portfolio"
               onClick={() => setActiveSection('portfolio')}>Portfolio</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
               href="#contact"
               onClick={() => setActiveSection('contact')}>Contact</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
               href="#resume"
               onClick={() => setActiveSection('resume')}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
