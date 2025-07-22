import React from 'react';
import './DubaiBank.css';

const DubaiBank = () => {
  return (
    <div className="bank-wrapper">
      <div className="bank-card">
        {/* Top Image Section */}
        <div className="network-image">
          <img src="/images/Titlee .gif" alt="Dubai First Bank Network" />
          
        </div>

        {/* Bottom Content Section */}
        <div className="bottom-section">
          {/* Left Side */}
          <div className="bank-info">
            <h2>Dubai First Bank</h2>
            <p>
              Delivered comprehensive network and security infrastructure for a premier banking institution,
              ensuring regulatory compliance and zero-downtime operations across multiple branches.
            </p>
            <ul className="bullet-points">
              <li><span className="dot green"></span> End-to-end encryption protocols</li>
              <li><span className="dot blue"></span> Multi-branch secure connectivity</li>
              <li><span className="dot purple"></span> Full banking compliance standards</li>
              <li><span className="dot yellowe"></span> 24/7 security monitoring</li>
            </ul>
          </div>

          {/* Right Side – Horizontal Cards */}
          <div className="glass-cards-row">
            <div className="glass-card">
              <img src="/images/Dubai First Bank1.png" alt="Network" />
              <p>Network</p>
            </div>
            <div className="glass-card">
              <img src="/images/Dubai First Bank2.png" alt="Security" />
              <p>Security</p>
            </div>
            <div className="glass-card">
              <img src="/images/Dubai First Bank3.png" alt="Multi-Site" />
              <p>Multi-Site</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DubaiBank;
