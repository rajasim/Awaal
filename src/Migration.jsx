import React from "react";
import "./Migration.css";

const Migration = () => {
  return (
    <div className="migration-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/video/Recording 2025-06-30 110124-vmake.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <center><div className="migration-overlay">
        <div className="migration-tag">✅ Trusted Migration Experts</div>
        <h1 className="migration-title">Migration Services</h1>
        <h2 className="migration-subtitle">by Awwal Security</h2>

        <div className="migration-highlights">
          <span>Seamless</span>
          <span>Secure</span>
          <span>Scalable</span>
        </div>

        <p className="migration-description">
          Transform your business with our enterprise-grade migration solutions. <br />
          We ensure zero downtime, maximum security, and seamless transitions for your critical systems.
        </p>

        <div className="migration-buttons">
          <button className="btn-primary">Start Your Migration</button>
          <button className="btn-secondary">Learn More</button>
        </div>

        <div className="migration-footer">
          <span>✔ 99.9% Uptime</span>
          <span>🛡 Enterprise Security</span>
          <span>⚡ 24/7 Support</span>
        </div>
      </div>
      </center>
    </div>
  );
};

export default Migration;
