import React from "react";
import "./Digital.css";

const Digital = () => {
  return (
    <div className="digital-container">
      {/* Background image */}
      <img src="/images/Screenshot 2025-07-03 021441.png" alt="background" className="digital-bg-img" />

      <div className="digital-header">
        <h1>Secure Your Digital Future</h1>
        <p>
          Comprehensive IT solutions from cybersecurity to cloud migration,
          powered by cutting-edge technology and expert innovation.
        </p>
      </div>

      <div className="digital-cards">
        <div className="digital-card">
          <img src="/images/box9.jpeg" alt="Cybersecurity" />
          <h3>Cybersecurity (VAPT)</h3>
          <p>Vulnerability Assessment & Penetration Testing to secure your infrastructure</p>
          <div className="tags">
            <span className="tag red">Security Audit</span>
            <span className="tag red">Pen Testing</span>
          </div>
        </div>

        <div className="digital-card">
          <img src="/images/ai-icon.png" alt="AI & Automation" />
          <h3>AI & Automation</h3>
          <p>Intelligent automation solutions to streamline your business processes</p>
          <div className="tags">
            <span className="tag pink">Machine Learning</span>
            <span className="tag pink">Process Automation</span>
          </div>
        </div>

        <div className="digital-card">
          <img src="/images/cloud-icon.png" alt="Cloud Services" />
          <h3>Cloud Services</h3>
          <p>Scalable cloud infrastructure and management solutions</p>
          <div className="tags">
            <span className="tag blue">AWS</span>
            <span className="tag blue">Azure</span>
          </div>
        </div>

        <div className="digital-card">
          <img src="/images/infrastructure-icon.png" alt="IT Infrastructure" />
          <h3>IT Infrastructure</h3>
          <p>Robust network architecture and system administration</p>
          <div className="tags">
            <span className="tag green">Network Setup</span>
            <span className="tag green">System Admin</span>
          </div>
        </div>

        <div className="digital-card">
          <img src="/images/software-icon.png" alt="Software Development" />
          <h3>Software Development</h3>
          <p>Custom software solutions tailored to your business needs</p>
          <div className="tags">
            <span className="tag orange">Custom Apps</span>
            <span className="tag orange">API Development</span>
          </div>
        </div>

        <div className="digital-card">
          <img src="/images/web-icon.png" alt="Web Dev & Migration" />
          <h3>Web Dev & Migration</h3>
          <p>Modern websites and seamless platform migrations</p>
          <div className="tags">
            <span className="tag purple">Responsive Design</span>
            <span className="tag purple">Data Migration</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digital;
