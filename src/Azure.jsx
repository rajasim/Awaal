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
        <h2 className="section-titleee">Certifications & Compliance Readiness</h2>
        <p className="section-subtitlew">
         
        </p>

        <div className="boxes-row">
          <div className="azure-box">
            <img src="/images/Certifications & Compliance Readiness1.png" className="box-img" />
            <h3 className="boxx-title">AWS Certified Solutions Architects</h3>
            <p className="boxx-desc">
              Expert architects designing secure, robust, and scalable cloud infrastructure
            </p>
          </div>

          <div className="azure-box">
            <img src="/images/Certifications & Compliance Readiness2.png" className="box-img" />
            <h3 className="boxx-title">Microsoft Azure Security Engineers</h3>
            <p className="boxx-desc">
              Specialized in implementing security controls and threat protection
            </p>
          </div>

          <div className="azure-box">
            <img src="/images/Certifications & Compliance Readiness3.png" className="box-img" />
            <h3 className="boxx-title">ISO/IEC 27001:2022 Lead Auditors</h3>
            <p className="boxx-desc">
              Ensuring compliance with international information security standards
            </p>
          </div>

          <div className="azure-box">
            <img src="/images/Certifications & Compliance Readiness4.png" className="box-img" />
            <h3 className="boxx-title">CompTIA Security+ Certified Experts</h3>
            <p className="boxx-desc">
              Professionals with validated security foundations and practical skills
            </p>
          </div>
        </div>

        <div className="button-wrapper">
      
        </div>
      </div>
    </div>
  );
}

export default Azure;
