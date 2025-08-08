import React from "react";
import "./Videosection.css";

const VideoSection = () => {
  return (
    <section className="videoo-section">
      {/* ✅ Background Image */}
      <img
        src="/images/bg-grid.jpg"
        alt="Background Grid"
        className="bg-image"
      />

      <div className="video-overlay">
        {/* ✅ Left Content */}
        <div className="left-content">
          <button className="tag-btn">🌐 Future Ready Solutions</button>

          <h1 className="main-title">
            We Don’t JUST <br />
            <span className="highlighted">Build Tech</span>
          </h1>

          <h2 className="sub-title">
           We solve real world business challenges
          </h2>

          <p className="at-description">
           We build secure, intelligent, and scalable digital solutions that help industries move faster, work smarter, and grow confidently.
From hospitals and banks to hotels, pharmacies, ecommerce platforms, educational institutions, and startups we’re the tech force driving transformation across sectors.
          </p>

          <p className="description dimmed">
            
          </p>
        </div>

        {/* ✅ Right Side Image */}
        <div className="right-placeholder">
          <img src="/images/whatrobot.gif" alt="Robot Illustration" />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
