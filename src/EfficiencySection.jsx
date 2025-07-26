import React from "react";
import "./EfficiencySection.css";

function EfficiencySection() {
  return (
    <div className="efficiency-section">
      {/* Background Video */}
      <video
        className="efficiency-bg-video"
        autoPlay
        muted
        loop
        playsInline
        src="/video/about us AI-vmake.mp4"
      />

      {/* Overlay Content */}
      <div className="efficiency-overlay">
        <div className="efficiency-text">
          <h2>
            Reimagine Efficiency with <br /> Intelligent Technology
          </h2>
          <p>
            We help businesses harness the capabilities of Artificial Intelligence to automate
            processes, enhance decision making, and increase productivity. Our end-to-end services
            from AI model development to real world integration are tailored to your goals, data,
            and infrastructure.
          </p>
          <p>
            Whether you're exploring AI for the first time or scaling existing solutions, our team
            of engineers and data scientists deliver results that drive measurable impact.
          </p>
          <div className="efficiency-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="efficiency-cards">
          <div className="card card-model">
            <div className="card-icon">🧠</div>
            <h4>AI Model Development</h4>
            <p>Custom AI solutions tailored to your business needs and data.</p>
          </div>
          <div className="card card-automation">
            <div className="card-icon">⚙️</div>
            <h4>Automation Workflows</h4>
            <p>Automate manual processes and scale efficiency seamlessly.</p>
          </div>
          <div className="card card-analytics">
            <div className="card-icon">📊</div>
            <h4>Analytics & Insights</h4>
            <p>Turn your data into actionable intelligence and smarter decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EfficiencySection;
