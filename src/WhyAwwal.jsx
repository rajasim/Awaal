import React from "react";
import "./WhyAwwal.css";

const WhyAwwal = () => {
  return (
    <div className="whyawwal-container">
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
        <source src="/video/Recording 2025-07-05 133442-vmake.mp4" type="video/mp4" />
      </video>

      <div className="whyawwal-content">
        <h2 className="whyawwal-heading">
          Why <span className="whyawwal-highlight">Awwal Security</span>
        </h2>
        <p className="whyawwal-text">
          At Awwal Security we solve the core challenges of security
  scalability and digital transformation. Whether a company is trying
  to protect data migrate to the cloud modernize its IT systems
  automate workflows or build custom software we offer integrated
  secure and future-ready solutions.
        </p>

        <div className="whyawwal-tags">
          <span className="whyawwal-tag">Data Protection</span>
          <span className="whyawwal-tag">Cloud Migration</span>
          <span className="whyawwal-tag">IT Modernization</span>
          <span className="whyawwal-tag">Workflow Automation</span>
          <span className="whyawwal-tag">Custom Software</span>
          <span className="whyawwal-tag">Website Development</span>
          <span className="whyawwal-tag">Migration</span>
        </div>

        <button className="whyawwal-button">Get Started Today</button>
      </div>
    </div>
  );
};

export default WhyAwwal;
