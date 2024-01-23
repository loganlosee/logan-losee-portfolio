import React, { useState } from 'react';
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import bootstrapLogo from '/bootstrap-logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; 
import AboutMe from './components/AboutMe';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  return (
    
    <div className="App">
      <Header /* Pass down the state and setter function */ 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} />
    <AboutMe />
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo" alt="React logo" />
        <img src={bootstrapLogo} className="logo" alt="bootstrap logo" />
      </div>
      <p className="read-the-docs">
        Built with Vite, React, and Bootstrap.
      </p>
    </div>
  );
}

export default App;
