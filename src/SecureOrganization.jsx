import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SecureOrganization.css';

const SecureOrganization = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/Form"); // Redirect to Form page
  };

  return (
    <div className="secure-organization-wrapper">
      <div className="secure-organization-container">
        <div className="secure-organization-content">
          <h2>Ready to Secure Your Organization?</h2>
          <p>
            Our comprehensive security solutions provide the protection and documentation you need to stay secure in today’s threat landscape.
          </p>
          <div className="secure-organization-buttons">
            <button
              className="secure-btn-primary"
              onClick={handleGetStartedClick}
            >
              Get Started Today
            </button>
          </div>
        </div>
        <div className="secure-organization-image">
          <img src="/images/https.jpg" alt="Security Visual" />
        </div>
      </div>
    </div>
  );
};

export default SecureOrganization;
