import React from "react";
import "./Fotrom.css";

const Fotrom = () => {
  return (
    <div className="fotrom-container">

      {/* Top Heading Section */}
      <div className="fotrom-header">
        <h1>Our Integrated Service Framework</h1>
        <p>
          We don’t work in silos. At Awwal Security, every solution is built by connecting
          expertise across all domains.
        </p>
        <div className="fotrom-icon">
          <img src="/images/Our Integrated Service Framework1.png" alt="Gear Icon" />
        </div>
      </div>

      {/* Four Service Cards */}
      <div className="fotrom-services">

        <div className="fotrom-card fotrom-red">
          <img src="/images/Our Integrated Service Framework2.png" alt="Security Icon" />
          <h3>Security</h3>
          <p>Securing your foundation</p>
          <ul>
            <li>Threat Detection</li>
            <li>Risk Assessment</li>
            <li>Compliance</li>
          </ul>
        </div>

        <div className="fotrom-card fotrom-blue">
          <img src="/images/Our Integrated Service Framework3.png" alt="Intelligence Icon" />
          <h3>Intelligence</h3>
          <p>Automating your operations</p>
          <ul>
            <li>AI Analytics</li>
            <li>Smart Monitoring</li>
            <li>Predictive Insights</li>
          </ul>
        </div>

        <div className="fotrom-card fotrom-green">
          <img src="/images/Our Integrated Service Framework2.png" alt="Infrastructure Icon" />
          <h3>Infrastructure</h3>
          <p>Building robust foundations</p>
          <ul>
            <li>Cloud Architecture</li>
            <li>Network Design</li>
            <li>Scalability</li>
          </ul>
        </div>

        <div className="fotrom-card fotrom-purple">
          <img src="/images/Our Integrated Service Framework4.png" alt="Experience Icon" />
          <h3>Experience</h3>
          <p>Delivering seamless interactions</p>
          <ul>
            <li>User Interface</li>
            <li>Integration</li>
            <li>Support</li>
          </ul>
        </div>

      </div>

      {/* Seamlessly Connected Section */}
      <div className="fotrom-connected">
        <h2>Seamlessly Connected</h2>
        <p>
          Our integrated approach ensures that every component works in harmony,
          creating solutions that are greater than the sum of their parts.
        </p>

        <div className="fotrom-icons">
          <div className="fotrom-icon-box">
          
            <span>Security</span>
          </div>
          <div className="fotrom-icon-box">
          
            <span>Intelligence</span>
          </div>
          <div className="fotrom-icon-box">
           
            <span>Infrastructure</span>
          </div>
          <div className="fotrom-icon-box">
           
            <span>Experience</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Fotrom;
