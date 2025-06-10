import React from "react";
import "./VaptSection.css";

function VaptSection() {
  return (
    <div className="vapt-section">
      <div className="vapt-left">
        <h1>
          Vulnerability Assessment &<br />
          Penetration Testing (VAPT)
        </h1>
        <h2>
          Discover. Analyze. <span>Defend.</span>
        </h2>
       <p>
  Cyber threats evolve every day is your business prepared
  <span className="green">?</span>
  <br />
  Our VAPT services combine advanced vulnerability
  <br />
  assessments and real world penetration testing to uncover
  <br />
  security gaps before attackers can exploit them. From internal
  <br />
  systems to external networks, we help you identify risks,
  <br />
  prioritize fixes, and build a robust defence strategy.
</p>

        <button className="explore-btn">Exploring the future of technology</button>
      </div>

      <div className="vapt-right">
        <img src="/images/Screenshot 2025-06-10 193851.png" alt="VAPT Visual" className="vapt-image" />
      </div>
    </div>
  );
}

export default VaptSection;
