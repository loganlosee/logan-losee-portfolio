import React from 'react';

import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import bootstrapLogo from '/bootstrap-logo.svg'

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo" alt="React logo" />
        <img src={bootstrapLogo} className="logo" alt="bootstrap logo" />
      </div>
      <p className="read-the-docs">
        Built with Vite, React, and Bootstrap.
      </p>
    </footer>
  );
}

export default Footer;