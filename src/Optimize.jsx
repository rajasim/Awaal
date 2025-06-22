import React from "react";
import "./Optimize.css";

function Optimize() {
  return (
    <div className="optimize-section">
      <div className="optimize-content">
        <div className="optimize-left">
          <h2>
            <span className="highlight">Transform Your IT Infrastructure</span>
          </h2>
          <p className="description">
            Our comprehensive solutions are designed to give your business a competitive
            edge through reliable, secure, and scalable IT infrastructure.
          </p>
          <ul className="features-list">
            <li>
              <span className="check-icon">✔</span> Reduce downtime and improve business continuity
            </li>
            <li>
              <span className="check-icon">✔</span> Enhance security posture against evolving threats
            </li>
            <li>
              <span className="check-icon">✔</span> Scale resources efficiently as your business grows
            </li>
          </ul>
        </div>
        <div className="optimize-right">
          <div className="cta-box">
            <h3>Ready to optimize your IT infrastructure?</h3>
            <p>
              Schedule a free consultation with our expert team to discuss your specific
              needs.
            </p>
            <button className="cta-button">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Optimize;
