import React from "react";
import "./UniqueHero.css";

function UniqueHero() {
  return (
    <div className="video-sectionn">
      <video
        src="/video/vid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="bgo-video"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default UniqueHero;
