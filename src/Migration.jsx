import React from "react";
import "./Ellish.css";

function Migration() {
  return (
    <div className="ellish-section">
      {/* Background Image */}
      <img
        src="/images/GLOBAL TECHNOLOGY PRESENCE.png"
        alt="Background"
        className="ellish-bg"
      />

      {/* Left Content */}
      <div className="ellish-content">
        <h1>
          Trusted Migration Experts <br />
          <span>Migration Services</span>
        </h1>
        <p>
          Transform your business with our enterprise-grade migration solutions. <br />
          We ensure zero downtime, maximum security, and seamless transitions for your critical
        </p>

        <div className="ellish-tags">
          <span className="tag">✔ 99.9% Uptime</span>
          <span className="tag">🛡 Enterprise Security</span>
          <span className="tag">⚡ 24/7 Support</span>
        </div>

        <div className="ellish-buttons">
          <button className="btn-primary">Get Started</button>
        </div>
      </div>

      {/* Right Image */}
      <img
        src="/images/iMAEGETitle.gif"
        alt="Cloud"
        className="ellish-right-image"
      />
    </div>
  );
}

export default Migration;
