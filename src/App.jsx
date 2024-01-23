import React, { useState } from 'react';
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import bootstrapLogo from '/bootstrap-logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; 
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  return (
    
    <div className="App">
      <Header /* Pass down the state and setter function */ 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} />
      <AboutMe />
      
      <Footer />

    </div>
  );
}

export default App;
