import React from "react";
import "./Azul.css";

function Azul() {
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
            <h3 className="box-title">Cyber Threats Rising</h3>
            <p className="box-desc">
              Protect your business with our comprehensive security solutions
             


            </p>
           <ul className="box-liste">
  <li>VAPT Services</li>
  <li>EDR & MXDR</li>
  <li>Email Protection</li>
</ul>
          </div>

          <div className="azure-box">
            <img src="/images/azure.png" className="box-img" />
            <h3 className="box-title">Manual Operations</h3>
            <p className="box-desc">
              Speed up your business with AI-driven automation
            </p>
               <ul className="box-liste">
  <li>Process Automation</li>
  <li>AI Integration</li>
  <li>Workflow Optimization</li>
</ul>
          </div>

          <div className="azure-box">
            <img src="/images/box8.jpeg" className="box-img" />
            <h3 className="box-title">Cloud Migration</h3>
            <p className="box-desc">
              Secure, scalable cloud solutions without the confusion
            </p>
             <ul className="box-liste">
  <li>Secure Migration</li>
  <li>Scalable Infrastructure</li>
  <li>Risk Management</li>
</ul>
          </div>

          <div className="azure-box">
            <img src="/images/box9.jpeg" className="box-img" />
            <h3 className="box-title">Compliance & Security</h3>
            <p className="box-desc">
              Specialized secure infrastructure expertise
            </p>
             <ul className="box-liste">
  <li>HIPAA Compliance</li>
  <li>ISO 27001 Readiness</li>
  <li>Zero Trust Network</li>
</ul>
          </div>
        </div>

        <div className="button-wrapper">
          <button className="assessment-button">Schedule a Compliance Assessment</button>
        </div>
      </div>
    </div>
  );
}

export default Azul;
