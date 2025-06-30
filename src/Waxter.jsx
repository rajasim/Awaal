import React from "react";
import "./Waxter.css";

const Waxter = () => {
  return (
    <div className="waxter-container">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/video/Recording 2025-06-29 195644-vmake.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="waxter-overlay">
        <h1 className="waxter-heading">
          <span className="bold-text">Start Building Your </span>
          <span className="gradient-text">Vision Today</span>
        </h1>
        <p className="waxter-text">
          Need a custom app or software? Let&apos;s make it real. <br />
          Book a free consultation to discuss your idea with our development team.
        </p>
        <button className="waxter-button">
          📞 Schedule a Call →
        </button>
      </div>
    </div>
  );
};

export default Waxter;
