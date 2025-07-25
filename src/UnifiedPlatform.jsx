import React, { useState } from 'react';
import './UnifiedPlatform.css';

const UnifiedPlatform = () => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="unified-platform-section">
      <div className="unified-platform-container">
        <div className="unified-platform-left">
          <h2 className="unified-platform-heading">
            ONE UNIFIED PLATFORM FOR DATA, INSIGHTS, AND REAL-TIME ACTION
          </h2>
          <ul className="unified-platform-list">
            <li onClick={() => toggleItem(1)} className={openItem === 1 ? 'active' : ''}>
              <div className="item-header">
               Identify Security Gaps
                <span>{openItem === 1 ? '-' : '+'}</span>
              </div>
              {openItem === 1 && (
                <div className="platform-content">
                  <p>
                   
VAPT helps uncover hidden vulnerabilities in your systems, applications, and network 
                  </p>
                  <p>
                   infrastructure before attackers do. It provides a clear view of where your security posture stands and what needs fixing.
                  </p>
                  
                </div>
              )}
            </li>

            <li onClick={() => toggleItem(2)}>
              <div className="item-header">
               Prevent Data Breaches
                <span>{openItem === 2 ? '-' : '+'}</span>
              </div>
              {openItem === 2 && (
                <div className="platform-content">
                  <p>
                   
By simulating real world attack scenarios, VAPT identifies weaknesses that
 could lead to data breaches, ensuring sensitive customer and business information stays protected.
                  </p>
                 
                </div>
              )}
            </li>

            <li onClick={() => toggleItem(3)}>
              <div className="item-header">
                Maintain Compliance
                <span>{openItem === 3 ? '-' : '+'}</span>
              </div>
              {openItem === 3 && (
                <div className="platform-content">
                  <p>
                   
VAPT is often a regulatory requirement under standards such as GDPR, ISO 27001, PCI-DSS, and HIPAA. Regular testing helps you meet these obligations and avoid penalties
                  </p>
                 
                </div>
              )}
            </li>

            <li onClick={() => toggleItem(4)}>
              <div className="item-header">
                Save Costs in the Long Run
                <span>{openItem === 4 ? '-' : '+'}</span>
              </div>
              {openItem === 4 && (
                <div className="platform-content">
                  <p>
                    Fixing a vulnerability after a breach is far more costly than preventing it. VAPT helps reduce potential financial, legal, and reputational damage by addressing risks early. 
                  </p>
                </div>
              )}
            </li>

            <li onClick={() => toggleItem(5)}>
              <div className="item-header">
                Stay Ahead of Hackers
                <span>{openItem === 5 ? '-' : '+'}</span>
              </div>
              {openItem === 5 && (
                <div className="platform-content">
                  <p>
                   Cybercriminals continuously search for new ways to exploit weaknesses. VAPT ensures your security measures are up to date, resilient, and capable of withstanding the latest threats.
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div className="unified-platform-right">
          <img src="/images/cyber.gif" alt="Unified Platform Cube" />
        </div>
      </div>
    </section>
  );
};

export default UnifiedPlatform;
