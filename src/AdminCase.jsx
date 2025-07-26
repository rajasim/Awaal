import React from "react";
import "./AdminCase.css";

const AdminCaseStudy = () => {
  return (
    <div className="case-wrapper">
      {/* Left: Article Content */}
      <div className="case-article">
        <h1 className="case-title">
          MSP Security Monitoring Strategy: Identity and Cloud Blind Spots
        </h1>
        <p className="case-author">Zach Dressander</p>

        <p className="case-intro">
          This is Part 3 of our 6-part series detailing our{" "}
          <a href="#" className="case-link">
            State of MSP Security Maturity Report 2025
          </a>{" "}
          and the strategies MSPs can use to break through the plateau.
        </p>

        <p>Your security dashboard shows green across the board. Endpoints protected, network monitored, firewall logs analyzed. By traditional IT standards, you’re covered.</p>
        <p>Then you get the call: "We think we’ve been breached."</p>
        <p>The forensics reveal an uncomfortable truth...</p>

        <h2 className="case-subheading">The Identity Monitoring Gap</h2>
        <p>Identity has become the primary attack vector...</p>

        <ul className="case-list">
          <li><strong>Authentication anomalies</strong> that signal compromise...</li>
          <li><strong>Privilege escalation attempts</strong> across connected systems...</li>
          <li><strong>Identity provider modifications</strong> that create persistence...</li>
        </ul>

        <h2 className="case-subheading">Getting Identity Monitoring Right</h2>
        <p>Start with these immediate implementation steps:</p>
      </div>

      {/* Right: Newsletter Signup */}
      <div className="newsletter-section">
        <div className="newsletter-left-img">
          <img src="./images/box9.jpeg" alt="Newsletter Visual" />
        </div>
        <div className="newsletter-content">
          <h2>Todyl updates</h2>
          <p>Sign-up to get the latest from Todyl sent straight to your inbox.</p>
          <label>
            <span>Business Email<span className="required">*</span></span>
            <input type="email" placeholder="you@yourcompany.com" />
          </label>
          <button>Sign-up now</button>
        </div>
      </div>
    </div>
  );
};

export default AdminCaseStudy;
