import React from "react";
import "./Harirtox.css";

const Harirtox = () => {
  return (
    <div className="harirtox-section">
      <h1 className="harirtox-title">
        Ready to Transform <span>Your Infrastructure?</span>
      </h1>
      <p className="harirtox-subtitle">
        Join the revolution. Experience migration like never before with our
        quantum-powered, AI-driven methodology.
      </p>

      <div className="harirtox-buttons">
        <button className="primary-btn">Start Your Transformation</button>
        <button className="secondary-btn">Download Methodology</button>
      </div>

      <div className="harirtox-highlights">
        <div className="highlight-item">⭐ 99.9% Success Rate</div>
        <div className="highlight-item">🛡 Zero Data Loss</div>
        <div className="highlight-item">⚡ 3x Faster Migration</div>
      </div>
    </div>
  );
};

export default Harirtox;
