import React from 'react';
import './watrex.css';

const Watrex = () => {
  return (
    <div className="watrex-container">
      <video
        className="watrex-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/L-vmake.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="watrex-content">
        <p className="watrex-label">Cloud Solutions</p>

        <h1 className="watrex-main-title">Ready to Elevate Your Cloud Strategy?</h1>

        <p className="watrex-description">
          Let's help you build a cloud environment that's secure, scalable, and cost-effective.
          Whether you're just getting started or expanding your existing architecture,
          we're here to guide you every step of the way.
        </p>

        <button className="watrex-consult-button">Book a Free Consultation</button>

        <div className="watrex-box-row">
          <div className="watrex-box">
            <h3>Secure</h3>
            <p>Enterprise-grade security for your cloud infrastructure</p>
          </div>
          <div className="watrex-box">
            <h3>Scalable</h3>
            <p>Grow your infrastructure as your business expands</p>
          </div>
          <div className="watrex-box">
            <h3>Cost-Effective</h3>
            <p>Optimize spending with our cloud cost management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watrex;
