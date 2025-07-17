import React from "react";
import "./CaseStudy.css";

const CaseStudy = () => {
  return (
    <section className="case-study-section">
      <div className="case-study-top">
        <h2 className="case-study-title">Case Studies</h2>
        <p className="case-study-subtext">
          See how our infrastructure solutions have transformed businesses across industries.
        </p>
      </div>

      <div className="case-cards">
        {/* Card 1 */}
        <div className="case-card">
          <div className="case-image">
            <img src="/images/WhatsApp Image 2025-07-12 at 3.54.20 PM.jpeg" alt="Building Icon" />
          </div>
          <div className="case-content">
            <div className="case-tags">
              <span className="tag yellow">Financial Services</span>
              <span className="location">Regional Bank</span>
            </div>
            <h3>High-Performance Network Overhaul</h3>
            <p>
              Redesigned the entire network infrastructure for a regional bank with 50+ branches,
              improving performance by 300% and reducing downtime by 99.9%.
            </p>
            <div className="case-footer">
              <span className="green">99.999% uptime</span>
              <span className="duration">6-month implementation</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="case-card">
          <div className="case-image">
            <img src="/images/hospital.png" alt="Hospital Icon" />
          </div>
          <div className="case-content">
            <div className="case-tags">
              <span className="tag gold">Healthcare</span>
              <span className="location">Hospital Network</span>
            </div>
            <h3>Data Center Consolidation</h3>
            <p>
              Consolidated 5 legacy data centers into a modern infrastructure, reducing costs by 40%.
            </p>
            <div className="case-footer">
              <span className="green">40% cost reduction</span>
              <span className="duration">12-month project</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="case-card">
          <div className="case-image">
            <img src="/images/cart.png" alt="E-commerce Icon" />
          </div>
          <div className="case-content">
            <div className="case-tags">
              <span className="tag orange">E-Commerce</span>
              <span className="location">Online Retailer</span>
            </div>
            <h3>AI-Powered Infrastructure</h3>
            <p>
              Implemented AI-driven monitoring and auto-scaling for an e-commerce platform,
              handling 10x traffic during peak.
            </p>
            <div className="case-footer">
              <span className="green">Zero downtime during peaks</span>
              <span className="duration">3-month implementation</span>
            </div>
          </div>
        </div>
      </div>

      <div className="view-all-btn">
        <button>View All Case Studies</button>
      </div>
    </section>
  );
};

export default CaseStudy;
