import React from 'react';
import './Yaptor.css';

const Laptor = () => {
  return (
    <div className="laptor-container">
      <h2 className="laptor-title">
        Ongoing Support <span className="highlight">& Maintenance</span>
      </h2>
      <p className="laptor-subtitle">
        We don't just build and leave — we stay to support. Our comprehensive post-launch services
        ensure your digital solution remains optimized and secure.
      </p>

      <div className="laptor-boxes">
        {/* Box 1 */}
        <div className="laptor-box">
          <img src="/images/box9.jpeg" alt="Performance Icon" className="laptor-icon" />
          <h3>Continuous Performance Optimization</h3>
          <p>
            We constantly monitor and improve your application's speed and efficiency.
          </p>
          <img src="/images/box9.jpeg" alt="Performance Graph" className="laptor-bottom-img" />
        </div>

        {/* Box 2 */}
        <div className="laptor-box">
          <img src="/icons/upgrade-icon.svg" alt="Upgrade Icon" className="laptor-icon" />
          <h3>Feature Upgrades & Patches</h3>
          <p>
            Regular updates with new features and security patches to keep your system current.
          </p>
          <img src="/icons/update-visual.svg" alt="Upgrade Visual" className="laptor-bottom-img" />
        </div>

        {/* Box 3 */}
        <div className="laptor-box">
          <img src="/icons/server-icon.svg" alt="Server Icon" className="laptor-icon" />
          <h3>Server Health Monitoring</h3>
          <p>
            Proactive monitoring to prevent downtime and ensure optimal server performance.
          </p>
          <img src="/icons/server-chart.svg" alt="Server Chart" className="laptor-bottom-img" />
        </div>

        {/* Box 4 */}
        <div className="laptor-box">
          <img src="/icons/support-icon.svg" alt="Support Icon" className="laptor-icon" />
          <h3>24/7 SLA Backed Technical Support</h3>
          <p>
            Round-the-clock assistance with guaranteed response times for your peace of mind.
          </p>
          <img src="/icons/clock.svg" alt="Clock Illustration" className="laptor-bottom-img" />
        </div>
      </div>

      <button className="laptor-button">Get Support Now</button>
      <p className="laptor-footer">Our team is ready to provide the support you need</p>
    </div>
  );
};

export default Laptor;
