import React from "react";
import "./Hoft.css";

function UniqueHero() {
  



  return (
    <div className="hm-wrapperer">
      <div className="hm-headline">
        <h1>
          <span className="hm-green">Designing, Securing, and Developing </span><br />
         
          <span className="hm-yellow">Websites that Power the Future of Your Business</span>
        </h1>
        <div className="hm-subscribe">
          <input type="email" placeholder="Enter work email" className="hm-input" />
          <button className="hm-try-btn">Try for free</button>
        </div>
      </div>

      <div className="hm-video-section">
        <video
          className="hm-radar-video"
          autoPlay
          loop
          muted
          playsInline
          src="/video/wdbg.mp4" // Update with your actual video path
        />
        <div className="hm-video-overlay">
         
        </div>
      </div>

      <div className="hm-tags">
        {[
          
        ].map((tag, idx) => (
          <span className="hm-tag" key={idx}>{tag}</span>
        ))}
      </div>
    </div>
  );
};




export default UniqueHero;
