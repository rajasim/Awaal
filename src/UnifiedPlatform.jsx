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
                DATA FROM EVERYWHERE. DATA YOU CAN TRUST.
                <span>{openItem === 1 ? '-' : '+'}</span>
              </div>
              {openItem === 1 && (
                <div className="platform-content">
                  <p>
                    INTEGRATE YOUR FIRST AND OUR THIRD-PARTY PARTY DATA TO KNOW WHO IS IN-MARKET AND WHAT THEY ARE SIGNALING.
                  </p>
                  <p>
                    WE ALWAYS ENSURE THAT YOU HAVE THE BEST QUANTITY AND TRUSTED QUALITY OF DATA FUELING YOUR BUSINESS DECISIONS.
                  </p>
                  <ul>
                    <li><strong>1ST PARTY:</strong> CRM, MAP, WEB ACTIVITY, CHAT, EMAIL & CALENDAR, AND MORE.</li>
                    <li><strong>3RD PARTY:</strong> ACCOUNT ID, CONTACT & BUYING GROUP ID, FIRMOGRAPHIC, TECHNOGRAPHIC, ACTION AND INTENT SIGNALS.</li>
                  </ul>
                </div>
              )}
            </li>

            <li onClick={() => toggleItem(2)}>
              <div className="item-header">
                AI-POWERED INSIGHTS THAT YOU CAN SEE
                <span>{openItem === 2 ? '-' : '+'}</span>
              </div>
              {openItem === 2 && (
                <div className="platform-content">
                  <p>
                    GET CLEAR VISIBILITY INTO BUYING INTENT WITH REAL-TIME AI SIGNALS THAT HELP PRIORITIZE ACCOUNTS AND PERSONALIZE OUTREACH.
                  </p>
                </div>
              )}
            </li>

            <li onClick={() => toggleItem(3)}>
              <div className="item-header">
                ACT WITH CONFIDENCE
                <span>{openItem === 3 ? '-' : '+'}</span>
              </div>
              {openItem === 3 && (
                <div className="platform-content">
                  <p>
                    LEVERAGE DATA TO MAKE SMARTER DECISIONS AND LAUNCH TARGETED CAMPAIGNS FASTER THAN EVER.
                  </p>
                </div>
              )}
            </li>

            <li onClick={() => toggleItem(4)}>
              <div className="item-header">
                UNIFY YOUR TECH STACK WITH INTEGRATIONS & APIS
                <span>{openItem === 4 ? '-' : '+'}</span>
              </div>
              {openItem === 4 && (
                <div className="platform-content">
                  <p>
                    CONNECT TO ALL YOUR TOOLS EASILY WITH OUR NATIVE INTEGRATIONS AND FLEXIBLE APIS.
                  </p>
                </div>
              )}
            </li>

            <li onClick={() => toggleItem(5)}>
              <div className="item-header">
                PURPOSE-BUILT FOR ACCOUNT-BASED GTM
                <span>{openItem === 5 ? '-' : '+'}</span>
              </div>
              {openItem === 5 && (
                <div className="platform-content">
                  <p>
                    BUILT SPECIFICALLY FOR MODERN B2B GTM TEAMS TO TARGET, ENGAGE, AND CONVERT THE RIGHT ACCOUNTS.
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>

        <div className="unified-platform-right">
          <img src="/images/Screenshot 2025-06-15 132811.png" alt="Unified Platform Cube" />
        </div>
      </div>
    </section>
  );
};

export default UnifiedPlatform;
