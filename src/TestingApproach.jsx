import React from "react";
import "./TestingApproach.css";

const TestingApproach = () => {
  return (
    <div className="ta-section">
  <h2 className="ta-title">Our Testing Approach</h2>
  <div className="ta-flow">
    <div className="ta-box">
      <img src="/images/box1.jpeg" alt="Reconnaissance" />
      <p>Reconnaissance</p>
    </div>
    <div className="ta-arrow">→</div>
    <div className="ta-box">
      <img src="/images/box1.jpeg" alt="Automated Scanning" />
      <p>Automated Scanning</p>
    </div>
    <div className="ta-arrow">→</div>
    <div className="ta-box">
      <img src="/images/step3.png" alt="Manual Testing" />
      <p>Manual Testing</p>
    </div>
    <div className="ta-arrow">→</div>
    <div className="ta-box">
      <img src="/images/step4.png" alt="Safe Exploitation" />
      <p>Safe Exploitation</p>
    </div>
    <div className="ta-arrow">→</div>
    <div className="ta-box">
      <img src="/images/step5.png" alt="Reporting & Remediation" />
      <p>Reporting & Remediation</p>
    </div>
  </div>
</div>
  );
};

export default TestingApproach;
