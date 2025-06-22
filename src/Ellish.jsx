import React from "react";
import "./ellish.css";

function Ellish() {
  return (
    <div className="ellish-section">
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(0.55)",
        }}
      >
        <source src="/video/BG4K.mp4" type="video/mp4" />
      </video>

      <div className="ellish-content">
        <h1>
          Enterprise-Grade <br />
          <span>Cloud Infrastructure</span>
        </h1>
        <p>
          Transform your business with our secure, scalable, and
          high-performance cloud solutions. Deploy globally in seconds with
          99.99% uptime and advanced data protection.
        </p>

        <div className="ellish-tags">
          <span className="tag">🔒 Enterprise Security</span>
          <span className="tag">⚡ High Performance</span>
          <span className="tag">🌍 Global Scale</span>
        </div>

        <div className="ellish-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">View Solutions</button>
        </div>
      </div>
    </div>
  );
}

export default Ellish;
