// components/AboutUs.js
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us">
      <div className="intro-section">
        <h2>About SMW Rudransh Gyanpeeth Library</h2>
        <p>
          The SMW Rudransh Gyanpeeth Library is a sanctuary for knowledge and learning. Our mission is to provide an accessible space for education, research, and community engagement, supporting personal and academic growth.
        </p>
      </div>

      <div className="strategic-section">
        <h3>Strategic Priorities</h3>
        <p>
          Our strategic priorities guide us as we work to foster an inclusive, vibrant learning environment. We focus on accessibility, diversity, and innovation to meet the needs of our community.
        </p>
        <div className="priority-buttons">
          <button className="priority-btn">Advance</button>
          <button className="priority-btn">Engage</button>
          <button className="priority-btn">Preserve</button>
          <button className="priority-btn">Enrich</button>
        </div>
        
        <div className="priority-detail">
          <h4>Advance</h4>
          <p>Advancing knowledge through accessible resources and programs.</p>
          <ul>
            <li>Establishing partnerships for growth and improvement</li>
            <li>Fostering a digital-first environment for learning</li>
            <li>Expanding physical and digital resources</li>
          </ul>
          <img src="path-to-image.jpg" alt="Library activity" className="priority-image" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
