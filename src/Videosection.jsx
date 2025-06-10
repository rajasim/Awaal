import React from "react";
import "./YourComponent.css";

function Videosection() {
  return (
    <div className="video-section">
      <video
        src="/video/WhatsApp Video 2025-06-06 at 11.15.09 PM.mp4"
        autoPlay
        loop
        muted
        controls
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Videosection;
