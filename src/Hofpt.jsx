import React from "react";
import "./Hoft.css";
import { useEffect } from "react";

const Hofpt = () => {
    useEffect(()=>{
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    },[])
  return (
    <div className="hm-wrapperer">
      <div className="hm-headline">
        <h1>
          <span className="hm-green">Cyber Security</span><br />
         
          <span className="hm-yellow">Discover. Analyze. Defend.</span><br></br>
           <span className="hm-green">Cyber threats evolve every day is your business prepared?</span><br />
         
        </h1>
      
      </div>

      <div className="hm-video-section">
        <video
          className="hm-radar-video"
          autoPlay
          loop
          muted
          playsInline
          src="/video/Recording 2025-07-01 182206-vmake.mp4" // Update with your actual video path
        />
        <div className="hm-video-overlay">
         
        </div>
      </div>

      <div className="hm-tags">
        {[
          "Vulnerability Assessment & Penetration Testing ",
          "Managed XDR / MXDR",
          "EDR / NGAV Protection",
          "Network Security",
          "GRC (Governance, Risk & Compliance)",
          
        ].map((tag, idx) => (
          <span className="hm-tag" key={idx}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Hofpt;
