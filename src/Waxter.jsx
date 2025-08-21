import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Waxter.css";

const Waxter = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="waxter-container">
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
          {/* Button now uses navigate directly as per your request */}
          <button className="waxter-button" onClick={() => navigate("/form")}>
            📞 Schedule a Call →
          </button>
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
