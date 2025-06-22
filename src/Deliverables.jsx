import React, { useEffect, useRef, useState } from "react";
import "./Deliverables.css";

const Deliverables = () => {

  const observeref = useRef([]);
  useEffect(() => {
    const observer = (entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar= entry.target;
          bar.style.width = "100%";
            bar.style.transition = "width 3s ease"
         

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
    <div className="deliverables-section">
      <div className="deliverables-container">
        <h2 className="deliverables-title">Comprehensive Deliverables</h2>
        <p className="deliverables-subtitle">
          Our security services include detailed deliverables that provide actionable insights and robust protection for your organization.
        </p>

        <div className="deliverables-card">
          <div className="left-box">
            <h3 className="card-title">Vulnerability Assessment & Penetration Testing</h3>
            <p className="card-description">
              Comprehensive security testing to identify and exploit vulnerabilities in your systems.
            </p>

            <div className="status-group">
              {["Vulnerability Scanning", "Manual Testing", "Detailed Reporting"].map((item, index) => (
                <div className="status-bar" key={index}>
                  <div className="status-labels">
                    <span>{item}</span>
                    <span className="complete">Complete</span>
                  </div>
                  <div className="status-line">
                    <div className="status-fill" ref={el=>observeref.current[index]=el}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="key-deliverables">
              <div className="key-title">Key Deliverables:</div>
              <ul>
                <li>✔ Comprehensive vulnerability assessment report with severity ratings</li>
                <li>✔ Detailed exploitation proof-of-concept documentation</li>
                <li>✔ Prioritized remediation recommendations with actionable steps</li>
              </ul>
            </div>

            <div className="button-wrapper">
              <button className="cta-button">Request Assessment</button>
            </div>
          </div>

          <div className="right-box">
            <img src="/images/Screenshot 2025-06-13 165048.png" alt="Radar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliverables;
