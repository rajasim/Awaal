import React from "react";
import "./Haftrop.css"; // Ensure your CSS file supports this layout

const Haftrop = () => {
  return (
    <div className="haftrop-section">
      <div className="haftrop-content">
        {/* Left Side */}
        <div className="haftrop-left">
          <div className="haftrop-tag">🚀 Optimization & Support Phase</div>
          <h3 className="haftrop-heading">Continuous Performance Evolution</h3>
          <p className="haftrop-description">
            Migration is just the beginning. Our AI continuously optimizes your environment,
            predicts issues before they occur,  <br></br> ensures peak performance 24/7.
          </p>

          <ul className="haftrop-list">
            <li>⚡ <strong>Performance Optimization</strong>: AI-driven performance tuning and resource optimization</li>
            <li>💰 <strong>Cost Optimization</strong>: Continuous cost analysis and savings recommendations</li>
            <li>🔍 <strong>24/7 Monitoring</strong>: Round-the-clock threat monitoring and SLA support</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="haftrop-right">
          <div className="haftrop-step-circle">04</div>
          <img
            src="/images/box9.jpeg" // Update this path to match your image location
            alt="Continuous Performance Evolution Visual"
            className="haftrop-illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Haftrop;
