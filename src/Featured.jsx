import React from 'react';
import './featured.css';

const Featured = () => {
  return (
    <div className="featured-section">
      <div className="featured-container">
        <div className="featured-left">
          <span className="featured-badge">Featured Solution</span>
          <h2 className="featured-heading">Advanced Threat Protection Platform</h2>
          <p className="featured-description">
            Our flagship solution combines AI-powered threat detection, real-time monitoring,
            and automated response capabilities to provide comprehensive protection against
            sophisticated cyber threats.
          </p>

          <ul className="featured-list">
            <li>
              <span className="check-icon">✔</span>
              <div>
                <strong>24/7 Threat Monitoring</strong><br />
                Continuous surveillance of your network and systems to detect suspicious activities.
              </div>
            </li>
            <li>
              <span className="check-icon">✔</span>
              <div>
                <strong>AI-Powered Analysis</strong><br />
                Machine learning algorithms that adapt to evolving threats and reduce false positives.
              </div>
            </li>
            <li>
              <span className="check-icon">✔</span>
              <div>
                <strong>Automated Response</strong><br />
                Immediate containment actions to mitigate threats before they can cause damage.
              </div>
            </li>
          </ul>

          <button className="request-button">Request Demo</button>
        </div>

        <div className="featured-right">
          <img
            src="/images/Screenshot 2025-06-14 224536.png"
            alt="Threat Dashboard"
            className="featured-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
