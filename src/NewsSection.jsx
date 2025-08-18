import React from "react";
import { Link } from "react-router-dom";
import "./NewsSection.css";
import { useNavigate } from 'react-router-dom';

export default function NewsSection() {
  const nav = useNavigate(); 
  return (
    <div className="news-section">
      <h2 className="news-title">Latest Blogs</h2>
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
            <p className="news-date">July 24, 2025</p>
            <h3 className="news-heading">
              The Rise of AI Powered Threats: Is Your Cybersecurity Ready?
            </h3>
            <p className="news-text">
              Cyber attackers aren’t just using tools anymore they’re using artificial intelligence...
            </p>
            <Link className="read-more" to="/Adcaseone">Read more →</Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="news-card">
          <div className="news-top">
            <span className="news-tag">Technology</span>
            <img src="/images/Awwal News Image .gif" alt="AI in Security" />
          </div>
          <div className="news-content">
            <p className="news-date">July 24, 2025</p>
            <h3 className="news-heading">
              Hyperautomation + GenAI = The Future of Business Tech
            </h3>
            <p className="news-text">
              Automation isn’t just about saving time anymore it’s transforming how entire businesses operate...
            </p>
            <Link className="read-more" to="/Adcasetwo">Read more →</Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="news-card">
          <div className="news-top">
            <span className="news-tag">Cloud</span>
            <img src="/images/Awwal News Image size .gif" alt="Cloud Security" />
          </div>
          <div className="news-content">
            <p className="news-date">July 24, 2025</p>
            <h3 className="news-heading">
              Cloud Security in 2025: New Risks, Smarter Shields
            </h3>
            <p className="news-text">
              Cloud isn’t just where your data lives it’s where your business breathes...
            </p>
            <Link className="read-more" to="/Adcasethree">Read more →</Link>
          </div>
        </div>
      </div>

      <div 
      className="view-all-btn-wrapper"
      onClick={() => nav("/blog")}  // Navigate to the /blog page when the div is clicked
      style={{ cursor: "pointer" }}  // Show pointer cursor on hover
    >
      <button className="view-all-btn">View All Articles</button>
    </div>
    </div>
  );
}
