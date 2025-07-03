import React from "react";
import "./NewsSection.css";

export default function NewsSection() {
  return (
    <div className="news-section">
      <h2 className="news-title">Latest News & Insights</h2>
      <p className="news-subtitle">
        Stay updated with the latest cybersecurity trends, threats, and best practices.
      </p>

      <div className="news-grid">
        {/* Card 1 */}
        <div className="news-card">
          <div className="news-top">
            <span className="news-tag">Cybersecurity</span>
            <img src="/images/Untitled design .gif" alt="Cybersecurity News" />
          </div>
          <div className="news-content">
            <p className="news-date">June 15, 2023</p>
            <h3 className="news-heading">
              The Rise of Ransomware-as-a-Service and How to Protect Your Business
            </h3>
            <p className="news-text">
              Learn about the growing threat of Ransomware-as-a-Service (RaaS) and effective strategies to safeguard your organization.
            </p>
            <a className="read-more" href="#">Read more →</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="news-card">
          <div className="news-top">
            <span className="news-tag">Technology</span>
            <img src="/images/Awwal News Image .gif" alt="AI in Security" />
          </div>
          <div className="news-content">
            <p className="news-date">June 8, 2023</p>
            <h3 className="news-heading">
              Leveraging AI and Machine Learning for Enhanced Threat Detection
            </h3>
            <p className="news-text">
              Discover how artificial intelligence and machine learning are revolutionizing cybersecurity threat detection and response.
            </p>
            <a className="read-more" href="#">Read more →</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="news-card">
          <div className="news-top">
            <span className="news-tag">Cloud</span>
            <img src="/images/Awwal News Image size .gif" alt="Cloud Security" />
          </div>
          <div className="news-content">
            <p className="news-date">May 30, 2023</p>
            <h3 className="news-heading">
              Best Practices for Securing Your Cloud Infrastructure in 2023
            </h3>
            <p className="news-text">
              Explore the latest best practices and strategies for maintaining robust security in cloud environments.
            </p>
            <a className="read-more" href="#">Read more →</a>
          </div>
        </div>
      </div>

      <div className="view-all-btn-wrapper">
        <button className="view-all-btn">View All Articles</button>
      </div>
    </div>
  );
}
