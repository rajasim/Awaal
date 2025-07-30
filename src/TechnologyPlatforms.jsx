import React from "react";
import "./TechnologyPlatforms.css";

function TechnologyPlatforms() {
  return (
    <div className="tech-section">
      {/* Full Background Image (was video) */}
      <img
        src="/images/itinfrabg.png" // Replace with actual background image path
        alt="Background"
        className="background-image"
      />

      {/* Foreground Content */}
      <div className="tech-content">
        <h2 className="section-titlee">Technology & Platforms</h2>

        {/* Icon Boxes */}
        <div className="icon-grid">
          <div className="icon-box"><div className="icones">🖧</div><p>Hardware & Network</p></div>
          <div className="icon-box"><div className="icones">🖥️</div><p>Virtualization & OS</p></div>
          <div className="icon-box"><div className="icones">☁️</div><p>Cloud & Storage</p></div>
          <div className="icon-box"><div className="icones">📊</div><p>Monitoring Tools</p></div>
          <div className="icon-box"><div className="icones">🛡️</div><p>Compliance</p></div>
        </div>

        {/* Center Image Box (was video) */}
        <div className="ecosystem-box">
          <h3>Our Technology Ecosystem</h3>
          <img
            src="/images/itgif.gif" 
            alt="Technology Ecosystem"
            className="ecosystem-image"
          />
        </div>

        {/* Bottom Features */}
        <div className="feature-boxes">
          <div className="feature-card">
            <h4>🔧 Seamless Integration</h4>
            <p>We ensure platforms work together for optimal performance.</p>
          </div>
          <div className="feature-card">
            <h4>✅ Compliance Ready</h4>
            <p>Our solutions meet strict industry regulations.</p>
          </div>
          <div className="feature-card">
            <h4>🚀 Future-Proof</h4>
            <p>We keep your business ahead with modern technologies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyPlatforms;
