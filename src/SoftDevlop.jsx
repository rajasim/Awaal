import React from "react";
import "./SoftDevelopSection.css";

const SoftDevelop = () => {
  return (
    <div className="softdevelop-section">
      {/* Background Image */}
      <img
        src="/images/webdevlobg.jpg"
        alt="Background"
        className="softdevelop-bg-img"
      />

      <div className="softdevelop-content-wrapper">
        <div className="softdevelop-heading-tag">● STRATEGIC ADVANTAGE</div>

        <h1 className="softdevelop-title">
          Why IT <span>Infrastructure</span> Matters
        </h1>

        <p className="softdevelop-subtitle">
          In today’s digital-first business landscape, your IT infrastructure isn’t just a
          technical foundation—it’s a strategic asset that directly impacts your organization’s
          performance, security, and ability to innovate.
        </p>

        <div className="softdevelop-content">
          <div className="softdevelop-left-box">
            <h3 className="softdevelop-box-title">MODERN DATA CENTER</h3>
            <img
              src="/images/robot side.gif"
              alt="Modern Data Center"
              className="softdevelop-data-img"
            />
          </div>

          <div className="softdevelop-right-box">
            <h3 className="softdevelop-box-title-right">The Foundation of Digital Success</h3>
            <p className="softdevelop-right-text">
              Your IT infrastructure is the backbone that supports every digital initiative,
              from day-to-day operations to transformative innovations. As businesses increasingly
              rely on technology, the quality and resilience of your infrastructure directly impacts:
            </p>

            <ul className="softdevelop-points">
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

export default SoftDevelop;
