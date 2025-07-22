import React from "react";
import "./Hatrex.css";

const Hatrex = () => {
  return (
    <div className="hatrex-section">
      <div className="hatrex-content">
        {/* Left Side */}
        <div className="hatrex-left">
          <div className="hatrex-tag">📘 Strategic Planning Phase</div>
          <h3 className="hatrex-heading">Precision Migration Roadmap</h3>
          <p className="hatrex-description">
            Every migration is unique. Our quantum-computing algorithms create
            personalized roadmaps that minimize risk while maximizing
            efficiency and performance gains.
          </p>

          <ul className="hatrex-list">
            <li>✅ Detailed timeline with critical milestones</li>
            <li>✅ Advanced migration tools & methodologies</li>
            <li>✅ Zero-downtime strategies & fallback protocols</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="hatrex-right">
          <div className="hatrex-step-circle">02</div>
          <img
            src="/images/Our Revolutionary Process2.png" 
            alt="Roadmap Visual"
            className="hatrex-illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Hatrex;
