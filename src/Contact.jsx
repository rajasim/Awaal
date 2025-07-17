import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="content-left">
        <h1><span className="connect">Connect</span> <span className="create">& Create</span></h1>
        <p className="subtextet">
          Transform your ideas into digital reality with cutting edge<br></br> AI, cybersecurity, and automation solutions.
        </p>

        <div className="tagses">
          <div className="tages">
            <img src="./ai-icon.png" alt="AI" />
            <span>AI-Powered</span>
          </div>
          <div className="tages">
            <img src="./secure-icon.png" alt="Secure" />
            <span>Ultra-Secure</span>
          </div>
          <div className="tages">
            <img src="./fast-icon.png" alt="Fast" />
            <span>Lightning-Fast</span>
          </div>
        </div>

        <div className="buttons">
          <button className="launch-btn">
            <img src="./launch-icon.png" alt="Launch" />
            Launch Your Project
          </button>
          <button className="consult-btn">
            <img src="./consult-icon.png" alt="Consult" />
            Free Consultation
          </button>
        </div>
      </div>

      <div className="content-right">
        <img src="./images/box9.jpeg" alt="AI Graphic" className="graphic-img" />
      </div>
    </div>
  );
}
