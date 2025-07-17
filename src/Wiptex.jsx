import React from 'react';
import './Wiptex.css';

const Wiptex = () => {
  return (
    <section className="wiptex-container">
      <h2 className="wiptex-heading">Ready to Make the Switch?</h2>
      <p className="wiptex-subheading">
        Join the companies who've discovered what purpose built security can do for their business
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
        <button className="custom-solution-btn">Get Your Custom Solution Today</button>
        <button className="case-study-btn">Download Case Study</button>
      </div>

      <div className="wiptex-benefits">
        <span className="benefit">✅ Free consultation</span>
        <span className="benefit">✅ Industry specific solutions</span>
        <span className="benefit">✅ No long term contracts</span>
      </div>
    </section>
  );
};

export default Wiptex;
