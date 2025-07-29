import React from 'react';
import './Atifex.css';

function Atifex() {
  return (
    <div className="migration-container">
      <h2 className="migration-title">What We Migrate</h2>
      <p className="migration-subtitle">
        Comprehensive migration solutions tailored to your business needs
      </p>

      <div className="migration-grid">

        <div className="migration-card">
          <div className="icon cloud">  <img src="/images/What We Migrate1.png" alt="Check" /></div>
          <h3>Cloud Migration</h3>
          <p>Migrate to AWS, Azure, or Google Cloud with minimal risk and maximum performance.</p>
          <span className="highlighttt green">✔ Zero Downtime</span>
        </div>

        <div className="migration-card">
        <div className="icon cloud">  <img src="/images/What We Migrate2.png" alt="Check" /></div>
          <h3>Email & Workspace</h3>
          <p>Shift from outdated systems to Google Workspace, Microsoft 365, or Zoho — smoothly and securely.</p>
          <span className="highlighttt green">✔ Secure Transfer</span>
        </div>

        <div className="migration-card">
          <div className="icon cloud">  <img src="/images/What We Migrate3.png" alt="Check" /></div>
          <h3>Data & Server</h3>
          <p>Move terabytes of business-critical data and applications with no data loss or downtime.</p>
          <span className="highlighttt green">✔ No Data Loss</span>
        </div>

        <div className="migration-card">
           <div className="icon cloud">  <img src="/images/What We Migrate4.png" alt="Check" /></div>
          <h3>Website Migration</h3>
          <p>Switch from platforms like WordPress, Wix, or legacy CMS to modern, high-performance frameworks — coded and optimized by our in-house developers.</p>
          <span className="highlighttt green">✔ Performance Optimized</span>
        </div>

        <div className="migration-card">
          <div className="icon cloud">  <img src="/images/What We Migrate5.png" alt="Check" /></div>
          <h3>Application & Database</h3>
          <p>From on-prem to cloud-native. From SQL to NoSQL. We modernize your stack.</p>
          <span className="highlighttt green">✔ Stack Modernization</span>
        </div>

      </div>
    </div>
  );
}
export default Atifex;