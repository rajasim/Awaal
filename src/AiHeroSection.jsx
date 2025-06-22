import React from "react";
import "./AiHeroSection.css";

function AiHeroSection() {
  return (
    <div className="ai-hero-section">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="ai-background-video"
        src="/video/Ai.mp4" // Replace with your actual video path
      />

      <div className="ai-content">
        <span className="ai-badge">● Next-Gen AI Solutions</span>
        <h1>
          Accelerate Your <br />
          <span className="ai-highlighted">Growth</span>
        </h1>
        <h2>With Intelligent AI</h2>
        <p>
          Transform your business with cutting-edge AI automation solutions that streamline
          workflows, boost productivity, and drive innovation.
        </p>

        <div className="ai-button-row">
          <button className="ai-btn-primary">Get Demo →</button>
          <button className="ai-btn-secondary">Learn More</button>
        </div>

        <div className="ai-avatars-row">
          <div className="ai-avatar">JD</div>
          <div className="ai-avatar">KM</div>
          <div className="ai-avatar">TS</div>
          <span className="ai-trust">Trusted by 500+ companies worldwide</span>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="ai-stats-bar">
        <div className="ai-stat-box">
          <h3>98%</h3>
          <p>Accuracy Rate</p>
        </div>
        <div className="ai-stat-box">
          <h3>500+</h3>
          <p>Global Clients</p>
        </div>
        <div className="ai-stat-box">
          <h3>10x</h3>
          <p>Productivity Boost</p>
        </div>
        <div className="ai-stat-box">
          <h3>24/7</h3>
          <p>Support Available</p>
        </div>
      </div>
    </div>
  );
}

export default AiHeroSection;
