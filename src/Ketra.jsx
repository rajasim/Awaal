import React from 'react';
import './Ketra.css';

const Ketra = () => {
  return (
    <div className="ketra-wrapper">
      <img
        src="/images/Screenshot 2025-06-25 224404.png"
        alt="Background Grid"
        className="bg-grid"
      />

      <div className="ketra-top">
        <div className="ketra-left">
          <h1>
            Transform Your <span className="text-digital">Digital</span>{' '}
            <span className="text-presence">Presence</span> With Custom Websites
          </h1>
          <p>
            Professional web development services tailored to your business needs.
            Responsive, modern, and user-friendly websites that convert visitors into customers.
          </p>
          <div className="ketra-buttons">
            <button className="btn-purple">View Our Work</button>
            <button className="btn-green">Contact via WhatsApp</button>
          </div>
        </div>
        <div className="ketra-right">
          <img
            src="/images/Screenshot 2025-06-13 001553.png"
            alt="Device Mockup"
            className="right-img"
          />
        </div>
      </div>

      <h2 className="project-title">
        Our Recent <span className="text-projects">Projects</span>
      </h2>

      <div className="project-cards">
        <div className="card">
          <img src="/images/project1.png" alt="E-Commerce" className="card-img" />
          <h3>E-Commerce Platform</h3>
          <p>
            A fully responsive online store with product management and payment integration.
          </p>
          <div className="tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="card">
          <img src="/images/box9.jpeg" alt="Corporate Website" className="card-img" />
          <h3>Corporate Website</h3>
          <p>
            A professional web presence for businesses with custom CMS.
          </p>
          <div className="tags">
            <span>WordPress</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>
        </div>

        <div className="card">
          <img src="/images/project3.png" alt="Educational Platform" className="card-img" />
          <h3>Educational Platform</h3>
          <p>
            An interactive learning platform with course management and student tracking.
          </p>
          <div className="tags">
            <span>Vue.js</span>
            <span>Firebase</span>
            <span>Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ketra;
