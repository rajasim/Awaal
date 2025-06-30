import React from "react";
import "./ITInfrastructurePage.css";

const ITInfrastructurePage = () => {
  return (
    <section className="infra-wrapper">
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
        }}
      >
        <source
          src="/video/WhatsApp Video 2025-06-16 at 6.51.33 PM.mp4"
          type="video/mp4"
        />
      </video>

      <div className="infra-content">
        <div className="infra-left">
          <span className="infra-badge">
            Enterprise-Grade IT Infrastructure
          </span>
          <h1>
            Next-Generation <br />
            <span className="glow-text">IT Infrastructure</span> <br />
            Solutions <span className="blinking-line" />
          </h1>
          <p>
            Transform your business with our comprehensive IT infrastructure
            solutions designed for maximum performance, security, and
            scalability.
          </p>

          <div className="infra-points">
            <div className="infra-point">
              <span className="infra-dot" />
              Server Infrastructure
            </div>
            <div className="infra-point">
              <span className="infra-dot" />
              Network Security
            </div>
            <div className="infra-point">
              <span className="infra-dot" />
              Cloud Integration
            </div>
            <div className="infra-point">
              <span className="infra-dot" />
              Disaster Recovery
            </div>
          </div>

          <div className="infra-butns">
            <button className="get-started">Get Started</button>
            <button className="view-solutions">View Solutions</button>
          </div>

          <div className="infra-stats">
            <div>
              <strong>99.99%</strong> Uptime
            </div>
            <div>
              <strong>24/7</strong> Support
            </div>
            <div>
              <strong>500+</strong> Clients
            </div>
          </div>
        </div>

        <div className="infra-right"></div>
      </div>

      {/* 🔽 New Trusted Logos Section BELOW the content */}
      <div className="infra-trusted">
        <div className="trusted-heading">
          Trusted by leading organizations worldwide
        </div>
        <div className="infra-logos">
          <span>ACME Corp</span>
          <span>TechVision</span>
          <span>InnovateCo</span>
          <span>FutureTech</span>
          <span>GlobalSys</span>
        </div>
      </div>
    </section>
  );
};

export default ITInfrastructurePage;
