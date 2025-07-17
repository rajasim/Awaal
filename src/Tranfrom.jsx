import React from 'react';
import './Tranfrom.css';

const Tranfrom = () => {
  return (
    <div className="transform-wrapper">
      <div className="transform-content">

        <h1>
          Transform Your Tech. <span className="highlightt">One Click Away</span>
        </h1>

        <p className="subtitle">
          Simplifying Complex Technology — So You Can Focus on What Matters
        </p>

        <div className="services-row">
          <div className="service-cardes">
            <img src="/images/cybersecurity.png" alt="Cybersecurity" />
            <p>Cybersecurity<br /><small>(VAPT)</small></p>
          </div>
          <div className="service-cardes">
            <img src="/images/ai.png" alt="AI Automation" />
            <p>AI &<br />Automation</p>
          </div>
          <div className="service-cardes">
            <img src="/images/cloud.png" alt="Cloud" />
            <p>Cloud<br />Services</p>
          </div>
          <div className="service-cardes">
            <img src="/images/it.png" alt="IT Infra" />
            <p>IT Infra<br />Management</p>
          </div>
          <div className="service-cardes">
            <img src="/images/software.png" alt="Software" />
            <p>Software<br />Development</p>
          </div>
          <div className="service-cardes">
            <img src="/images/website.png" alt="Website" />
            <p>Website<br />Development</p>
          </div>
          <div className="service-cardes">
            <img src="/images/system.png" alt="Migration" />
            <p>System<br />Migration</p>
          </div>
        </div>

        <button className="transform-btnnn">
          <img src="/images/rocket.png" alt="Rocket" /> Transform Now
        </button>

        <div className="features-row">
          <span>✅ Free Strategy Session</span>
          <span>✅ Industry-Specific Solutions</span>
          <span>✅ Proven Results</span>
        </div>

        <p className="footer-text">Not ready yet? Start with our insights:</p>

        <button className="guide-btn">Download Free Security Guide</button>

      </div>
    </div>
  );
};

export default Tranfrom;
