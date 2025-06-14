import React from "react";
import "./ProtectionSteps.css";

function ProtectionSteps() {
  return (
    <div className="protection-wrapper">
    <div className="protection-heading">
  <div className="heading-line"></div>
  <h2>How We Protect Your Business</h2>
  <div className="heading-line"></div>
  <p>
    Our systematic approach ensures comprehensive protection for your digital assets
  </p>
</div>

      <div className="protection-steps">
        <div className="step-box">
          <div className="circle-number">
            1<span className="line"></span>
          </div>
          <h4>Assessment</h4>
          <p>
            Thorough evaluation of your current security posture to identify
            vulnerabilities and gaps.
          </p>
        </div>

        <div className="step-box">
          <div className="circle-number">
            2<span className="line"></span>
          </div>
          <h4>Strategy</h4>
          <p>
            Develop a customized security roadmap aligned with your business
            objectives.
          </p>
        </div>

        <div className="step-box">
          <div className="circle-number">
            3<span className="line"></span>
          </div>
          <h4>Implementation</h4>
          <p>
            Deploy advanced security solutions and controls to protect your
            digital assets.
          </p>
        </div>

        <div className="step-box">
          <div className="circle-number">
            4
          </div>
          <h4>Monitoring</h4>
          <p>
            Continuous surveillance and regular reassessment to adapt to
            evolving threats.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProtectionSteps;
