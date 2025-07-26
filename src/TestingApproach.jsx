import React from "react";
import "./TestingApproach.css";

const TestingApproach = () => {
  return (
    <div className="ta-section">
  <h2 className="ta-title">Our Testing Approach</h2>
  <div className="ta-flow">
    <div className="ta-box">
      <img src="/images/Testing1.png" alt="Reconnaissance" />
      <p>Reconnaissance</p>
    </div>
    <div className="ta-arrow">→</div>
    <div className="ta-box">
      <img src="/images/Testing2.png" alt="Automated Scanning" />
      <p>Automated Scanning</p>
    </div>
    <div className="ta-arrow">→</div>
    <div className="ta-box">
      <img src="/images/Testing3.png" alt="Manual Testing" />
      <p>Manual Testing</p>
    </div>
    <div className="ta-arrow">→</div>
    <div className="ta-box">
      <img src="/images/Testing4.png" alt="Safe Exploitation" />
      <p>Safe Exploitation</p>
    </div>
    <div className="ta-arrow">→</div>
    <div className="ta-box">
      <img src="/images/Testing5.png" alt="Reporting & Remediation" />
      <p>Reporting & Remediation</p>
    </div>
  </div>
</div>
  );
};

export default TestingApproach;
