import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header'; 
import Footer from './components/footer';
import AboutMe from './components/aboutMe';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/resume';


function App() {
  const [activeSection, setActiveSection] = useState('about');
  return (
    
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'about' && <AboutMe />}
        {activeSection === 'portfolio' && <Portfolio />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'resume' && <Resume />}
      </main>
      <Footer />

    </div>
  );
}

export default App;
