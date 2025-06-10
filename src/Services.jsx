import React from "react";
import "./ServicesSection.css";

function ServicesSection() {
  return (
    <div className="services-section">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        src="/video/WhatsApp Video 2025-06-06 at 11.51.21 PM.mp4"
      ></video>

      {/* All 5 cards inside the same container */}
      <div className="services-cards">
        <div className="service-card">
          <img src="/images/box1.jpeg" alt="Blog" className="card-image" />
          <div className="card-content">
            <h4>BLOG</h4>
            <p>
              Introducing the New Censys Threat Hunting Module: Proactive Defense
              for Modern Threats
            </p>
          </div>
        </div>

        <div className="service-card">
          <img src="/images/box2.jpeg" alt="Report" className="card-image" />
          <div className="card-content">
            <h4>REPORTS</h4>
            <p>
              Censys Recognized in Forrester’s Q1 2025 Report on External Threat
              Intelligence
            </p>
          </div>
        </div>

        <div className="service-card">
          <img src="/images/box3.jpeg" alt="Ebook" className="card-image" />
          <div className="card-content">
            <h4>EBOOKS</h4>
            <p>
              Attack Surface Management 101: Your Guide to Total Visibility in
              Healthcare
            </p>
          </div>
        </div>

        {/* Extra card 1 */}
        <div className="service-card">
          <img src="/images/box4.jpeg" alt="Tutorials" className="card-image" />
          <div className="card-content">
            <h4>TUTORIALS</h4>
            <p>
              Step-by-step guides to mastering cybersecurity and threat hunting.
            </p>
          </div>
        </div>

        {/* Extra card 2 */}
        <div className="service-card">
          <img src="/images/box5.jpeg" alt="Webinars" className="card-image" />
          <div className="card-content">
            <h4>WEBINARS</h4>
            <p>
              Join live sessions and learn from top experts in the industry.
            </p>
          </div>
        </div>
         <div className="service-card">
          <img src="/images/box6.jpeg" alt="Tutorials" className="card-image" />
          <div className="card-content">
            <h4>TUTORIALS</h4>
            <p>
              Step-by-step guides to mastering cybersecurity and threat hunting.
            </p>
          </div>
        </div>

        {/* Extra card 2 */}
        <div className="service-card">
          <img src="/images/box7.jpeg" alt="Webinars" className="card-image" />
          <div className="card-content">
            <h4>WEBINARS</h4>
            <p>
              Join live sessions and learn from top experts in the industry.
            </p>
          </div>
        </div>
         <div className="service-card">
          <img src="/images/box8.jpeg" alt="Tutorials" className="card-image" />
          <div className="card-content">
            <h4>TUTORIALS</h4>
            <p>
              Step-by-step guides to mastering cybersecurity and threat hunting.
            </p>
          </div>
        </div>

        {/* Extra card 2 */}
        <div className="service-card">
          <img src="/images/box9.jpeg" alt="Webinars" className="card-image" />
          <div className="card-content">
            <h4>WEBINARS</h4>
            <p>
              Join live sessions and learn from top experts in the industry.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ServicesSection;
