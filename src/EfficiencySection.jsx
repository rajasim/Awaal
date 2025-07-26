import React from "react";
import "./EfficiencySection.css";

function EfficiencySection() {
  return (
    <div className="efficiency-section">
      <div className="efficiency-container">
        {/* Left Text */}
        <div className="efficiency-text-content">
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

        {/* Right Video */}
        <div className="efficiency-video-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="efficiency-bg-video"
            src="/video/about us AI-vmake.mp4"
          />
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="service-cards">
        <div className="card card-blue">
          <div className="icon">🧠</div>
          <h4>AI Model Development</h4>
          <p>
            Custom AI solutions designed to address your specific business challenges and opportunities.
          </p>
        </div>
        <div className="card card-purple">
          <div className="icon">🔁</div>
          <h4>Process Automation</h4>
          <p>
            Streamline operations and reduce manual tasks with intelligent automation workflows.
          </p>
        </div>
        <div className="card card-green">
          <div className="icon">📈</div>
          <h4>Data Analytics</h4>
          <p>
            Transform raw data into actionable insights with advanced analytics and visualization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EfficiencySection;
