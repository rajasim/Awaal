import React from 'react';
import './Tifeter.css';

const Tifeter = () => {
  return (
    <div className="tifeter-wrapper">
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/video/4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
            <img src="/images/check-icon.png" alt="Check" />
            <span>SEO & conversion optimized</span>
          </div>
          <div className="point-box">
            <img src="/images/check-icon.png" alt="Check" />
            <span>Mobile-first & lightning fast</span>
          </div>
          <div className="point-box">
            <img src="/images/check-icon.png" alt="Check" />
            <span>Secure & scalable</span>
          </div>
          <div className="point-box">
            <img src="/images/check-icon.png" alt="Check" />
            <span>Integrated with business tools</span>
          </div>
        </div>

        <button className="tifeter-btn">Get Started Today</button>
      </div>
    </div>
  );
};

export default Tifeter;
