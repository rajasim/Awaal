import React from 'react';
import { Link } from 'react-router-dom';
import './Innovate.css';

const Innovate = () => {
  return (
    <section className="ko-section">
      <h1 className="ko-heading">Supported Cloud Platforms</h1>
      <p className="ko-subtext">
        We work across all leading platforms to give you the freedom and flexibility to innovate
      </p>

      <div className="ko-grid">
        <div className="ko-card ko-aws">
          <img src="/images/Supported Cloud Platforms1.png" alt="AWS" className="ko-img" />
          <h3 className="ko-title">Amazon Web Services</h3>
          <p className="ko-desc">
            Comprehensive cloud computing platform with 200+ services from data centers globally
          </p>
        </div>

        <div className="ko-card ko-azure">
          <img src="/images/Supported Cloud Platforms2.png" alt="Azure" className="ko-img" />
          <h3 className="ko-title">Microsoft Azure</h3>
          <p className="ko-desc">
            Enterprise-grade cloud computing with seamless Microsoft ecosystem integration
          </p>
        </div>

        <div className="ko-card ko-gcp">
          <img src="/images/Supported Cloud Platforms3.png" alt="GCP" className="ko-img" />
          <h3 className="ko-title">Google Cloud Platform</h3>
          <p className="ko-desc">
            Cutting-edge infrastructure with advanced AI and machine learning capabilities
          </p>
        </div>

        <div className="ko-card ko-private">
          <img src="/images/Supported Cloud Platforms4.png" alt="Private Cloud" className="ko-img" />
          <h3 className="ko-title">Private & On-Prem Clouds</h3>
          <p className="ko-desc">
            Secure infrastructure solutions including OpenStack, VMware, and custom deployments
          </p>
        </div>
      </div>

      {/* Redirect to form route */}
      <Link to="/Form">
        <button className="ko-button">Get Started →</button>
      </Link>
    </section>
  );
};

export default Innovate;
