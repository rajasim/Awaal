import React from 'react';
import './SecureOrganization.css';

const SecureOrganization = () => {
  return (
    <div className="secure-organization-wrapper">
      <div className="secure-organization-container">
        <div className="secure-organization-content">
          <h2>Ready to Secure Your Organization?</h2>
          <p>
            Our comprehensive security solutions provide the protection and documentation you need to stay secure in today’s threat landscape.
          </p>
          <div className="secure-organization-buttons">
            <button className="secure-btn-primary">Get Started Today</button>
            <button className="secure-btn-secondary">Explore Services</button>
          </div>
        </div>
        <div className="secure-organization-image">
          <img src="/images/box9.jpeg" alt="Security Visual" />
        </div>
      </div>
    </div>
  );
};

export default SecureOrganization;
