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
          <img src="/images/Ongoing Support & Maintenance1.png" alt="Performance Icon" className="laptor-icon" />
          <h3>Continuous Performance Optimization</h3>
          <p>
            We constantly monitor and improve your application's speed and efficiency.
          </p>
          <img src="/images/Software1.gif" alt="Performance Graph" className="laptor-bottom-img" />
        </div>

        {/* Box 2 */}
        <div className="laptor-box">
          <img src="/images/Ongoing Support & Maintenance2.png" alt="Upgrade Icon" className="laptor-icon" />
          <h3>Feature Upgrades & Patches</h3>
          <p>
            Regular updates with new features and security patches to keep your system current.
          </p>
          <img src="/images/Software2.gif" alt="Upgrade Visual" className="laptor-bottom-img" />
        </div>

        {/* Box 3 */}
        <div className="laptor-box">
          <img src="/images/Ongoing Support & Maintenance3.png" alt="Server Icon" className="laptor-icon" />
          <h3>Server Health Monitoring</h3>
          <p>
            Proactive monitoring to prevent downtime and ensure optimal server performance.
          </p>
          <img src="/images/Software3.gif" alt="Server Chart" className="laptor-bottom-img" />
        </div>

        {/* Box 4 */}
        <div className="laptor-box">
          <img src="/images/Ongoing Support & Maintenance4.png" alt="Support Icon" className="laptor-icon" />
          <h3>24/7 SLA Backed Technical Support</h3>
          <p>
            Round-the-clock assistance with guaranteed response times for your peace of mind.
          </p>
          <img src="/images/Software4.gif" alt="Clock Illustration" className="laptor-bottom-img" />
        </div>
      </div>

      <button className="laptor-button">Get Support Now</button>
      <p className="laptor-footer">Our team is ready to provide the support you need</p>
    </div>
  );
};

export default Laptor;
