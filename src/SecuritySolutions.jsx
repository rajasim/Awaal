import React, { useState } from "react";
import "./Softwarelap.css";

function SecuritySolutions() {
  const [active, setActive] = useState("network");

  return (
    <div className="security-wrapper">
      <div className="security-heading">
        <div className="heading-line"></div>
        <h2>Our Services</h2>
        <div className="heading-line"></div>
        <p>Explore our solutions designed to secure your digital operations.</p>
      </div>

      <div className="security-layout">
        <div className="left-buttons">
          <button className={active === "network" ? "active" : ""} onClick={() => setActive("network")}>Network Vulnerability Assessment</button>
          <button className={active === "web" ? "active" : ""} onClick={() => setActive("web")}>Web Application Penetration </button>
          <button className={active === "performance" ? "active" : ""} onClick={() => setActive("performance")}>Mobile Application  </button>
          <button className={active === "email" ? "active" : ""} onClick={() => setActive("email")}>Internal & External Infrastructure </button>
          <button className={active === "endpoint" ? "active" : ""} onClick={() => setActive("endpoint")}>Wireless Network Security </button>
        </div>

        <div className="right-content">
          {active === "network" && (
            <div className="content-box">
              <div className="bluee-section">
                <h3>Network Vulnerability Assessment</h3>
                <p>Scan and assess your internal and external networks to identify potential security flaws, outdated software, misconfigurations, and exposed ports that attackers can exploit. This helps ensure your infrastructure is always hardened against known vulnerabilities</p>
                <ul>
                  <li>Identify open ports, unpatched systems, and weak services</li>
                  <li>Detect misconfigurations in routers, firewalls, and switches</li>
                    <li>Analyze internal and external IP ranges for vulnerabilities</li>
                     <li>Generate detailed reports with risk ratings and remediation steps</li>
                </ul>
              </div>
              <div className="imagee-section">
                <img src="/images/cs 1.gif" alt="Network Security" />
              </div>
            </div>
          )}

          {active === "web" && (
            <div className="content-box">
              <div className="bluee-section">
                <h3>Web Application Penetration Testing</h3>
                <p>Manually and automatically test your web applications for OWASP Top 10 threats such as SQL injection, XSS, authentication bypass, and session hijacking. This ensures that your applications are protected from both common and advanced attacks.</p>
                <ul>
                  <li>Test for OWASP Top 10 vulnerabilities</li>
                  <li>Simulate real-world attacks to uncover hidden flaws</li>
                  <li>Review authentication, session handling, and input validation</li>
                   <li>Provide a detailed report with exploit steps and fixes</li>
                </ul>
              </div>
              <div className="imagee-section">
                <img src="/images/cs 2.gif" alt="Web Application Security" />
              </div>
            </div>
          )}

          {active === "performance" && (
            <div className="content-box">
              <div className="bluee-section">
                <h3>Mobile Application Security Testing</h3>
                <p>Assess your Android and iOS apps to uncover security issues such as data leakage, insecure APIs, weak encryption, and improper permissions. Ensures your mobile apps meet high security standards and user safety.</p>
                <ul>
                  <li>Test for insecure data storage and transmission</li>
                  <li>Analyze API communication and authentication mechanisms</li>
                  <li>Review app permissions, code obfuscation, and encryption</li>
                   <li>Offer platform-specific recommendations for remediation</li>
                </ul>
              </div>
              <div className="imagee-section">
                <img src="/images/cs 3.gif" alt="Application Performance" />
              </div>
            </div>
          )}

          {active === "email" && (
            <div className="content-box">
              <div className="bluee-section">
                <h3>Internal & External Infrastructure Testing</h3>
                <p>Simulate cyberattacks on your internal systems and public-facing infrastructure to identify how far a potential attacker could go. Helps you understand security gaps from both inside and outside your organization.</p>
                <ul>
                  <li>Identify vulnerabilities in servers, databases, and user devices</li>
                  <li>Test firewall rules and network segmentation effectiveness</li>
                  <li>Simulate insider threats and external attacks</li>
                   <li>Deliver a comprehensive risk posture report</li>
                </ul>
              </div>
              <div className="imagee-section">
                <img src="/images/Recording2025-07-22151835-vmake-ezgif.com-resize.gif" alt="Email Security" />
              </div>
            </div>
          )}

          {active === "endpoint" && (
            <div className="content-box">
              <div className="bluee-section">
                <h3>Wireless Network Security Assessment</h3>
                <p>Evaluate the security of your wireless environment to prevent unauthorized access, eavesdropping, and man-in-the-middle attacks. Essential for maintaining secure wireless communication.</p>
                <ul>
                  <li>Test Wi-Fi encryption strength and protocol configuration</li>
                  <li>Identify rogue access points and unauthorized devices</li>
                  <li>Analyze SSID settings, password policies, and signal leakage</li>
                  <li>Suggest improvements for enterprise-grade wireless security</li>
                </ul>
              </div>
              <div className="imagee-section">
                <img src="/images/cs 5.gif" alt="Endpoint Protection" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SecuritySolutions;
