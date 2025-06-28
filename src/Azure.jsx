import React from "react";
import "./Azure.css";

function Azure() {
  return (
    <div className="azure-section">
      <img
        src="/images/Screenshot 2025-06-25 125011.png" // Replace with your background image path
        alt="Background"
        className="azure-bg-image"
      />

      <div className="azure-content">
        <h2 className="section-title">Certifications & Compliance Readiness</h2>
        <p className="section-subtitle">
          We're backed by certified cloud professionals with industry-leading expertise
        </p>

        <div className="boxes-row">
          <div className="azure-box">
            <img src="/images/aws.png" className="box-img" />
            <h3 className="box-title">AWS Certified Solutions Architects</h3>
            <p className="box-desc">
              Expert architects designing secure, robust, and scalable cloud infrastructure
            </p>
          </div>

          <div className="azure-box">
            <img src="/images/azure.png" className="box-img" />
            <h3 className="box-title">Microsoft Azure Security Engineers</h3>
            <p className="box-desc">
              Specialized in implementing security controls and threat protection
            </p>
          </div>

          <div className="azure-box">
            <img src="/images/box8.jpeg" className="box-img" />
            <h3 className="box-title">ISO/IEC 27001:2022 Lead Auditors</h3>
            <p className="box-desc">
              Ensuring compliance with international information security standards
            </p>
          </div>

          <div className="azure-box">
            <img src="/images/box9.jpeg" className="box-img" />
            <h3 className="box-title">CompTIA Security+ Certified Experts</h3>
            <p className="box-desc">
              Professionals with validated security foundations and practical skills
            </p>
          </div>
        </div>

        <div className="button-wrapper">
          <button className="assessment-button">Schedule a Compliance Assessment</button>
        </div>
      </div>
    </div>
  );
}

export default Azure;
