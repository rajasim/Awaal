import React from "react";
import "./EfficiencySection.css";

function EfficiencySection() {
  return (
    <div className="efficiency-section">
      {/* Left Side Content */}
      <div className="efficiency-left">
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
      </div>

      {/* Right Side Image */}
      <div className="efficiency-right">
        <img src="/images/ayz2.gif" alt="AI Efficiency" />
      </div>
    </div>
  );
}

export default EfficiencySection;
