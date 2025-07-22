import React from 'react';
import './Repter.css';

const Repter = () => {
  return (
    <div className="repter-wrapper">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="repter-bg-video"
      >
        <source src="/video/Recording 2025-06-29 132612-vmake.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="repter-content">
        <div className="repter-badge">🚀 Innovative Software Solutions</div>

        <h1>
          We Build <span className="highlight-blue">Powerful</span> Software &{' '}
          <span className="highlight-purple">Stunning</span> Apps
        </h1>

        <p>
          Transform your business with custom software development that drives innovation,
          efficiency, and growth. Our expert team delivers solutions that exceed expectations.
        </p>

        <div className="repter-buttons">
          <button className="btn-primary">Explore Solutions</button>
          <button className="btn-outline">🎬 Watch Demo</button>
        </div>

        <div className="repter-tech">
          <span>Powered by cutting-edge technologies</span>
          <div className="tech-icons">
            <img src="/images/We Build Powerful Software & Stunning Apps1.png" alt="React" />
           <img src="/images/We Build Powerful Software & Stunning Apps2.png" alt="Node.js" />
            <img src="/images/We Build Powerful Software & Stunning Apps3.png" alt="Flutter" />
            <img src="/images/We Build Powerful Software & Stunning Apps4.png"alt="AWS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repter;
