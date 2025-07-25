import React from "react";
import "./CyberGuard.css";

const CyberGuard = () => {
  return (
    <section className="cyberguard-container">
      <h2 className="cyberguard-heading">Why Choose Awwal?</h2>
      <p className="cyberguard-subheading">
        With over 12+ years of experience, our team of IT professionals provides comprehensive Cyber Security and IT services to businesses of all sizes.
      </p>

      <div className="cyberguard-main">
        {/* LEFT SIDE */}
        <div className="cyberguard-left">
          <div className="cyberguard-box">
            <div className="icon-wrapper">
              <img src="/images/Cyberguard 1.png" alt="Expert Team" />
            </div>
            <div>
              <h3>Expert Team</h3>
              <p>
                Our security professionals hold industry-recognized certifications including CCIE, CISSP, CISM, CEH, with
                continuous training to stay ahead of emerging threats.
              </p>
            </div>
          </div>

          <div className="cyberguard-box">
            <div className="icon-wrapper">
              <img src="/images/Cyberguard 2.png" alt="Comprehensive Approach" />
            </div>
            <div>
              <h3>Comprehensive Approach</h3>
              <p>
                We combine automated tools with manual testing techniques to ensure thorough coverage of your systems
                and identify vulnerabilities that automated tools might miss.
              </p>
            </div>
          </div>

          <div className="cyberguard-box">
            <div className="icon-wrapper">
              <img src="/images/Cyberguard 3.png" alt="Actionable Reports" />
            </div>
            <div>
              <h3>Actionable Reports</h3>
              <p>
                Detailed reports with clear remediation steps to help you address vulnerabilities effectively,
                prioritized by risk level and business impact.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="cyberguard-right">
          <div className="cyberguard-grid">
            <div className="cyberguard-tile">
              <div className="icon-wrapper">
                <img src="/images/Cyberguard 4.png" alt="Certified Experts" />
              </div>
              <h4>Certified Experts</h4>
              <p>CCIE, CISSP, CISM, CEH, Azure Solutions Architect</p>
            </div>

            <div className="cyberguard-tile">
              <div className="icon-wrapper">
                <img src="/images/Cyberguard 5.png" alt="Customized Approach" />
              </div>
              <h4>Customized Approach</h4>
              <p>Tailored testing based on your specific needs</p>
            </div>

            <div className="cyberguard-tile">
              <div className="icon-wrapper">
                <img src="/images/Cyberguard 6.png" alt="Detailed Reporting" />
              </div>
              <h4>Detailed Reporting</h4>
              <p>Clear, actionable remediation guidance</p>
            </div>

            <div className="cyberguard-tile">
              <div className="icon-wrapper">
                <img src="/images/Cyberguard 7.png" alt="Rapid Response" />
              </div>
              <h4>Rapid Response</h4>
              <p>24/7 support for critical security issues</p>
            </div>
          </div>

          <div className="cyberguard-industry">
            <h4>Industry Experience</h4>
            <p>Serving clients across finance, healthcare, technology, and government sectors</p>
          </div>

          <div className="cyberguard-certifications">
            <span>CCIE,</span>
            <span>CISSP</span>
            <span>CISM</span>
            <span>CEH</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberGuard;
