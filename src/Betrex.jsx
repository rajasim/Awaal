import React from "react";
import "./Betrex.css";

const Betrex = () => {
  return (
    <div className="betrex-section">
      <h2 className="betrex-title">
        Our <span className="highlighted-word">Revolutionary</span> Process
      </h2>
      <p className="betrex-subtitle">
        Four interconnected phases that transform complexity into simplicity
      </p>

      <div className="betrex-content">
        <div className="betrex-left">
          <div className="betrex-step-circle">01</div>
          <img
            src="/images/box9.jpeg" // Replace with your actual image path
            alt="Migration Diagram"
            className="betrex-illustration"
          />
        </div>

        <div className="betrex-right">
          <div className="betrex-tag">
            🔍 Deep Analysis Phase
          </div>
          <h3 className="betrex-heading">
            Intelligent Migration Assessment
          </h3>
          <p className="betrex-description">
            Our AI-powered assessment engine scans your entire infrastructure,
            identifying dependencies, risks, and optimization opportunities with
            surgical precision.
          </p>

          <div className="betrex-cards">
            <div className="betrex-card">
              <div className="betrex-card-icon">📊</div>
              <div className="betrex-card-texts">
                <h4>Compatibility Matrix</h4>
                <p>Complete system compatibility analysis</p>
              </div>
            </div>

            <div className="betrex-card">
              <div className="betrex-card-icon">🔒</div>
              <div className="betrex-card-texts">
                <h4>Security Audit</h4>
                <p>Vulnerability assessment & risk scoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Betrex;
