import React from "react";
import "./Hotel.css";

const Hotel = () => {
  return (
    <div className="hotel-wrapper">
      <div className="hotel-container">

        {/* Left Side: Smart Healthcare AI */}
        <div className="hotel-left">
          <img src="/images/Health.gif" alt="Smart Healthcare AI" className="hotel-image" />

          <h2 className="hotel-section-title red">Smart Healthcare AI System</h2>
          <p className="hotel-section-sub red">
            120+ Staff Empowered &nbsp;&nbsp; AI Powered Analytics &nbsp;&nbsp; Real time Processing
          </p>

          <h3 className="hotel-section-heading">Smart Healthcare AI</h3>
          <p className="hotel-section-description">
            Developed an AI powered healthcare management system for a 120+ staff hospital in Maharashtra,
            eliminating data lags and optimizing medical workflows with intelligent automation.
          </p>

          <ul className="hotel-features">
            <li><span className="dot red"></span>Real time lab result processing</li>
            <li><span className="dot blue"></span>24/7 cloud based access</li>
            <li><span className="dot purple"></span>AI-powered medical analysis</li>
            <li><span className="dot pink"></span>Intelligent staff dashboards</li>
          </ul>

          <div className="hotel-metrics">
            <div className="metric-box">
              <div className="metric-number red">120+</div>
              <div className="metric-label">Staff Empowered</div>
            </div>
            <div className="metric-box">
              <div className="metric-number red">AI</div>
              <div className="metric-label">Powered</div>
            </div>
          </div>
        </div>

        {/* Right Side: Hotel Booking Platform */}
        <div className="hotel-right">
          <img src="/images/Hotel.gif" alt="Hotel Booking Platform" className="hotel-image" />

          <h2 className="hotel-section-title yellow">Hotel Booking Platform</h2>
          <p className="hotel-section-sub yellow">
            &lt;3 Min Booking &nbsp;&nbsp; 100% Success Rate &nbsp;&nbsp; +40% Mobile Growth
          </p>

          <h3 className="hotel-section-heading">Hotel Booking Platform</h3>
          <p className="hotel-section-description">
            Built a lightning-fast hotel booking platform with sub 3 minute booking process, 100% success rate,
            and 40% increase in mobile conversions through optimized UX design.
          </p>

          <div className="hotel-techstack-wrapper">
            <div className="hotel-techstack">
              <span className="tech java">Java</span>
              <span className="tech dotnet">.NET</span>
              <span className="tech angular">Angular</span>
              <span className="tech spring">Spring Boot</span>
              <span className="tech vps">VPS</span>
              <span className="tech razorpay">Razorpay</span>
            </div>
          </div>

          <div className="hotel-metrics">
            <div className="metric-box">
              <div className="metric-number yellow">&lt;3</div>
              <div className="metric-label">Min Booking</div>
            </div>
            <div className="metric-box">
              <div className="metric-number yellow">100%</div>
              <div className="metric-label">Success</div>
            </div>
            <div className="metric-box">
              <div className="metric-number yellow">+40%</div>
              <div className="metric-label">Mobile</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hotel;
