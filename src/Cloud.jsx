import React from 'react';
import './Cloud.css';

const Cloud = () => {
  return (
    <section className="cloud-section">
      {/* Background Image */}
     
      <div className="cloud-container">
        {/* Left Content */}
        <div className="cloud-left">
          <h1 className="cloud-heading">Why Choose Our Cloud Services?</h1>
          <p className="cloud-subtext">
            In today’s digital economy, the cloud isn't just an option — it's a necessity.
            Whether you're migrating legacy systems or building cloud-native applications,
            our cloud services deliver performance, flexibility, and security at every layer.
          </p>

          <div className="cloud-features">
            <div className="cloud-feature">
              <div className="cloud-icon"><img src="/images/Why Choose Our Cloud Services1.png" alt="Accelerate" /></div>
              <div>
                <h3>Accelerate time-to-market</h3>
                <p>Deploy faster with our streamlined cloud infrastructure and automation tools.</p>
              </div>
            </div>

            <div className="cloud-feature">
              <div className="cloud-icon"><img src="/images/Why Choose Our Cloud Services2.png" alt="Cost" /></div>
              <div>
                <h3>Reduce infrastructure costs</h3>
                <p>Pay only for what you use with our scalable cloud solutions.</p>
              </div>
            </div>

            <div className="cloud-feature">
              <div className="cloud-icon"><img src="/images/Why Choose Our Cloud Services3.png" alt="Reliability" /></div>
              <div>
                <h3>Boost system reliability</h3>
                <p>Achieve 99.9% uptime with our redundant cloud architecture.</p>
              </div>
            </div>

            <div className="cloud-feature">
              <div className="cloud-icon"><img src="/images/Why Choose Our Cloud Services4.png" alt="Compliance" /></div>
              <div>
                <h3>Ensure regulatory compliance</h3>
                <p>Meet industry standards with our security-first cloud design.</p>
              </div>
            </div>
          </div>

         
        </div>

        {/* Right Image */}
        <div className="cloud-right">
          <img src="/images/cloudside.gif" alt="Cloud Server Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Cloud;
