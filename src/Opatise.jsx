import React from 'react';
import './Opatise.css';

const Opatise = () => {
  return (
    <div className="opatise-wrapper">
     <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
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
  <source src="/video/123-vmake.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


      <div className="opatise-header">
        <h1>Website Features</h1>
        <p>You Can Expect Innovation</p>
      </div>

      <div className="opatise-main">
        <div className="feature-block feature-smart">
          <h3>Smart Navigation</h3>
          <p>Intuitive interfaces that adapt to user behavior and create seamless experiences</p>
        </div>

        <div className="feature-block feature-ssl">
          <h3>SSL Security</h3>
          <p>Enterprise-grade security with encryption and best practices</p>
        </div>

        <div className="feature-block feature-integration">
          <h3>System Integration</h3>
          <p>Seamless connections with CRM, email platforms, and ERP systems</p>
        </div>

        <div className="feature-block feature-animations">
          <h3>Custom Animations</h3>
          <p>Interactive elements and micro-interactions that delight users</p>
        </div>

        <div className="feature-block feature-seo">
          <h3>SEO Analytics</h3>
          <p>Built-in optimization and performance tracking for maximum visibility</p>
        </div>

        <div className="feature-block feature-global">
          <h3>Global Reach</h3>
          <p>Multilingual support and internationalization for worldwide audiences</p>
        </div>
      </div>

      <div className="opatise-footer">
        <button className="launch-button">Launch Your Vision</button>
      </div>
    </div>
  );
};

export default Opatise;
