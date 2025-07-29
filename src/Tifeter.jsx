import React from 'react';
import './Tifeter.css';

const Tifeter = () => {
  return (
    <div className="tifeter-wrapper">
      {/* Background image on left side using an img tag */}
      <div className="tifeter-left">
       
        <div className="tifeter-content">
          <h2>
            Why Invest in <br />
            <span>Professional Website Development?</span>
          </h2>
          <p>
            Your website is more than just a digital presence — it's your brand’s first impression,
            marketing hub, and sales engine. We blend strategy, design, and technology to create
            websites that do more than look good — they perform.
          </p>

          <div className="tifeter-points">
            <div className="point-box">
              <img src="/images/Why Invest in Professional Website Development1.png" alt="Check" />
              <span>SEO & conversion optimized</span>
            </div>
            <div className="point-box">
              <img src="/images/Why Invest in Professional Website Development2.png" alt="Check" />
              <span>Mobile-first & lightning fast</span>
            </div>
            <div className="point-box">
              <img src="/images/Why Invest in Professional Website Development3.png" alt="Check" />
              <span>Secure & scalable</span>
            </div>
            <div className="point-box">
              <img src="/images/Why Invest in Professional Website Development4.png" alt="Check" />
              <span>Integrated with business tools</span>
            </div>
          </div>

          <button className="tifeter-btn">Get Started Today</button>
        </div>
      </div>

      {/* Right side image using an img tag */}
      <div className="tifeter-right">
        <img src="/images/ayzz.gif" alt="Right Visual" />
      </div>
    </div>
  );
};

export default Tifeter;
