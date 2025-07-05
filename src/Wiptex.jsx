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
          <span className="tag red">Cybersecurity (VAPT)</span>
          <span className="tag blue">AI & Automation</span>
          <span className="tag green">Cloud Services</span>
          <span className="tag purple">IT Infrastructure</span>
          <span className="tag orange">Software Development</span>
          <span className="tag teal">Website Development</span>
          <span className="tag pink">System Migration</span>
          <span className="tag gray">& More...</span>
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
