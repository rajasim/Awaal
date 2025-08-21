import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Optimize.css";

function Optimize() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="optimize-section">
      <div className="optimize-content">
        <div className="optimize-left">
          <h2>
            <span className="highlightre">Transform Your IT Infrastructure</span>
          </h2>
          <p className="descriptione">
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
            {/* Corrected the onClick to directly use navigate("/form") */}
            <button 
              className="cta-button" 
              onClick={() => navigate("/form")} // This directly uses navigate("/form")
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Optimize;
