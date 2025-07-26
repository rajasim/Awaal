import React from "react";
import "./NewsSection.css";

export default function NewsSection() {
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
              The Rise of AI-Powered Threats: Is Your Cybersecurity Ready?
            </h3>
            <p className="news-text">
              Cyber attackers aren’t just using tools anymore they’re using artificial intelligence. From hyper-realistic deepfakes to AI generated phishing attacks, the threat landscape is getting smarter, faster, and more convincing.
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
            <p className="news-date">July 24, 2025</p>
            <h3 className="news-heading">
              Hyperautomation + GenAI = The Future of Business Tech
            </h3>
            <p className="news-text">
             Automation isn’t just about saving time anymore it’s about transforming how entire businesses operate.
In 2025, the blend of Hyperautomation and Generative AI is powering smarter workflows, faster decision making, and next level customer experiences
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
            <p className="news-date">July 24, 2025</p>
            <h3 className="news-heading">
              Cloud Security in 2025: New Risks, Smarter Shields
            </h3>
            <p className="news-text">
              Cloud isn’t just where your data lives it’s where your business breathes. But with cloud adoption rising, so do the threats. From misconfigured APIs to unmonitored access points, cloud security is a top concern for growing companies.
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
