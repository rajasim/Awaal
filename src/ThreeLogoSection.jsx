import React from 'react';
import './SecureOrganization.css';

const SecureOrganization = () => {
  return (
    <div className="secure-org-wrapper">
      <div className="secure-org-container">
        <div className="secure-org-text">
          <h2>Trusted by Leading Organizations</h2>
          <p>
            Our platform is relied on by global businesses to secure data, prevent threats, and enable growth through robust cybersecurity.
          </p>
        </div>

        <div className="secure-org-logo-rotator">
          <div className="logo-slide-track">
            <img src="/images/logo1.png" alt="Logo 1" />
            <img src="/images/logo2.png" alt="Logo 2" />
            <img src="/images/logo3.png" alt="Logo 3" />
            <img src="/images/logo1.png" alt="Logo 1 duplicate" />
            <img src="/images/logo2.png" alt="Logo 2 duplicate" />
            <img src="/images/logo3.png" alt="Logo 3 duplicate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureOrganization;
