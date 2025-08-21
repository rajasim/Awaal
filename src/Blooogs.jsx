import React, { useState } from "react";
import "./Blog.css";

const Blooogs = () => {
  // State to track active section
  const [activeSection, setActiveSection] = useState("all");

  // Function to handle tab clicks
  const handleTabClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="blog-wrapper">
      {/* Top Section */}
      <section className="blog-header">
        <h1 className="blog-title">Tech Insights Hub</h1>
        <p className="blog-subtitle">
          Stay ahead with the latest technology trends, insights, and success stories
        </p>
        <div className="blog-tabs">
          <button
            className={`blog-tab ${activeSection === "all" ? "active" : ""}`}
            onClick={() => handleTabClick("all")}
          >
            All Content
          </button>
          <button
            className={`blog-tab ${activeSection === "blogs" ? "active" : ""}`}
            onClick={() => handleTabClick("blogs")}
          >
            Blogs
          </button>
          <button
            className={`blog-tab ${activeSection === "news" ? "active" : ""}`}
            onClick={() => handleTabClick("news")}
          >
            News
          </button>
          <button
            className={`blog-tab ${activeSection === "insights" ? "active" : ""}`}
            onClick={() => handleTabClick("insights")}
          >
            Insights
          </button>
          <button
            className={`blog-tab ${activeSection === "caseStudies" ? "active" : ""}`}
            onClick={() => handleTabClick("caseStudies")}
          >
            Case Studies
          </button>
        </div>
      </section>

      {/* Featured Content */}
      {activeSection === "all" || activeSection === "insights" ? (
        <section className="blog-section">
          <h2 className="blog-section-title">Featured Content</h2>
          <div className="blog-cards">
            <div className="blog-card">
              <div className="blog-card-image">
                <img
                  src="/images/Blog1.png"
                  alt="AI Enterprise"
                  className="blog-top-img"
                />
                <span className="blog-tag purple">Insights</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">
                  The Future of AI in Enterprise Solutions
                </h3>
                <p className="blog-card-text">
                  Exploring how artificial intelligence is transforming business operations and creating new opportunities for growth and innovation.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-date">Dec 15, 2024</span>
                  <a href="#" className="blog-link purple">Read More</a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-image">
                <img
                  src="/images/Blog2.png"
                  alt="TechCorp Efficiency"
                  className="blog-top-img"
                />
                <span className="blog-tag green">Case Study</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">
                  How TechCorp Increased Efficiency by 300%
                </h3>
                <p className="blog-card-text">
                  A comprehensive look at how cloud migration and automation helped a Fortune 500 company revolutionize their operations.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-date">Dec 12, 2024</span>
                  <a href="#" className="blog-link green">View Study</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Latest Blogs */}
      {activeSection === "all" || activeSection === "blogs" ? (
        <section className="blog-section">
          <h2 className="blog-section-title">Latest Blogs</h2>
          <div className="blog-cards">
            <div className="blog-card">
              <div className="blog-card-image">
                <img
                  src="/images/Blog3.png"
                  alt="JavaScript Frameworks"
                  className="blog-top-img"
                />
                <span className="blog-tag orange">Blog</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">
                  10 JavaScript Frameworks to Watch in 2024
                </h3>
                <p className="blog-card-text">
                  Discover the emerging JavaScript frameworks that are shaping the future of web development.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-date">Dec 10, 2024</span>
                  <a href="#" className="blog-link orange">Read →</a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-image">
                <img
                  src="/images/Blog4.png"
                  alt="Web Performance"
                  className="blog-top-img"
                />
                <span className="blog-tag orange">Blog</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">
                  Optimizing Web Performance in 2024
                </h3>
                <p className="blog-card-text">
                  Essential techniques and tools for creating lightning-fast web applications.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-date">Dec 1, 2024</span>
                  <a href="#" className="blog-link orange">Read →</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Case Studies */}
      {activeSection === "all" || activeSection === "caseStudies" ? (
        <section className="blog-section">
          <h2 className="blog-section-title">Case Studies</h2>
          <div className="blog-cards">
            <div className="blog-card">
              <div className="blog-card-image">
                <img
                  src="/images/Blog5.png"
                  alt="Healthcare Automation"
                  className="blog-top-img"
                />
                <span className="blog-tag green">Case Study</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">
                  Revolutionizing Healthcare with AI Automation
                </h3>
                <p className="blog-card-text">
                  A look at how AI is being integrated into healthcare systems to improve patient care and reduce operational costs.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-date">Nov 25, 2024</span>
                  <a href="#" className="blog-link green">View Study</a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-image">
                <img
                  src="/images/Blog6.png"
                  alt="E-commerce Growth"
                  className="blog-top-img"
                />
                <span className="blog-tag green">Case Study</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">
                  E-commerce Growth Through Predictive Analytics
                </h3>
                <p className="blog-card-text">
                  Discover how predictive analytics are helping e-commerce platforms forecast trends and optimize sales.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-date">Nov 18, 2024</span>
                  <a href="#" className="blog-link green">View Study</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Tech News */}
      {activeSection === "all" || activeSection === "news" ? (
        <section className="blog-section">
          <h2 className="blog-section-title">Tech News</h2>
          <div className="blog-cards">
            <div className="blog-card">
              <div className="blog-card-image">
                <img
                  src="/images/Blog7.png"
                  alt="AI Innovation"
                  className="blog-top-img"
                />
                <span className="blog-tag orange">News</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">
                  The Latest Innovations in AI for 2024
                </h3>
                <p className="blog-card-text">
                  A roundup of the most exciting developments in artificial intelligence, from machine learning to natural language processing.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-date">Dec 5, 2024</span>
                  <a href="#" className="blog-link orange">Read →</a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-image">
                <img
                  src="/images/Blog8.png"
                  alt="Quantum Computing"
                  className="blog-top-img"
                />
                <span className="blog-tag orange">News</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">
                  Breakthroughs in Quantum Computing for 2024
                </h3>
                <p className="blog-card-text">
                  An overview of the latest advancements in quantum computing and how they could revolutionize industries.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-date">Nov 30, 2024</span>
                  <a href="#" className="blog-link orange">Read →</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Industry Insights */}
      {activeSection === "all" || activeSection === "insights" ? (
        <section className="blog-section">
          <h2 className="blog-section-title">Industry Insights</h2>
          <div className="blog-cards">
            <div className="blog-card">
              <div className="blog-card-image">
                <img
                  src="/images/Blog9.png"
                  alt="Cloud Computing Trends"
                  className="blog-top-img"
                />
                <span className="blog-tag purple">Insights</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">
                  Cloud Computing Trends to Watch in 2024
                </h3>
                <p className="blog-card-text">
                  How cloud technologies are shaping the future of businesses across sectors and industries.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-date">Dec 2, 2024</span>
                  <a href="#" className="blog-link purple">Read More</a>
                </div>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-card-image">
                <img
                  src="/images/Blog10.png"
                  alt="Blockchain in Finance"
                  className="blog-top-img"
                />
                <span className="blog-tag purple">Insights</span>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">
                  The Rise of Blockchain in Financial Services
                </h3>
                <p className="blog-card-text">
                  Blockchain technology is changing the way the financial industry operates, improving security and reducing fraud.
                </p>
                <div className="blog-card-footer">
                  <span className="blog-date">Nov 28, 2024</span>
                  <a href="#" className="blog-link purple">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* Load More Button */}
      <div className="load-more-container">
        <button className="load-more-btn">Load More Content</button>
      </div>

      {/* Stay Updated Section */}
      <section className="subscribe-section">
        <h2 className="subscribe-title">Stay Updated</h2>
        <p className="subscribe-text">
          Get the latest tech insights delivered to your inbox weekly
        </p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" className="subscribe-input" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Blooogs;
