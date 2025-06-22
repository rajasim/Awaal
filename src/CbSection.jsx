import React from "react";
import "./CbSection.css";

const CbSection = () => {
  return (
    <div className="cb-section">
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
          zIndex: -1,
          
        }}
      >
        <source
          src="/video/WhatsApp Video 2025-06-17 at 11.46.51 AM.mp4"
          type="video/mp4"
        />
      </video>

      <div className="cb-content-wrapper">
        <div className="cb-heading-tag">● STRATEGIC ADVANTAGE</div>

        <h1 className="cb-title">
          Why IT <span>Infrastructure</span> Matters
        </h1>

        <p className="cb-subtitle">
          In today’s digital-first business landscape, your IT infrastructure isn’t just a
          technical foundation—it’s a strategic asset that directly impacts your organization’s
          performance, security, and ability to innovate.
        </p>

        <div className="cb-content">
          <div className="cb-left-box">
            <h3 className="cb-box-title">MODERN DATA CENTER</h3>
            <img
              src="/images/WhatsAppVideo2025-06-16at11.03.05PM-ezgif.com-video-to-gif-converter.gif"
              alt="Modern Data Center"
              className="cb-data-img"
            />
          </div>

          <div className="cb-right-box">
            <h3 className="cb-box-title-right">The Foundation of Digital Success</h3>
            <p className="cb-right-text">
              Your IT infrastructure is the backbone that supports every digital initiative,
              from day-to-day operations to transformative innovations. As businesses increasingly
              rely on technology, the quality and resilience of your infrastructure directly impacts:
            </p>

            <ul className="cb-points">
              <li>
                <strong>Operational Efficiency</strong><br />
                Modern infrastructure reduces maintenance costs and increases productivity through
                automation and optimized resource allocation.
              </li>
              <li>
                <strong>Business Agility</strong><br />
                Flexible infrastructure enables rapid response to market changes and faster deployment
                of new services and applications.
              </li>
              <li>
                <strong>Risk Mitigation</strong><br />
                Robust infrastructure protects against data loss, security breaches, and compliance
                violations that could damage your business.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CbSection;
