import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudy.css";
import { useNavigate } from 'react-router-dom';

const CaseStudy = () => {
    const nav = useNavigate(); 
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
        <Link to="/AdBlogone" className="case-card">
          <div className="case-image"></div>
          <div className="case-content">
            <div className="case-tags">
              <span className="tag yellow">Financial Services</span>
              <span className="location">Regional Bank</span>
            </div>
            <h3>Data Producers and Kafka Cluster</h3>
            <p>
             Banking Applications : Real time Streaming**: Banking applications act as primary data producers, streaming
transaction data continuously in real-time.
            </p>
            <div className="case-footer">
              <span className="green">99.999% uptime</span>
              <span className="duration">6-month implementation</span>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/AdBlogtwo" className="case-card">
          <div className="case-image"></div>
          <div className="case-content">
            <div className="case-tags">
              <span className="tag gold">Healthcare</span>
              <span className="location">Hospital Network</span>
            </div>
            <h3>Transforming Healthcare Efficiency</h3>
            <p>
              The AI was integrated into the hospital’s diagnostic labs, patient database,
and administrative systems..
            </p>
            <div className="case-footer">
              <span className="green">Report errors reduced by 85%</span>
              <span className="duration">12-month project</span>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/AdBlogthree" className="case-card">
          <div className="case-image"></div>
          <div className="case-content">
            <div className="case-tags">
              <span className="tag orange">E-Commerce</span>
              <span className="location">Online Retailer</span>
            </div>
            <h3>Hotel Booking Software</h3>
            <p>
              The system provides seamless hotel discovery, room availability checks, reservation, cancellation, and payment management with an interactive user interface.
            </p>
            <div className="case-footer">
              <span className="green"> 100% Payment Success</span>
              <span className="duration">3-month implementation</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="view-all-btn" 
      onClick={() => nav("/blog")}  // Navigate to the /blog page when the div is clicked
      style={{ cursor: "pointer" }}  // Show pointer cursor on hover
    >
        <button>View All Case Studies</button>
      </div>
    </section>
  );
};

export default CaseStudy;
