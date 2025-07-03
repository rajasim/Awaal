import React from "react";
import "./Hitoera.css";

const Hitoera = () => {
  return (
    <div className="hitoera-section">
      <div className="hitoera-content">
        {/* Left Side - Image */}
        <div className="hitoera-left">
          <div className="hitoera-step-circle">03</div>
          <div className="hitoera-image-box">
            <img
              src="/images/box9.jpeg" // Replace with your actual path
              alt="Secure Transfer Visual"
              className="hitoera-image"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="hitoera-right">
          <div className="hitoera-tag">🔒 Secure Execution Phase</div>
          <h3 className="hitoera-heading">Quantum-Safe Migration Execution</h3>
          <p className="hitoera-description">
            Every byte of data is protected with military-grade encryption during transfer.
            Our real-time monitoring ensures complete visibility and instant response capabilities.
          </p>

          <div className="hitoera-card">
            <div className="hitoera-card-heading">🔷 Advanced Security Features</div>
            <ul className="hitoera-feature-list">
              <li>🟠 End-to-end quantum encryption</li>
              <li>🟠 Instant rollback mechanisms</li>
              <li>🟠 Real-time threat detection</li>
              <li>🟠 Zero-downtime execution</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hitoera;
