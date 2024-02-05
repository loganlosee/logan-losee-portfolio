import React from 'react';
import './aboutMe.css';

import hikeSelfie from '/hike-selfie.jpg';
import boxing from '/boxing.jpg';
import spliceBoy from '/splice-boy.jpg';
import doggo from '/doggo.jpg';

function AboutMe() {
  return (
    <section id="about" className="about-me-section">
      <div className="grid">
        <div>
          <img src={spliceBoy} alt="me-at-work" />
          <p>Me at work! I build and maintain networks.</p>
        </div>
        <div>
          <img src={hikeSelfie} alt="hike-selfie" />
          <p>If it's outside and a challenge I'm probably partaking</p>
        </div>
        <div>
          <img src={doggo} alt="my-dog" />
          <p>Who doesn't love dogs?...</p>
        </div>
        <div>
          <img src={boxing} alt="boxing-pic" />
          <p>I like to fight! (in the appropriate environment)</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
