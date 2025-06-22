import React, { useEffect, useRef } from "react";
import "./DeliverablesGrid.css";

const DeliverablesGrid = () => {

  const observeref = useRef([]);
  useEffect(() => {
    const observer = (entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll(".status-fill-animate");
          bars.forEach(bar => {
            bar.style.width = "100%";
            bar.style.transition = "width 3s ease"
          })

        }
      })
    })
    const options = {
      root: null,
      rootMargin: "10%",
      threshold: 0.5
    }

    if (observeref.current) {
      const intersectionObserver = new IntersectionObserver(observer, options);
      observeref.current.forEach(x => intersectionObserver.observe(x))
    }



  }, []);

  return (
    <div className="deliverables-grid-wrapper">
      {/* Box 1 */}
      <div className="deliverable-card-box box-highlight-mxdr">
        <h3 className="card-box-heading">Managed XDR (MXDR)</h3>
        <p className="card-box-subtext">Real-time threat detection & response.</p>

        <div className="status-info-block" ref={el => observeref.current[0] = el}>
          {["Log Ingestion", "Threat Detection", "24/7 SOC Monitoring"].map((label, index) => (
            <div className="status-info-line" key={index}>
              <span>{label}</span>
              <span>Complete</span>
              <div className="status-bar-line">
                <div className="status-fill-animate"></div>
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

        <div className="status-info-block" ref={el => observeref.current[1] = el}>
          {["EDR Agent Setup", "Incident Response", "Remediation"].map((label, index) => (
            <div className="status-info-line" key={index}>
              <span>{label}</span>
              <span>Complete</span>
              <div className="status-bar-line green">
                <div className="status-fill-animate"></div>
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

        <div className="status-info-block" ref={el => observeref.current[2] = el} >
          {["Traffic Analysis", "Anomaly Detection", "Protocol Visibility"].map((label, index) => (
            <div className="status-info-line" key={index}>
              <span>{label}</span>
              <span>Complete</span>
              <div className="status-bar-line blue">
                <div className="status-fill-animate"></div>
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

        <div className="status-info-block" ref={el => observeref.current[3] = el}>
          {["Policy Creation", "Risk Assessment", "Audit Reports"].map((label, index) => (
            <div className="status-info-line" key={index}>
              <span>{label}</span>
              <span>Complete</span>
              <div className="status-bar-line teal">
                <div className="status-fill-animate"></div>
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
