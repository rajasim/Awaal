import React, { useState, useEffect } from "react";
import "./SecurityCloud.css";

function SecurityCloud() {
  const [active, setActive] = useState("network"); // default active
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    handleResize(); // run on first load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // function to render content
  const renderContent = (type) => {
    switch (type) {
      case "network":
        return (
          <div className="content-box">
            <div className="blue-section">
              <h3>Cloud Deployment</h3>
              <p>
                Launch your applications with confidence. We design and deploy
                cloud architectures tailored to your business model, whether it's
                public, private, or hybrid cloud.
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
        );

      case "web":
        return (
          <div className="content-box">
            <div className="blue-section">
              <h3>Cloud Migration</h3>
              <p>
                Seamlessly migrate your infrastructure to the cloud with minimal
                disruption. From assessment to execution, we handle rehosting,
                refactoring, and full-stack transition.
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
        );

      case "performance":
        return (
          <div className="content-box">
            <div className="blue-section">
              <h3>Security & Compliance</h3>
              <p>
                Security-first strategies with compliance built in. We embed
                global standards like ISO 27001, HIPAA, and GDPR.
              </p>
              <ul>
                <li>Cloud-native firewall & encryption</li>
                <li>Identity & Access Management (IAM)</li>
                <li>Compliance audits & reporting</li>
                <li>Threat detection & response</li>
              </ul>
            </div>
            <div className="image-section">
              <img src="/images/cloudd3.gif" alt="Security & Compliance" />
            </div>
          </div>
        );

      case "email":
        return (
          <div className="content-box">
            <div className="blue-section">
              <h3>Monitoring & Management</h3>
              <p>
                Proactive cloud operations 24/7 with real-time visibility,
                automated checks, and SLA-backed support.
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
        );

      case "endpoint":
        return (
          <div className="content-box">
            <div className="blue-section">
              <h3>Scalable Virtual Environments</h3>
              <p>
                Elastic cloud environments that grow with your business. Scale
                horizontally and vertically to match demand.
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
        );

      default:
        return null;
    }
  };

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
          <button
            className={active === "network" ? "active" : ""}
            onClick={() => setActive("network")}
          >
            Cloud Deployment
          </button>
          {isMobile && active === "network" && renderContent("network")}

          <button
            className={active === "web" ? "active" : ""}
            onClick={() => setActive("web")}
          >
            Cloud Migration
          </button>
          {isMobile && active === "web" && renderContent("web")}

          <button
            className={active === "performance" ? "active" : ""}
            onClick={() => setActive("performance")}
          >
            Security & Compliance
          </button>
          {isMobile && active === "performance" && renderContent("performance")}

          <button
            className={active === "email" ? "active" : ""}
            onClick={() => setActive("email")}
          >
            Monitoring & Management
          </button>
          {isMobile && active === "email" && renderContent("email")}

          <button
            className={active === "endpoint" ? "active" : ""}
            onClick={() => setActive("endpoint")}
          >
            Scalable Virtual Environments
          </button>
          {isMobile && active === "endpoint" && renderContent("endpoint")}
        </div>

        {/* desktop layout: content always on the right */}
        {!isMobile && (
          <div className="right-content">{renderContent(active)}</div>
        )}
      </div>
    </div>
  );
}

export default SecurityCloud;
