import React from "react";
import "./Videofoot.css";

function Videofoot() {
  return (
    <div className="video-section">
      <video
        src="/video/WhatsApp Video 2025-06-17 at 5.01.41 PM.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="bgg-video"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Videofoot;