import React from "react";
import "./HomeMain.css";

const HomeMain = () => {
  return (
    <div className="hm-wrapper">
      <div className="hm-headline">
        <h1>
          <span className="hm-green">Securing, Automating and</span><br />
         
          <span className="hm-yellow">Building the Future of Your Business</span>
        </h1>
        <div className="hm-subscribe">
          <input type="email" placeholder="Enter work email" className="hm-input" />
          <button className="hm-try-btn">Try at zero cost</button>
        </div>
      </div>

      <div className="hm-video-section">
        <video
          className="hm-radar-video"
          autoPlay
          loop
          muted
          playsInline
          src="/video/Recording 20vmake.mp4" // Update with your actual video path
        />
        <div className="hm-video-overlay">
         
        </div>
      </div>

      <div className="hm-tags">
        {[
          "Cybersecurity (VAPT)",
          "AI & Automation",
          "Cloud Services",
          "IT Infrastructure",
          "Software Development",
          "Website Development",
          
        ].map((tag, idx) => (
          <span className="hm-tag" key={idx}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default HomeMain;
