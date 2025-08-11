import React from "react";
import { useNavigate } from "react-router-dom";
import "./Ellish.css";

function Ellish() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/Form"); // redirect to form page
  };

  return (
    <div className="ellish-section">
      {/* Background Image */}
      <img
        src="/images/bg1.jpg"
        alt="Background"
        className="ellish-bg"
      />
<div>
      {/* Left Content */}
      <div className="ellish-content">
        <h1>
          Enterprise-Grade <br />
          <span>Cloud Infrastructure</span>
        </h1>
        <p>
          Transform your business with our secure, scalable, and high performance
          cloud solutions. Deploy globally in seconds with 99.99% uptime and advanced
          data protection.
        </p>

        <div className="ellish-tags">
          <span className="tag">🔒 Enterprise Security</span>
          <span className="tag">⚡ High Performance</span>
          <span className="tag">🌍 Global Scale</span>
        </div>

        <div className="ellish-buttons">
          <button className="btn-primary" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>

      {/* Right Image */}
      <img
        src="/images/clodright.gif"
        alt="Cloud"
        className="ellish-right-image"
      />
      </div>
    </div>
  );
}

export default Ellish;
