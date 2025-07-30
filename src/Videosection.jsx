import React from "react";
import "./VideoSection.css";

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
            We solve real-world business problems.
          </h2>

          <p className="at-description">
            At Awwal Security, we create secure, intelligent, and scalable
            digital solutions that empower industries to move faster, operate
            smarter, and grow safely.
          </p>

          <p className="description dimmed">
            From hospitals and banks to hotels, pharmacies, and startups  we
            are the tech force behind transformation.
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
