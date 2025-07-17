import React from "react";
import "./Homepageser.css";

const Homepageser = () => {
  return (
    <div className="homepageser-container">
      <video autoPlay muted loop playsInline className="homepageser-video">
        <source src="/video/1.mp4" type="video/mp4" />
      </video>

      <div className="homepageser-wrapper">
        <h2 className="homepageser-heading">Our Network Services</h2>
        <p className="homepageser-subheading">
          Comprehensive solutions designed to optimize your network infrastructure<br />
          and enhance performance.
        </p>

        <div className="homepageser-grid">

          {/* Box 1 */}
          <div className="homepageser-box">
            <img src="/images/ourservices 1.jpg" alt="Network Infrastructure" className="homepageser-topimg" />
            <h3 className="homepageser-title">Network Infrastructure</h3>
            <p className="homepageser-desc">
              Custom-designed network architecture that scales with your business needs, ensuring optimal connectivity and performance.
            </p>
            <img src="/images/home1.gif" alt="Live Network Simulation" className="homepageser-boximg" />
            <ul className="homepageser-list">
              <li>Advanced routing & switching</li>
              <li>Intelligent traffic management</li>
              <li>High-performance backbone</li>
            </ul>
            <button className="homepageser-btn">Explore Solutions →</button>
          </div>

          {/* Box 2 */}
          <div className="homepageser-box">
            <img src="/images/ourservices  2.jpg" alt="Wireless Solutions" className="homepageser-topimg" />
            <h3 className="homepageser-title">Wireless Solutions</h3>
            <p className="homepageser-desc">
              High-performance wireless networks with optimal coverage, capacity planning, and interference management.
            </p>
            <img src="/images/home2.gif" alt="Coverage Visualization" className="homepageser-boximg" />
            <ul className="homepageser-list">
              <li>Wi-Fi 6/6E implementation</li>
              <li>Mesh network deployment</li>
              <li>RF site surveys & optimization</li>
            </ul>
            <button className="homepageser-btn">Explore Solutions →</button>
          </div>

          {/* Box 3 */}
          <div className="homepageser-box">
            <img src="/images/ourservices 3.jpg" alt="Network Security" className="homepageser-topimg" />
            <h3 className="homepageser-title">Network Security</h3>
            <p className="homepageser-desc">
              Protection against cyber threats with advanced firewalls, intrusion detection, and zero-trust architecture.
            </p>
            <img src="/images/home3.gif" alt="Threat Protection" className="homepageser-boximg" />
            <ul className="homepageser-list">
              <li>Next-gen firewall protection</li>
              <li>Intrusion detection systems</li>
              <li>Zero-trust architecture</li>
            </ul>
            <button className="homepageser-btn">Explore Solutions →</button>
          </div>

          {/* Box 4 */}
          <div className="homepageser-box">
            <img src="/images/ourservices 4.jpg" alt="Cloud Networking" className="homepageser-topimg" />
            <h3 className="homepageser-title">Cloud Networking</h3>
            <p className="homepageser-desc">
              Hybrid and multi-cloud networking solutions for maximum flexibility and resilience.
            </p>
            <img src="/images/home4.gif" alt="Cloud Architecture" className="homepageser-boximg" />
            <ul className="homepageser-list">
              <li>Cloud VPNs</li>
              <li>Hybrid networks</li>
              <li>Policy-driven controls</li>
            </ul>
            <button className="homepageser-btn">Explore Solutions →</button>
          </div>

          {/* Box 5 */}
          <div className="homepageser-box">
            <img src="/images/ourservices 5.jpg" alt="Network Automation" className="homepageser-topimg" />
            <h3 className="homepageser-title">Network Automation</h3>
            <p className="homepageser-desc">
              Automate operations with intelligent orchestration, AI, and zero-touch provisioning.
            </p>
            <img src="/images/home5.gif" alt="Automation & AI" className="homepageser-boximg" />
            <ul className="homepageser-list">
              <li>Zero-touch provisioning</li>
              <li>Automation & AI</li>
              <li>Operational efficiency</li>
            </ul>
            <button className="homepageser-btn">Explore Solutions →</button>
          </div>

          {/* Box 6 */}
          <div className="homepageser-box">
            <img src="/images/ourservices 6.jpg" alt="Data Protection" className="homepageser-topimg" />
            <h3 className="homepageser-title">Data Protection</h3>
            <p className="homepageser-desc">
              End-to-end encryption, compliance, and privacy across your network.
            </p>
            <img src="/images/home6.gif" alt="Data Privacy" className="homepageser-boximg" />
            <ul className="homepageser-list">
              <li>Data encryption</li>
              <li>Privacy & compliance</li>
              <li>Threat detection</li>
            </ul>
            <button className="homepageser-btn">Explore Solutions →</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Homepageser;
