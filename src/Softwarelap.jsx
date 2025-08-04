import React, { useState } from "react";
import "./Softwarelap.css";

function Softwarelap() {
  const [active, setActive] = useState("network");

  return (
    <div className="soft-wrapper">
      <div className="soft-heading">
        <div className="soft-heading-line"></div>
        <h2>What We Offer</h2>
        <div className="soft-heading-line"></div>
        <p>Unlock tailored software solutions that accelerate your business forward</p>
      </div>

      <div className="soft-layout">
        <div className="soft-left-buttons">
          <button className={active === "network" ? "active" : ""} onClick={() => setActive("network")}>Custom Software</button>
          <button className={active === "web" ? "active" : ""} onClick={() => setActive("web")}>Web Application Dev</button>
          <button className={active === "performance" ? "active" : ""} onClick={() => setActive("performance")}>Mobile App</button>
          <button className={active === "email" ? "active" : ""} onClick={() => setActive("email")}>API Dev & Integration</button>
        </div>

        <div className="soft-right-content">
          {active === "network" && (
            <div className="soft-content-box">
              <div className="soft-text-section">
                <h3>Build exactly what your business needs</h3>
                <p>
                  We design and develop bespoke software systems tailored to your unique workflows, customers, and market. Whether it’s ERP, CRM, or custom automation tools, our team delivers user-focused and scalable solutions.
                </p>
                <ul>
                  <li>Requirement analysis & UI/UX planning</li>
                  <li>Modular & maintainable architecture</li>
                  <li>Desktop & cloud based deployment</li>
                  <li>Post deployment support & enhancements</li>
                </ul>
              </div>
              <div className="soft-image-section">
                <img src="/images/soft1.jpg" alt="Custom Software" />
              </div>
            </div>
          )}

          {active === "web" && (
            <div className="soft-content-box">
              <div className="soft-text-section">
                <h3>Robust, scalable web apps built to perform.</h3>
                <p>Our web applications combine functional design with powerful backend systems to deliver seamless user experiences across all devices and browsers.</p>
                <ul>
                  <li>Progressive Web Apps (PWA)</li>
                  <li>Single Page Applications (SPA)</li>
                  <li>E-commerce portals, dashboards, CRMs</li>
                  <li>Responsive front end with React, Angular, or Vue</li>
                  <li>Secure backend with Node.js, Python, PHP, .NET</li>
                </ul>
              </div>
              <div className="soft-image-section">
                <img src="/images/soft2.jpg" alt="Web Application" />
              </div>
            </div>
          )}

          {active === "performance" && (
            <div className="soft-content-box">
              <div className="soft-text-section">
                <h3>Connect with users on the go.</h3>
                <p>
                  We craft intuitive and feature-rich mobile apps for both iOS and Android, optimized for performance, security, and user engagement.
                </p>
                <ul>
                  <li>Native & Cross platform (Flutter, React Native)</li>
                  <li>UX/UI design for mobile-first interaction</li>
                  <li>Integration with payment gateways, GPS, biometrics</li>
                  <li>App Store & Play Store deployment</li>
                </ul>
              </div>
              <div className="soft-image-section">
                <img src="/images/soft3.jpg" alt="Mobile App" />
              </div>
            </div>
          )}

          {active === "email" && (
            <div className="soft-content-box">
              <div className="soft-text-section">
                <h3>Connect your systems with smart integrations.</h3>
                <p>We build secure and well-documented APIs that power your app ecosystem. Whether integrating with third-party platforms or enabling microservices, we ensure seamless and secure data exchange.</p>
                <ul>
                  <li>RESTful & GraphQL API development</li>
                  <li>Third-party API integration (payment, SMS, maps, etc.)</li>
                  <li>API versioning, testing, and security</li>
                </ul>
              </div>
              <div className="soft-image-section">
                <img src="/images/soft4.jpg" alt="API Integration" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Softwarelap;
