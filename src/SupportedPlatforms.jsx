import React from 'react';
import './SupportedPlatforms.css';

const SupportedPlatforms = () => {
  return (
    <section className="platforms-section" style={{ backgroundImage: "url('/images/green-dots-on-white-background-30awtuhczbxaaqtq.jpg')" }}>
      <div className="platforms-content">
        <span className="platforms-badge">Cloud Expertise</span>
        <h2 className="platforms-title">Supported Platforms</h2>
        <div className="platforms-underline"></div>
        <p className="platforms-subtext">
          We provide comprehensive security solutions across all major cloud platforms and hybrid environments
        </p>

        <div className="platforms-grid">
          <div className="platform-card">
            <img src="/images/box9.jpeg" alt="AWS" className="platform-icon" />
            <h3>Amazon Web Services (AWS)</h3>
            <p>
              Comprehensive security solutions for AWS cloud infrastructure, services, and applications.
            </p>
          </div>

          <div className="platform-card">
            <img src="/images/azurelogo.png" alt="Azure" className="platform-icon" />
            <h3>Microsoft Azure</h3>
            <p>
              Advanced security and compliance solutions for Microsoft Azure cloud environments.
            </p>
          </div>

          <div className="platform-card">
            <img src="/images/gcplogo.png" alt="GCP" className="platform-icon" />
            <h3>Google Cloud Platform (GCP)</h3>
            <p>
              Specialized security solutions for Google Cloud Platform infrastructure and services.
            </p>
          </div>

          <div className="platform-card">
            <img src="/images/otherlogo.png" alt="Other" className="platform-icon" />
            <h3>Other Platforms</h3>
            <p>
              Security services tailored for additional cloud or hybrid environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedPlatforms;
