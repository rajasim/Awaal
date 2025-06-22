import React from 'react';
import './UnifiedPlatform.css';

const UnifiedPlatform = () => {
  return (
    <section className="unified-platform-section">
      <div className="unified-platform-container">
        <div className="unified-platform-left">
          <h2 className="unified-platform-heading">
            One unified platform for data, insights, and real-time action
          </h2>
          <ul className="unified-platform-list">
            <li>Data From Everywhere. Data You Can Trust. <span>+</span></li>
            <li>AI-Powered Insights That You Can See <span>+</span></li>
            <li>Act with Confidence <span>+</span></li>
            <li>Unify Your Tech Stack with Integrations & APIs <span>+</span></li>
            <li>Purpose-Built for Account-Based GTM <span>+</span></li>
          </ul>
        </div>
        <div className="unified-platform-right">
          <img src="/images/Screenshot 2025-06-15 132811.png" alt="Unified Platform Cube" />
        </div>
      </div>
    </section>
  );
};

export default UnifiedPlatform;
