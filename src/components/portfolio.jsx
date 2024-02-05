import React from 'react';
import './portfolio.css';
import noteTaker from '/note-taker.jpg';
import jate from '/jate.jpg';
import rottenTrails from '/rotten-trails.jpg'

function Portfolio() {
  const projects = [
    {
      title: "Express note taking app",
      description: "A simple note-taking application to help you organize your thoughts and tasks.",
      imageUrl: noteTaker,
      link: "https://note-taking-app-logan-losee-2c63a73aad3d.herokuapp.com/"
    },
    {
      title: "Just another text editor",
      description: "A simple text editor with offline capability",
      imageUrl: jate, 
      link: "https://just-another-text-editor-iysr.onrender.com/"
    },
    {
      title: "Rotten Trails",
      description: "An app where hikers can review and add trails for other users",
      imageUrl: rottenTrails, 
      link: "https://rotten-trails-96144daadebc.herokuapp.com/"
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
