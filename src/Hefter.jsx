import React from 'react';
import './Hefter.css';

function Hefter() {
  return (
    <div className="hefter-wrapper">
      {/* Background Video with inline styles */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/video/Recording 2025-06-30 110307-vmake.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hefter-content">
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
          <button className="btn-primary">Start Transformation</button>
          <button className="btn-outline">Explore Methodology</button>
        </div>
      </div>
    </div>
  );
}

export default Hefter;
