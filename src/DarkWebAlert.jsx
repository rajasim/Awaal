// DarkWebAlert.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./DarkWebAlert.css";

const DarkWebAlert = () => {
  const navigate = useNavigate();

  const handleScanNowClick = () => {
    navigate("/Form"); // Redirect to Form page
  };

  return (
    <div className="darkweb-alert">
      <div className="left">
        <h2>Your Credentials Might Already</h2>
        <h2>Be on the Dark Web</h2>
        <p>What’s your next move?</p>
        <button
          className="scan-now"
          onClick={handleScanNowClick}
        >
          SCAN NOW
        </button>
      </div>

      <div className="right">
        <div className="top-buttons">
          <button>Request demo</button>
          <button>Request callback</button>
        </div>
        <img
          src="/images/WhatsApp Image 2025-06-09 at 2.09.31 PM.jpeg"
          alt="Lock Diagram"
          className="lock-img"
        />
      </div>
    </div>
  );
};

export default DarkWebAlert;
