import React from 'react';
import './Cloud.css';

const Cloud = () => {
  return (
    <section className="section-wrapper">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="/video/Why 4k.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content-wrapper">
        <h1 className="heading">Why Choose Our Cloud Services?</h1>
        <p className="subtext">
          In today’s digital economy, the cloud isn't just an option — it's a necessity. 
          Whether you're migrating legacy systems or building cloud-native applications, 
          our cloud services deliver performance, flexibility, and security at every layer.
        </p>

        <div className="features">
          <div className="feature">
            <div className="icon">⚡</div>
            <div>
              <h3 className="feature-title">Accelerate time-to-market</h3>
              <p className="feature-desc">
                Deploy faster with our streamlined cloud infrastructure and automation tools.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="icon">💰</div>
            <div>
              <h3 className="feature-title">Reduce infrastructure costs</h3>
              <p className="feature-desc">
                Pay only for what you use with our scalable cloud solutions.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="icon">🛡️</div>
            <div>
              <h3 className="feature-title">Boost system reliability</h3>
              <p className="feature-desc">
                Achieve 99.9% uptime with our redundant cloud architecture.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="icon">✔️</div>
            <div>
              <h3 className="feature-title">Ensure regulatory compliance</h3>
              <p className="feature-desc">
                Meet industry standards with our security-first cloud design.
              </p>
            </div>
          </div>
        </div>

        <button className="cta-button">Get Started Today</button>
      </div>
    </section>
  );
};

export default Cloud;
