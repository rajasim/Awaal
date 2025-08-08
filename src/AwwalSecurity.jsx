import React from "react";
import "./AwwalSecurity.css";

const AwwalSecurity = () => {
  return (
    <section className="awwal-section">
      <div className="awwal-badge">Superior Value</div>

      <h1 className="awwal-title">
        Why Choose <span className="awwal-highlight">Awwal ?</span>
      </h1>

      <p className="awwal-subtitle">
        We deliver enterprise grade security at 30 to 40% lower cost than big name firms with faster response and personal care.
      </p>

      <div className="awwal-main">
        <div className="awwal-left">
          <div className="awwal-card corporate">
            <h3>Big Corporate Firms</h3>
            <div className="points-grid">
              <span>✘ High Prices</span>
              <span>✘ Slow Response</span>
              <span>✘ Treat You Like #</span>
              <span>✘ Generic Solutions</span>
            </div>
          </div>

          <div className="awwal-card security">
            <h3>Awwal Security</h3>
            <div className="points-grid">
              <span>✔ Expert Led Services</span>
              <span>✔ Rapid Implementation</span>
              <span>✔ Personal Care</span>
              <span>✔ 30 to 40% Savings</span>
            </div>
          </div>
        </div>

        <div className="awwal-right">
          <h3 className="metrics-title">Performance Metrics</h3>

          <div className="metric">
            <div className="metric-label">Implementation Cost</div>
            <div className="metric-bar bar-green"></div>
            <div className="metric-value">40% Less</div>
          </div>

          <div className="metric">
            <div className="metric-label">Response Time</div>
            <div className="metric-bar bar-blue"></div>
            <div className="metric-value">3x Faster</div>
          </div>

          <div className="metric">
            <div className="metric-label">Service Quality</div>
            <div className="metric-bar bar-pink"></div>
            <div className="metric-value">95%</div>
          </div>

          <div className="awwal-savings">
           Helping businesses 
            <div className="awwal-savings-subtext">cut major operational costs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwwalSecurity;
