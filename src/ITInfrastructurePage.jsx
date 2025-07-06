import React from "react";
import "./ITInfrastructurePage.css";

const ITInfrastructurePage = () => {
  return (
    <section className="infra-wrapper">
      {/* Background Image */}
      <img
        src="/images/Screenshot 2025-07-06 150616.png"
        alt="Background"
        className="infra-background"
      />

      {/* Content Section */}
      <div className="infra-content">
        {/* Left Side */}
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
            solutions designed for maximum performance security and scalability.
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
            <div><strong>99.99%</strong> Uptime</div>
            <div><strong>24/7</strong> Support</div>
            <div><strong>500+</strong> Clients</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="infra-right">
          <img
            src="/images/Recording2025-07-06150739-ezgif.com-video-to-gif-converter.gif"
            alt="Dashboard"
            className="infra-dashboard-img"
          />
        </div>
      </div>

      {/* Trusted Logos */}
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
