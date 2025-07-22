import React from 'react';
import './Toll.css';

const Toll = () => {
  return (
    <div className="toll-wrapper">
      <h1 className="toll-title">Tech Stack & Tools</h1>
      <p className="toll-subtitle">
        Leveraging cutting-edge technologies to build powerful, scalable, and beautiful digital experiences.
      </p>

      <div className="toll-grid">
        <div className="toll-card purple">
          <div className="toll-icon">  <img src="/images/Tech Stack & Toolses1.png" alt="Check" /></div>
          <h2>Frontend</h2>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vue.js</li>
          </ul>
        </div>

        <div className="toll-card blue">
          <div className="toll-icon">  <img src="/images/Tech Stack & Toolses2.png" alt="Check" /></div>
          <h2>Backend</h2>
          <ul>
            <li>PHP</li>
            <li>Node.js</li>
            <li>Laravel</li>
            <li>Django</li>
          </ul>
        </div>

        <div className="toll-card green">
          <div className="toll-icon">  <img src="/images/Tech Stack & Toolses3.png" alt="Check" /></div>
          <h2>eCommerce</h2>
          <ul>
            <li>Shopify</li>
            <li>WooCommerce</li>
            <li>Magento</li>
          </ul>
        </div>

        <div className="toll-card orange">
          <div className="toll-icon">  <img src="/images/Tech Stack & Toolses3.png" alt="Check" /></div>
          <h2>CMS</h2>
          <ul>
            <li>WordPress</li>
            <li>Joomla</li>
            <li>Headless CMS</li>
          </ul>
        </div>

        <div className="toll-card red">
          <div className="toll-icon">  <img src="/images/Tech Stack & Toolses4.png" alt="Check" /></div>
          <h2>DevOps & Hosting</h2>
          <ul>
            <li>AWS</li>
            <li>DigitalOcean</li>
            <li>cPanel</li>
            <li>Cloudflare</li>
          </ul>
        </div>

        <div className="toll-card violet">
          <div className="toll-icon">  <img src="/images/Tech Stack & Toolses5.png" alt="Check" /></div>
          <h2>Tools</h2>
          <ul>
            <li>Figma</li>
            <li>Webflow</li>
            <li>Git</li>
            <li>SEO plugins, GA4, GTM</li>
          </ul>
        </div>
      </div>

      <div className="toll-footer">
        <h3>Our Technology Ecosystem</h3>
        <div className="toll-footer-icons">
         
          </div>
        </div>
        <p>
          Our comprehensive tech stack enables us to build solutions that are not only
          visually stunning but also robust, scalable, and optimized for performance.
        </p>
      </div>
    
  );
};

export default Toll;
