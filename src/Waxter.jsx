import React from "react";
import "./Waxter.css";

const Waxter = () => {
  return (
    <div className="waxter-container">
      {/* Background Image */}
     

      <div className="waxter-wrapper">
        {/* Left Content */}
        <div className="waxter-overlay">
          <h1 className="waxter-heading">
            <span className="bold-text">Start Building Your </span>
            <span className="gradient-text">Vision Today</span>
          </h1>
          <p className="waxter-text">
            Need a custom app or software? Let&apos;s make it real. <br />
            Book a free consultation to discuss your idea with our development team.
          </p>
          <button className="waxter-button">📞 Schedule a Call →</button>
        </div>

        {/* Right Image */}
        <div className="waxter-image">
          <img src="/images/softdbotm.gif" alt="Right Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Waxter;
