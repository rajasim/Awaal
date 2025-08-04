import React, { useState } from "react";
import "./SecurityCloud.css";

function SecurityCloud() {
  const [active, setActive] = useState("network"); // Default active section

  return (
    <div className="security-wrapper">
      <div className="security-heading">
        <div className="heading-line"></div>
        <h2>What We Offer</h2>
        <div className="heading-line"></div>
        <p>Empower your operations with secure and scalable cloud technology.</p>
      </div>

      <div className="security-layout">
        <div className="left-buttons">
          <button className={active === "network" ? "active" : ""} onClick={() => setActive("network")}>Cloud Deployment</button>
          <button className={active === "web" ? "active" : ""} onClick={() => setActive("web")}>Cloud Migration</button>
          <button className={active === "performance" ? "active" : ""} onClick={() => setActive("performance")}>Security & Compliance</button>
          <button className={active === "email" ? "active" : ""} onClick={() => setActive("email")}>Monitoring & Management</button>
          <button className={active === "endpoint" ? "active" : ""} onClick={() => setActive("endpoint")}>Scalable Virtual Environments</button>
        </div>

        <div className="right-content">
          {active === "network" && (
            <div className="content-box">
              <div className="blue-section">
                <h3>Cloud Deployment</h3>
                <p>
                  Launch your applications with confidence. We design and deploy cloud architectures tailored to your business model, whether it's public, private, or hybrid cloud. Our team ensures smooth deployment with high availability, redundancy, and performance in mind.
                </p>
                <ul>
                  <li>Cloud architecture design</li>
                  <li>Public / Private / Hybrid setup</li>
                  <li>DevOps-enabled deployment pipelines</li>
                  <li>CI/CD automation support</li>
                </ul>
              </div>
              <div className="image-section">
                <img src="/images/cloudd1.gif" alt="Cloud Deployment" />
              </div>
            </div>
          )}

          {active === "web" && (
            <div className="content-box">
              <div className="blue-section">
                <h3>Cloud Migration</h3>
                <p>
                  Seamlessly migrate your infrastructure to the cloud. Our proven migration framework ensures minimal disruption to your operations. From assessment to execution, we handle app rehosting, refactoring, and full-stack cloud transition.
                </p>
                <ul>
                  <li>Legacy system analysis</li>
                  <li>Zero-downtime migration</li>
                  <li>Data integrity assurance</li>
                  <li>App modernization</li>
                </ul>
              </div>
              <div className="image-section">
                <img src="/images/cloudd2.gif" alt="Cloud Migration" />
              </div>
            </div>
          )}

          {active === "performance" && (
            <div className="content-box">
              <div className="blue-section">
                <h3>Security & Compliance</h3>
                <p>
                  Security-first cloud strategies. We embed security into every layer of your cloud ecosystem, ensuring compliance with global standards like ISO 27001, HIPAA, and GDPR.
                </p>
                <ul>
                  <li>Cloud native firewall & encryption</li>
                  <li>Identity & Access Management (IAM)</li>
                  <li>Compliance audits & reporting</li>
                  <li>Threat detection & response</li>
                </ul>
              </div>
              <div className="image-section">
                <img src="/images/cloudd3.gif" alt="Security & Compliance" />
              </div>
            </div>
          )}

          {active === "email" && (
            <div className="content-box">
              <div className="blue-section">
                <h3>Monitoring & Management</h3>
                <p>
                  Proactive cloud operations 24/7. Our managed services provide real-time visibility, automated health checks, and SLA backed support to keep your systems optimized and secure.
                </p>
                <ul>
                  <li>Resource utilization tracking</li>
                  <li>Predictive analytics</li>
                  <li>Automated alerts & incident response</li>
                  <li>Monthly performance reports</li>
                </ul>
              </div>
              <div className="image-section">
                <img src="/images/cloudd4.gif" alt="Monitoring & Management" />
              </div>
            </div>
          )}

          {active === "endpoint" && (
            <div className="content-box">
              <div className="blue-section">
                <h3>Scalable Virtual Environments</h3>
                <p>
                  Cloud elasticity that grows with your business. We build virtual environments that scale horizontally and vertically. Whether it's handling seasonal traffic or launching new products, we ensure your infrastructure adapts on demand.
                </p>
                <ul>
                  <li>Auto scaling groups</li>
                  <li>Load balancing solutions</li>
                  <li>Kubernetes orchestration</li>
                  <li>Multi-tenant architecture</li>
                </ul>
              </div>
              <div className="image-section">
                <img src="/images/cloudd5.gif" alt="Scalable Virtual Environments" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SecurityCloud;
