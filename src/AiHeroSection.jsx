import React from "react";
import "./AiHeroSection.css";

function AiHeroSection() {
  return (
    <div className="ai-hero-section">
      {/* Background Image */}
     
      <div className="ai-left">
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
          </div>
        </div>

        {/* Stats */}
        <div className="ai-stats-bar">
          <div className="ai-stat-box">
            <h3>98%</h3>
            <p>Accuracy Rate</p>
          </div>
          <div className="ai-stat-box">
            <h3>99.99%</h3>
            <p>Up Time</p>
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

      {/* Right Side Image */}
      <div className="ai-right">
        <img src="/images/aiu.gif" alt="AI Graphic" />
      </div>
    </div>
  );
}

export default AiHeroSection;
