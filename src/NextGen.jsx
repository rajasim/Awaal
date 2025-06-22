import React from "react";
import "./NextGen.css";

function NextGen() {
  return (
    <section className="nextgen-video-section">
      {/* Background Video */}
      <div className="nextgen-video-wrapper">
        <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          
        }}
      >
        <source
          src="/video/WhatsApp Video 2025-06-16 at 10.12.10 PM.mp4"
          type="video/mp4"
        />
      </video>
      </div>

      {/* Content Section */}
      <div className="nextgen-container">
        <h2 className="nextgen-heading">Next Generation Platform</h2>
        <p className="nextgen-subheading">
          Empowering innovation through smarter digital solutions
        </p>

        {/* Row 1 */}
        <div className="nextgen-row">
          <div className="nextgen-box">
            <img className="nextgen-icon" src="/icons/ai.svg" alt="AI" />
            <h3 className="nextgen-title">AI Optimization</h3>
            <p className="nextgen-desc">
              Smart algorithms to automate and enhance performance.
            </p>
            <ul className="nextgen-list">
              <li>Real-time decisions</li>
              <li>Predictive analytics</li>
              <li>Auto-scaling resources</li>
            </ul>
          </div>

          <div className="nextgen-box">
            <img className="nextgen-icon" src="/icons/security.svg" alt="Security" />
            <h3 className="nextgen-title">Advanced Security</h3>
            <p className="nextgen-desc">
              Protecting your data with multi-layered security.
            </p>
            <ul className="nextgen-list">
              <li>Zero-trust framework</li>
              <li>AI-driven threat detection</li>
              <li>Compliance ready</li>
            </ul>
          </div>
        </div>

        {/* Row 2 */}
        <div className="nextgen-row">
          <div className="nextgen-box">
            <img className="nextgen-icon" src="/icons/cloud.svg" alt="Cloud" />
            <h3 className="nextgen-title">Cloud Integration</h3>
            <p className="nextgen-desc">
              Seamless integration with all major cloud platforms.
            </p>
            <ul className="nextgen-list">
              <li>Multi-cloud ready</li>
              <li>Continuous deployment</li>
              <li>High scalability</li>
            </ul>
          </div>

          <div className="nextgen-box">
            <img className="nextgen-icon" src="/icons/support.svg" alt="Support" />
            <h3 className="nextgen-title">24/7 Support</h3>
            <p className="nextgen-desc">
              Round-the-clock assistance to keep you going.
            </p>
            <ul className="nextgen-list">
              <li>Live chat & call</li>
              <li>Expert engineers</li>
              <li>Instant SLA response</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NextGen;
