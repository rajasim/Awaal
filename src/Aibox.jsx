import React from 'react';
import './DubaiBank.css';

const Aibox = () => {
  return (
   <div className="bank-wrapper">
      <div className="bank-card">
        {/* Top Image Section */}
        <div className="network-image">
          <img src="/images/Recording2025-07-10133233-vmake-ezgif.com-resize.gif" alt="Dubai First Bank Network" />
          
        </div>

        {/* Bottom Content Section */}
        <div className="bottom-section">
          {/* Left Side */}
          <div className="bank-info">
            <h2>AI & Automation – Transforming the Future of Business</h2>
            <p>
             Smarter Systems. Faster Results. Scalable Innovation.
Unlock the power of AI & Automation to accelerate workflows, reduce costs, and make data-driven decisions.
            </p>
            <ul className="bullet-points">
              <li><span className="dot green"></span> Intelligent Workflow Design</li>
  <li><span className="dot blue"></span> Data-driven Decision Support</li>
  <li><span className="dot purple"></span> Computer Vision Solutions</li>
  <li><span className="dot yellowe"></span> AI Model Development & Integration</li>
  <li><span className="dot red"></span> Natural Language Processing (NLP)</li>
            </ul>
          </div>

          {/* Right Side – Horizontal Cards */}
          <div className="glass-cards-row">
            <div className="glass-card">
              <img src="/images/network-icon.png" alt="Network" />
              <p>Network</p>
            </div>
            <div className="glass-card">
              <img src="/images/security-icon.png" alt="Security" />
              <p>Security</p>
            </div>
            <div className="glass-card">
              <img src="/images/multisite-icon.png" alt="Multi-Site" />
              <p>Multi-Site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Aibox;
