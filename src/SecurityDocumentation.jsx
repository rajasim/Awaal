import React from "react";
import "./SecurityDocumentation.css";

const SecurityDocumentation = () => {
  return (
    <div className="documentation-wrapper">
      <div className="documentation-box">
        <div className="doc-left-section">
          <h2 className="doc-heading">Complete Security Documentation</h2>
          <p className="doc-subtext">
            All our services include comprehensive documentation to help you understand your security posture and make informed decisions.
          </p>

          <ul className="doc-list">
            <li>Executive summaries for leadership teams</li>
            <li>Technical reports for IT and security teams</li>
            <li>Compliance evidence for regulatory requirements</li>
            <li>Actionable remediation plans with prioritization</li>
          </ul>
        </div>

        <div className="doc-right-section">
          <img src="/images/Screenshot 2025-06-14 225224.png" alt="Documentation Icon" className="doc-icon" />
        </div>
      </div>
    </div>
  );
};

export default SecurityDocumentation;
