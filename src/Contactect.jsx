import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="content-left">
        <h1><span className="connect">Connect</span> <span className="create">& Create</span></h1>
        <p className="subtextet">
          Whether you’re looking to safeguard your business with advanced cybersecurity, harness the power of AI and automation, transform operations with intelligent software, create <br></br> high performance websites, or scale effortlessly through powerful cloud solutions, our experts are here to understand your vision, address your challenges, and deliver technology that drives measurable growth and lasting impact.
        </p>

        <div className="tagses">
          <div className="tages">
            
            <span>AI-Powered</span>
          </div>
          <div className="tages">
           
            <span>Ultra-Secure</span>
          </div>
          <div className="tages">
           
            <span>Lightning-Fast</span>
          </div>
        </div>

        <div className="buttons">
         
        </div>
      </div>

      <div className="content-right">
        <img src="./images/Contact.gif" alt="AI Graphic" className="graphic-img" />
      </div>
    </div>
  );
}
