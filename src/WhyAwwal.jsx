import React from "react";
import "./WhyAwwal.css";

const WhyAwwal = () => {
  return (
    <div className="whyawwal-container">
      {/* Background Image */}
      <img
        src="/images/wvd .jpg" // ✅ Your background image
        alt="Background"
        className="whyawwal-bg-img"
      />

      {/* Main Content Area */}
      <div className="whyawwal-wrapper">
        {/* Left Side Text Content */}
        <div className="whyawwal-left">
          <h2 className="whyawwal-heading">
            Why <span className="whyawwal-highlight">Awwal </span>
          </h2>
          <p className="whyawwal-text">
            At Awwal Security we solve the core challenges of security scalability and digital transformation.
            Whether a company is trying to protect data, migrate to the cloud, modernize its IT systems,
            automate workflows or build custom software  we offer integrated, secure and future-ready solutions.
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

        {/* Right Side Image */}
        <div className="whyawwal-right">
          <img
            src="/images/ayxx.gif" // ✅ Replace with your image path
            alt="Security Visual"
            className="whyawwal-right-img"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyAwwal;
