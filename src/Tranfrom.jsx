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
           
            <p>Cybersecurity<br /><small>(VAPT)</small></p>
          </div>
          <div className="service-cardes">
         
            <p>AI &<br />Automation</p>
          </div>
          <div className="service-cardes">
          
            <p>Cloud<br />Services</p>
          </div>
          <div className="service-cardes">
          
            <p>IT Infra<br />Management</p>
          </div>
          <div className="service-cardes">
           
            <p>Software<br />Development</p>
          </div>
          <div className="service-cardes">
          
            <p>Website<br />Development</p>
          </div>
          <div className="service-cardes">
          
            <p>System<br />Migration</p>
          </div>
        </div>

        <button className="transform-btnnn">
           Transform Now
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
