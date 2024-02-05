import React from 'react';
import './header.css';

function Header({ activeSection, setActiveSection }) {
  // Function to handle the click event and scroll with offset
  const handleNavClick = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
    setActiveSection(sectionId.replace("#", "")); // Update the active section state

    const headerOffset = 110;
    const sectionElement = document.querySelector(sectionId);

    if (sectionElement) {
      const offsetPosition = sectionElement.offsetTop - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="bg-light py-3" style={{position: 'fixed', width: '100%', top: '0', zIndex: '1030'}}>
      <div><h2>Logan Losee</h2></div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
               href="#about"
               onClick={(e) => handleNavClick(e, '#about')}>About Me</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
               href="#portfolio"
               onClick={(e) => handleNavClick(e, '#portfolio')}>Portfolio</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
               href="#contact"
               onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
               href="#resume"
               onClick={(e) => handleNavClick(e, '#resume')}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

