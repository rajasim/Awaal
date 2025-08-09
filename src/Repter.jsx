import React from 'react';
import './Repter.css';
import { useNavigate } from 'react-router-dom';

const Repter = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/Form'); // ✅ Redirect to your form page
  };

  return (
    <div className="repter-wrapper">
      {/* Background Image */}

      <div className="repter-inner">
        {/* Left Content */}
        <div className="repter-content">
          <div className="repter-badge"> Innovative Software Solutions</div>

          <h1>
            We Build <span className="highlight-blue">Powerful</span> Software &{' '}
            <span className="highlight-purple">Stunning</span> Apps
          </h1>

          <p>
            Transform your business with custom software development that drives innovation,
            efficiency, and growth. Our expert team delivers solutions that exceed expectations.
          </p>

          <div className="repter-buttons">
            <button className="btn-primary" onClick={handleRedirect}>
              Explore Solutions
            </button>
          </div>

          <div className="repter-tech">
            <span>Powered by cutting-edge technologies</span>
            <div className="tech-icons">
              <img src="/images/We Build Powerful Software & Stunning Apps1.png" alt="React" />
              <img src="/images/We Build Powerful Software & Stunning Apps2.png" alt="Node.js" />
              <img src="/images/We Build Powerful Software & Stunning Apps3.png" alt="Flutter" />
              <img src="/images/We Build Powerful Software & Stunning Apps4.png" alt="AWS" />
            </div>
          </div>
        </div>

        {/* ✅ Right-side image */}
        <div className="repter-image">
          <img src="/images/softwright.gif" alt="Right Side Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Repter;
