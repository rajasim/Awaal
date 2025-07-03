import React from "react";
import "./TechnologyPlatforms.css";

function TechnologyPlatforms() {
  return (
    <div className="tech-section">
      {/* Full Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        src="/video/WhatsApp Video 2025-06-16 at 10.54.29 PM.mp4" // Replace with your actual path
      />

      {/* Foreground Content */}
      <div className="tech-content">
        <h2 className="section-titlee">Technology & Platforms</h2>

        {/* Icon Boxes */}
        <div className="icon-grid">
          <div className="icon-box"><div className="icon">🖧</div><p>Hardware & Network</p></div>
          <div className="icon-box"><div className="icon">🖥️</div><p>Virtualization & OS</p></div>
          <div className="icon-box"><div className="icon">☁️</div><p>Cloud & Storage</p></div>
          <div className="icon-box"><div className="icon">📊</div><p>Monitoring Tools</p></div>
          <div className="icon-box"><div className="icon">🛡️</div><p>Compliance</p></div>
        </div>

        {/* CENTER Video Box (not removed!) */}
        <div className="ecosystem-box">
          <h3>Our Technology Ecosystem</h3>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="ecosystem-video-element"
            src="/video/Recording 2025-06-20 004214-vmake.mp4" // Replace path
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
