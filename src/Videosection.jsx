import React from 'react';
import './Videosection.css';

const VideoSection = () => {
  return (
    <div className="video-section">
      <video autoPlay loop muted className="bg-video">
        <source src="/video/Recording 2025-06-30 124025-vmake.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay">
        <div className="left-content">
          <button className="tag-btn">🌐 Future-Ready Solutions</button>
          <h1 className="main-title">
            We Don’t JUST <br />
            <span className="highlighted">Build Tech</span>
          </h1>
          <h2 className="sub-title">
            We solve real-world <br />
            business problems.
          </h2>
          <p className="at-description">
            At Awwal Security, we create secure, intelligent, and scalable digital solutions that
            empower industries to move faster, operate smarter, and grow safely.
          </p>
          <p className="description dimmed">
            From hospitals and banks to hotels, pharmacies, and startups — we are the tech force behind transformation.
          </p>
        </div>

        <div className="right-placeholder">
          {/* Insert your robot graphic / animation here */}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
