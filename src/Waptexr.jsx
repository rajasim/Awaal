import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Wiptex.css';

const Waptexr = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form'); // Redirect to the form page
  };

  return (
    <section className="wiptex-container">
      <h2 className="wiptex-heading">Ready to Make the Switch?</h2>
      <p className="wiptex-subheading">
        See how purpose built IT solutions from cybersecurity to automation.
      </p>

      <div className="wiptex-box">
        <h3 className="wiptex-box-heading">Complete Technology Solutions</h3>
        <div className="wiptex-tags">
          <span className="service-tag tag-cyber">Cybersecurity (VAPT)</span>
          <span className="service-tag tag-ai">AI & Automation</span>
          <span className="service-tag tag-cloud">Cloud Services</span>
          <span className="service-tag tag-infra">IT Infrastructure</span>
          <span className="service-tag tag-software">Software Development</span>
          <span className="service-tag tag-web">Website Development</span>
          <span className="service-tag tag-migration">System Migration</span>
          <span className="service-tag tag-more"> & More...</span>
        </div>
      </div>

      <div className="wiptex-actions">
        <button 
          className="custom-solution-btn"
          onClick={handleClick}
        >
          Get Your Custom Solution Today
        </button>
      </div>

      <div className="wiptex-benefits">
        <span className="benefit">✅ Free consultation</span>
        <span className="benefit">✅ Industry specific solutions</span>
        <span className="benefit">✅ No long term contracts</span>
      </div>
    </section>
  );
};

export default Waptexr;
