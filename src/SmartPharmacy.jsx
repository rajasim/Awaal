import React from 'react';
import './SmartPharmacy.css';

const SmartPharmacy = () => {
  return (
    <div className="smartpharmacy-wrapper">
      <div className="smartpharmacy-container">

        {/* First Section: Smart Pharmacy System */}
        <div className="pharmacy-section">
          <div className="top-image">
            <img src="/images/2.gif" alt="Smart Pharmacy" />
           
          </div>
          <h2>Smart Pharmacy System</h2>
          <p>
            Developed an intelligent pharmacy management system that reduced errors by 95%, retained ₹5L in sales,
            and is ready for national expansion across India's 1M+ pharmacy market.
          </p>
          <ul className="bullet-points">
            <li><span className="dot purple"></span> Real time inventory tracking</li>
            <li><span className="dot green"></span> WhatsApp vendor alerts</li>
            <li><span className="dot blue"></span> Automated delivery scheduling</li>
            <li><span className="dot pink"></span> Business analytics dashboard</li>
          </ul>
           
          <div className="metrics-row">
            <div className="metric-card">
              <h3>95%</h3>
              <p>Error Reduction</p>
            </div>
            <div className="metric-card">
              <h3>₹5L</h3>
              <p>Sales Retained</p>
            </div>
            <div className="metric-card">
              <h3>1M+</h3>
              <p>Market Potential</p>
            </div>
          </div>
        </div>

        {/* Second Section: Hospital Network Infrastructure */}
        <div className="pharmacy-section">
          <div className="top-image">
            <img src="/images/1.gif" alt="Hospital Network" />
            <div className="top-labels">
              <span>Multi Site Connectivity</span>
              <span>Secure Data Exchange</span>
              <span>24/7 Monitoring</span>
            </div>
          </div>
          <h2>Hospital Network Infrastructure</h2>
          <p>
            Architected a comprehensive network infrastructure connecting multiple hospital facilities,
            enabling seamless data exchange and real time collaboration across departments.
          </p>
          <ul className="bullet-points">
            <li><span className="dot blue"></span> Multi-site network integration</li>
            <li><span className="dot green"></span> Secure patient data exchange</li>
            <li><span className="dot purple"></span> Real-time system monitoring</li>
            <li><span className="dot pink"></span> HIPAA compliance standards</li>
          </ul>
          <div className="metrics-row">
            <div className="metric-card">
              <img src="/images/multisite-icon.png" alt="Multi-Site" />
              <p>Multi Site</p>
            </div>
            <div className="metric-card">
              <img src="/images/security-icon.png" alt="Secure" />
              <p>Secure</p>
            </div>
            <div className="metric-card">
              <img src="/images/realtime-icon.png" alt="Real-time" />
              <p>Real time</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SmartPharmacy;
