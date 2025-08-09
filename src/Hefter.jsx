import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hefter.css';

function Hefter() {
  const navigate = useNavigate();

  const handleStartTransformationClick = () => {
    navigate('/form'); // Redirects to your form page
  };

  return (
    <div className="hefter-wrapper">
      {/*  Background image */}
      <img
        src="/images/migrationright.jpg" 
        alt="Background"
        className="hefter-bg-img"
      />

      <div className="hefter-content">
        {/*  Left Content */}
        <div className="hefter-left">
          <div className="badge">🚀 Revolutionary Migration Methodology</div>

          <h1 className="hefter-title">
            Migration <span className="gradient-text">Reimagined</span>
          </h1>

          <p className="hefter-description">
            We don't just move your data—we transform your entire digital ecosystem with AI-powered precision,
            military-grade security, and zero-downtime execution.
          </p>

          <div className="hefter-tags">
            <span className="tag">🤖 AI-Driven Automation</span>
            <span className="tag">🔒 Quantum-Safe Security</span>
            <span className="tag">⚡ Instant Deployment</span>
          </div>

          <div className="hefter-buttons">
            <button className="btn-primary" onClick={handleStartTransformationClick}>
              Start Transformation
            </button>
          </div>
        </div>

        {/*  Right Side Image */}
        <div className="hefter-right">
          <img
            src="/images/migrationside.gif"
            alt="Visual Migration"
            className="hefter-right-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Hefter;
