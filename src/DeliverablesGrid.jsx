import React, { useEffect, useState } from "react";
import "./DeliverablesGrid.css";

const DeliverablesGrid = () => {
  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateBars(true), 100);
  }, []);

  return (
    <div className="deliverables-grid-wrapper">
      {/* Box 1 */}
      <div className="deliverable-card-box box-highlight-mxdr">
        <h3 className="card-box-heading">Managed XDR (MXDR)</h3>
        <p className="card-box-subtext">Real-time threat detection & response.</p>

        <div className="status-info-block">
          {["Log Ingestion", "Threat Detection", "24/7 SOC Monitoring"].map((label, index) => (
            <div className="status-info-line" key={index}>
              <span>{label}</span>
              <span>Complete</span>
              <div className="status-bar-line">
                <div className={`status-fill-animate ${animateBars ? "fill-on-visible" : ""}`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="key-highlights-list">
          <ul>
            <li>✔ AI-powered threat hunting</li>
            <li>✔ Full visibility into endpoints and servers</li>
            <li>✔ Monthly threat analysis reports</li>
          </ul>
        </div>

        <button className="action-request-btn yellow-theme">Request MXDR</button>
      </div>

      {/* Box 2 */}
      <div className="deliverable-card-box box-highlight-edr">
        <h3 className="card-box-heading">Endpoint Detection & Response (EDR)</h3>
        <p className="card-box-subtext">Defend against endpoint attacks effectively.</p>

        <div className="status-info-block">
          {["EDR Agent Setup", "Incident Response", "Remediation"].map((label, index) => (
            <div className="status-info-line" key={index}>
              <span>{label}</span>
              <span>Complete</span>
              <div className="status-bar-line green">
                <div className={`status-fill-animate ${animateBars ? "fill-on-visible" : ""}`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="key-highlights-list">
          <ul>
            <li>✔ Advanced malware detection</li>
            <li>✔ Root cause analysis</li>
            <li>✔ Real-time endpoint containment</li>
          </ul>
        </div>

        <button className="action-request-btn green-theme">Request EDR</button>
      </div>

      {/* Box 3 - BLUE Theme */}
      <div className="deliverable-card-box box-highlight-blue">
        <h3 className="card-box-heading">Network Visibility</h3>
        <p className="card-box-subtext">Deep network traffic analytics.</p>

        <div className="status-info-block">
          {["Traffic Analysis", "Anomaly Detection", "Protocol Visibility"].map((label, index) => (
            <div className="status-info-line" key={index}>
              <span>{label}</span>
              <span>Complete</span>
              <div className="status-bar-line blue">
                <div className={`status-fill-animate ${animateBars ? "fill-on-visible" : ""}`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="key-highlights-list">
          <ul>
            <li>✔ DPI and network forensics</li>
            <li>✔ Real-time threat alerts</li>
            <li>✔ Encrypted traffic monitoring</li>
          </ul>
        </div>

        <button className="action-request-btn blue-theme">Request Network</button>
      </div>

      {/* Box 4 - PINK Theme */}
     <div className="deliverable-card-box box-highlight-grc">
  <h3 className="card-box-heading">Governance, Risk & Compliance (GRC)</h3>
  <p className="card-box-subtext">Ensure regulatory compliance & risk control.</p>

  <div className="status-info-block">
    {["Policy Creation", "Risk Assessment", "Audit Reports"].map((label, index) => (
      <div className="status-info-line" key={index}>
        <span>{label}</span>
        <span>Complete</span>
        <div className="status-bar-line teal">
          <div className={`status-fill-animate ${animateBars ? "fill-on-visible" : ""}`}></div>
        </div>
      </div>
    ))}
  </div>

  <div className="key-highlights-list">
    <ul>
      <li>✔ Compliance with ISO, NIST, SOC2</li>
      <li>✔ Detailed risk matrices</li>
      <li>✔ Periodic audit preparation</li>
    </ul>
  </div>

  <button className="action-request-btn teal-theme">Request GRC Services</button>
</div>
    </div>
  );
};

export default DeliverablesGrid;
