import React from 'react';
import './Extrabox.css';

export default function Extrabox() {
  return (
    <div className="extrabox-wrapper">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="video/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Services Section */}
      <div className="extrabox-section">
        <h2 className="extrabox-title">Our Services</h2>
        <p className="extrabox-subtitle">
          Comprehensive cybersecurity and IT solutions tailored to protect your business and drive innovation
        </p>

        <div className="extrabox-grid">
          {/* Box 1 */}
          <div className="extrabox-box">
            <div className="extrabox-header"><h3>VAPT</h3></div>
            <img src="/images/likeslogo.jpeg" alt="VAPT" />
            <p>Comprehensive vulnerability assessment and penetration testing to identify and address security weaknesses.</p>
            <div className="tags">
              <span>Web App Testing</span>
              <span>Network Testing</span>
              <span>API Security</span>
            </div>
          </div>

          {/* Box 2 */}
          <div className="extrabox-box">
            <div className="extrabox-header"><h3>IT Infrastructure</h3></div>
            <img src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png" alt="Infrastructure" />
            <p>Design and manage robust IT infrastructure to power your operations.</p>
            <div className="tags">
              <span>Cloud Solutions</span>
              <span>Network Design</span>
              <span>Server Management</span>
            </div>
          </div>

          {/* Box 3 */}
          <div className="extrabox-box">
            <div className="extrabox-header"><h3>AI & Automation</h3></div>
            <img src="https://cdn-icons-png.flaticon.com/512/2942/2942929.png" alt="AI" />
            <p>Automate workflows and enhance intelligence with AI-powered solutions.</p>
            <div className="tags">
              <span>Process Automation</span>
              <span>AI Solutions</span>
              <span>Machine Learning</span>
            </div>
          </div>

          {/* Add more boxes if needed */}
        </div>
      </div>
    </div>
  );
}
