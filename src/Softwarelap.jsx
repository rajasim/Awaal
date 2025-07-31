import React, { useState } from "react";
import "./SecuritySolutions.css";

function Softwarelap() {
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
          <button className={active === "network" ? "active" : ""} onClick={() => setActive("network")}>Custom Software</button>
          <button className={active === "web" ? "active" : ""} onClick={() => setActive("web")}>Web Application Dev</button>
          <button className={active === "performance" ? "active" : ""} onClick={() => setActive("performance")}>Mobile App</button>
          <button className={active === "email" ? "active" : ""} onClick={() => setActive("email")}>API Dev & Integration</button>
        </div>

        <div className="right-content">
          {active === "network" && (
            <div className="content-box">
              <div className="blue-section">
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
              <div className="image-section">
                <img src="/images/soft1.jpg" alt="Network Security" />
              </div>
            </div>
          )}

          {active === "web" && (
            <div className="content-box">
              <div className="blue-section">
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
              <div className="image-section">
                <img src="/images/soft2.jpg" alt="Web Application Security" />
              </div>
            </div>
          )}

          {active === "performance" && (
            <div className="content-box">
              <div className="blue-section">
                <h3>Connect with users on the go.</h3>
                <p>
                  We craft intuitive and feature-rich mobile apps for both iOS and Android, optimized for performance, security, and user engagement. Whether you're building a consumer-facing app or an internal enterprise tool, we’ve got you covered.
                </p>
                <ul>
                  <li>Native & Cross platform (Flutter, React Native)</li>
                  <li>UX/UI design for mobile-first interaction</li>
                  <li>Integration with payment gateways, GPS, biometrics</li>
                  <li>App Store & Play Store deployment</li>
                </ul>
              </div>
              <div className="image-section">
                <img src="/images/soft3.jpg" alt="Application Performance" />
              </div>
            </div>
          )}

          {active === "email" && (
            <div className="content-box">
              <div className="blue-section">
                <h3>Connect your systems with smart integrations.</h3>
                <p>We build secure and well-documented APIs that power your app ecosystem. Whether integrating with third-party platforms or enabling microservices, we ensure seamless and secure data exchange.</p>
                <ul>
                  <li>RESTful & GraphQL API development</li>
                  <li>Third-party API integration (payment, SMS, maps, etc.)</li>
                  <li>API versioning, testing, and security</li>
                </ul>
              </div>
              <div className="image-section">
                <img src="/images/soft4.jpg" alt="Email Security" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Softwarelap;
