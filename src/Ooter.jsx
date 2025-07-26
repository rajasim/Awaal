import React from "react";
import "./OoterMain.css";

const Ooter = () => {
  return (
    <div className="ooter-container">
      {/* Background Image */}
      <img src="/images/GLOBAL TECHNOLOGY PRESENCE.jpg" alt="Background" className="ooter-bg-img" />

      <div className="ooter-headline">
        <h1>
          <span className="ooter-green">GLOBAL TECHNOLOGY PRESENCE</span><br />
          <span className="ooter-yellow">Explore our international technology hubs</span>
        </h1>
      
      </div>

      <div className="ooter-video-section">
        <video
          className="ooter-radar-video"
          autoPlay
          loop
          muted
          playsInline
          src="/video/map-vmake.mp4"
        />
        <div className="ooter-video-overlay"></div>
      </div>

      <div className="ooter-tags">
        {[
         
        ].map((tag, idx) => (
          <span className="ooter-tag" key={idx}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Ooter;
