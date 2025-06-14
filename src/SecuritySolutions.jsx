import React, { useState } from "react";
import "./SecuritySolutions.css";

function SecuritySolutions() {
  const [active, setActive] = useState(null);

  return (
    <div className="security-wrapper">
      <div className="security-heading">
        <div className="heading-line"></div>
        <h2>Protecting Your Digital Frontiers</h2>
        <div className="heading-line"></div>
        <p>Explore our solutions designed to secure your digital operations.</p>
      </div>

      <div className="security-layout">
        <div className="left-buttons">
          <button className={active === "network" ? "active" : ""} onClick={() => setActive("network")}>Network Security</button>
          <button className={active === "web" ? "active" : ""} onClick={() => setActive("web")}>Web App Security</button>
          <button className={active === "performance" ? "active" : ""} onClick={() => setActive("performance")}>Application Performance</button>
          <button className={active === "email" ? "active" : ""} onClick={() => setActive("email")}>Email Security</button>
          <button className={active === "endpoint" ? "active" : ""} onClick={() => setActive("endpoint")}>Endpoint Protection</button>
        </div>

        <div className="right-content">
          {active === "network" && (
            <div className="content-box">
              <div className="blue-section">
                <h3>Network Security</h3>
                <p>Protect your internal IT infrastructure from external attacks with advanced DDoS mitigation and traffic analysis.</p>
                <ul>
                  <li>Network DDoS Protection</li>
                  <li>NetFlow DDoS Analyzer</li>
                </ul>
              </div>
              <div className="image-section">
                <img src="/images/Screenshot 2025-06-13 001553.png" alt="Network Security" />
              </div>
            </div>
          )}

          {active === "web" && (
            <div className="content-box">
              <div className="blue-section">
                <h3>Web Application Security</h3>
                <p>Defend web apps and APIs from bots and attacks with intelligent filtering and monitoring.</p>
                <ul>
                  <li>Web Firewall</li>
                  <li>Bot Management</li>
                  <li>API Shield</li>
                </ul>
              </div>
              <div className="image-section">
                <img src="/images/web.png" alt="Web Application Security" />
              </div>
            </div>
          )}

          {active === "performance" && (
            <div className="content-box">
              <div className="blue-section">
                <h3>Application Performance</h3>
                <p>Deliver fast and reliable experiences with performance tuning and global content delivery.</p>
                <ul>
                  <li>Global CDN</li>
                  <li>Smart Caching</li>
                  <li>Load Balancer</li>
                </ul>
              </div>
              <div className="image-section">
                <img src="/images/performance.png" alt="Application Performance" />
              </div>
            </div>
          )}

          {active === "email" && (
            <div className="content-box">
              <div className="blue-section">
                <h3>Email Security</h3>
                <p>Protect your communication channels with real-time email scanning and phishing detection.</p>
                <ul>
                  <li>Spam Filtering</li>
                  <li>Phishing Detection</li>
                  <li>Email Encryption</li>
                </ul>
              </div>
              <div className="image-section">
                <img src="/images/email.png" alt="Email Security" />
              </div>
            </div>
          )}

          {active === "endpoint" && (
            <div className="content-box">
              <div className="blue-section">
                <h3>Endpoint Protection</h3>
                <p>Secure devices and prevent malware threats with advanced endpoint monitoring.</p>
                <ul>
                  <li>Antivirus & Malware Protection</li>
                  <li>Device Access Control</li>
                  <li>Endpoint Detection & Response (EDR)</li>
                </ul>
              </div>
              <div className="image-section">
                <img src="/images/endpoint.png" alt="Endpoint Protection" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SecuritySolutions;
