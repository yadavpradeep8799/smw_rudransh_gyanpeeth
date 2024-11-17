// components/HeroSection.js
import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section text-center d-flex align-items-center justify-content-center">
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to SMW Rudransh Gyanpeeth Library</h1>
        <p className="hero-subtitle">Your sanctuary for knowledge and learning.</p>
        <button className="btn btn-primary mt-3">Join Now</button>
      </div>
    </section>
  );
}

export default HeroSection;
