import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-left">
        <video
          className="about-left-video"
          src="/video/b.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="about-right">
        <h1 className="about-title">
          Internet Intelligence You <br />
          Can Trust. <span className="head">Security</span><br />
          <h3 className="head">Insights You Can Act On.</h3>
        </h1>
        <p className="about-description">
          Censys is the security community’s trusted source for Internet visibility
          and intelligence. Powered by our real-time, global Internet Map, Censys
          enables security teams to cut through the noise, to immediately remediate
          today’s threats, and to stay ahead of attackers.
        </p>
        <button className="about-button">
          Request demo <span className="about-button-icon">⟶</span>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
