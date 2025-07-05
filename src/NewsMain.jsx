import React from "react";
import "./NewsSection.css";

export default function NewsMain() {
  return (
    <div className="news-section">
      <h2 className="news-title">Foundation</h2>
      <p className="news-subtitle">
        The pillars that define who we are and what we deliver
      </p>

      <div className="news-grid">
        {/* Card 1 */}
        <div className="news-card">
          <div className="news-top">
           
            <img src="/images/vision.gif" alt="Cybersecurity News" />
          </div>
          <div className="news-content">
         
            <h3 className="news-heading">
            <span>VISION</span>
            </h3>
            <p className="news-text">
             To be a trusted leader in delivering innovative IT solutions that empower businesses to thrive in a dynamic digital world.
            </p>
          
          </div>
        </div>

        {/* Card 2 */}
        <div className="news-card">
          <div className="news-top">
           
            <img src="/images/mission.gif" alt="AI in Security" />
          </div>
          <div className="news-content">
          
            <h3 className="news-heading">
              <span>MISSION</span>
            </h3>
            <p className="news-text">
             To provide scalable, resilient, and tailored IT services that enhance operational efficiency, drive growth, and ensure our clients’ long-term success through expert technology and dedicated support.
            </p>
            
          </div>
        </div>

        {/* Card 3 */}
        <div className="news-card">
          <div className="news-top">

            <img src="/images/purpose.gif" alt="Cloud Security" />
          </div>
          <div className="news-content">
           
            <h3 className="news-heading">
             <span>PURPOSE</span>
            </h3>
            <p className="news-text">
           Our purpose is to make technology secure, simple, and strategic for businesses of all sizes.
We exist to solve complex IT challenges, mitigate cyber risks, and unlock the full potential of digital transformation through trust, expertise, and collaboration.
            </p>
          
          </div>
        </div>
      </div>

      <div className="view-all-btn-wrapper">
        <button className="view-all-btn">View All Articles</button>
      </div>
    </div>
  );
}
