import React from 'react';
import './Resume.css'; // Ensure this CSS file exists for styling

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-content">
        <h1>Logan Losee, 24</h1>
        <p>Fiber Optic Technician</p>
        <p>7696 s 2250 w, West Jordan, UT 84084</p>
        
        <h2>Experience</h2>
        <h3>Utopia Fiber - Field Service Technician</h3>
        <p>Nov 2023 - current</p>

        <h3>Sorenson Construction Inc (SCI) - Fiber Optic Technician</h3>
        <p>March 2023 - Nov 2023</p>
        <ul>
          <li>Forward production, mass splicing</li>
          <li>Building the Google Fiber network</li>
          <li>General fiber construction and maintenance</li>
          <li>Advanced fiber troubleshooting</li>
          <li>Extensive experience with a variety of equipment, including OTDR, multiple splicing machines (mainly Fujikura 90s), ribbon splicing, VFL, FMS</li>
          <li>Built and maintained everything from the Google hut to the NIU</li>
          <li>Provided accurate documentation of all work done on the job</li>
          <li>Followed all safety procedures instated by the company and customers</li>
          <li>Drove and documented maintenance on company vehicles used for work</li>
          <li>Extensive experience in both forward production and maintenance</li>
          <li>Experience working inside Google hut, testing new lines and troubleshooting broken ones via OTDR</li>
        </ul>

        <h3>Ultimate Sports Medicine - Contracted Event EMT</h3>
        <p>March 2022 - January 2023</p>
        <ul>
          <li>Supervised kid and teenage lacrosse games</li>
          <li>Assessed and treated patients</li>
        </ul>

        <h2>Education</h2>
        <h3>U of U Full Stack Coding Bootcamp</h3>
        <p>October 2023 - Current (Finish Feb 2024)</p>
        <p>Full stack web development course with an emphasis on technologies such as HTML, CSS, Git, JavaScript, APIs, Node.js, Express.js, MySQL, MongoDB, MVC, IndexedDB, Progressive Web Applications, React, and the MERN stack.</p>
        
        <h3>EMT Utah - EMT-B</h3>
        <p>June 2021 - August 2021</p>
        <p>EMT certification course, completed all qualifying attributes.</p>

        <p>Plans to take continued courses for Python and other technologies.</p>
      </div>
    </section>
  );
}

export default Resume;
