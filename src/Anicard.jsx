import React from "react";
import "./Anicard.css";

const Anicard = () => {
  return (
    <div className="anicard-container">
      <div className="anicard-box">
        <img
          src="/images/Managed XDR 1.jpg"
          alt="MXDR top"
          className="anicard-top-img"
        />
        <div className="anicard-content">
          <div className="anicard-icon">🛡️</div>
          <h3>Managed XDR / MXDR</h3>
          <p>
            Extended detection and response with 24/7 monitoring by security
            experts to identify and neutralize threats.
          </p>
          <ul>
            <li>✔️ 24/7 Threat Monitoring</li>
            <li>✔️ Rapid Incident Response</li>
            <li>✔️ Advanced Threat Hunting</li>
          </ul>
          <button className="anicard-button green-btn">Learn More</button>
        </div>
      </div>

      <div className="anicard-box">
        <img
          src="/images/Managed XDR 2.jpg"
          alt="EDR top"
          className="anicard-top-img"
        />
        <div className="anicard-content">
          <div className="anicard-icon">🧠</div>
          <h3>EDR / NGAV Protection</h3>
          <p>
            Endpoint detection and response with next-gen antivirus to protect
            all your devices from malware and attacks.
          </p>
          <ul>
            <li>✔️ Behavioral Analysis</li>
            <li>✔️ Fileless Malware Detection</li>
            <li>✔️ Automated Remediation</li>
          </ul>
          <button className="anicard-button yellow-btn">Learn More</button>
        </div>
      </div>

      <div className="anicard-box">
        <img
          src="/images/Managed XDR 3.jpg"
          alt="Network top"
          className="anicard-top-img"
        />
        <div className="anicard-content">
          <div className="anicard-icon">🌐</div>
          <h3>Network Visibility</h3>
          <p>
            Monitor internal traffic and detect lateral movement to prevent
            internal spread of threats.
          </p>
          <ul>
            <li>✔️ Real-Time Network Monitoring</li>
            <li>✔️ Lateral Threat Detection</li>
            <li>✔️ Traffic Analysis Reports</li>
          </ul>
          <button className="anicard-button blue-btn">Learn More</button>
        </div>
      </div>

      <div className="anicard-box">
        <img
          src="/images/Managed XDR 4.jpg"
          alt="GRC top"
          className="anicard-top-img"
        />
        <div className="anicard-content">
          <div className="anicard-icon">⚖️</div>
          <h3>GRC Compliance</h3>
          <p>
            Governance, Risk, and Compliance services to ensure your
            organization meets all security regulations.
          </p>
          <ul>
            <li>✔️ Policy Management</li>
            <li>✔️ Risk Assessment</li>
            <li>✔️ Compliance Reporting</li>
          </ul>
          <button className="anicard-button darkgreen-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Anicard;
