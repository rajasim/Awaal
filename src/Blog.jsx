import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-wrapper">
      {/* Top Section */}
      <section className="blog-header">
        <h1 className="blog-title">Tech Insights Hub</h1>
        <p className="blog-subtitle">
          Stay ahead with the latest technology trends, insights, and success stories
        </p>
        <div className="blog-tabs">
          <button className="blog-tab active">All Content</button>
          <button className="blog-tab">Blogs</button>
          <button className="blog-tab">News</button>
          <button className="blog-tab">Insights</button>
          <button className="blog-tab">Case Studies</button>
        </div>
      </section>

      {/* Featured Content */}
      <section className="blog-section">
        <h2 className="blog-section-title">Featured Content</h2>
        <div className="blog-cards">
          <div className="blog-card">
            <div className="blog-card-image">
              <img src="/images/Blog1.png" alt="AI Enterprise" className="blog-top-img" />
              <span className="blog-tag purple">Insights</span>
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">The Future of AI in Enterprise Solutions</h3>
              <p className="blog-card-text">
                Exploring how artificial intelligence is transforming business operations and
                creating new opportunities for growth and innovation.
              </p>
              <div className="blog-card-footer">
                <span className="blog-date">Dec 15, 2024</span>
                <a href="#" className="blog-link purple">Read More</a>
              </div>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-card-image">
              <img src="/images/Blog2.png" alt="TechCorp Efficiency" className="blog-top-img" />
              <span className="blog-tag green">Case Study</span>
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">How TechCorp Increased Efficiency by 300%</h3>
              <p className="blog-card-text">
                A comprehensive look at how cloud migration and automation helped a Fortune 500
                company revolutionize their operations.
              </p>
              <div className="blog-card-footer">
                <span className="blog-date">Dec 12, 2024</span>
                <a href="#" className="blog-link green">View Study</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="blog-section">
        <h2 className="blog-section-title">Latest Blogs</h2>
        <div className="blog-cards">
          <div className="blog-card">
            <div className="blog-card-image">
              <img src="/images/Blog3.png" alt="JavaScript Frameworks" className="blog-top-img" />
              <span className="blog-tag orange">Blog</span>
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">10 JavaScript Frameworks to Watch in 2024</h3>
              <p className="blog-card-text">
                Discover the emerging JavaScript frameworks that are shaping the future of web
                development.
              </p>
              <div className="blog-card-footer">
                <span className="blog-date">Dec 10, 2024</span>
                <a href="#" className="blog-link orange">Read →</a>
              </div>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-card-image">
              <img src="/images/Blog4.png" alt="Web Performance" className="blog-top-img" />
              <span className="blog-tag orange">Blog</span>
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">Optimizing Web Performance in 2024</h3>
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
      {/* Tech News */}
      <section className="blog-section">
        <h2 className="blog-section-title">Tech News</h2>
        <div className="blog-cards">
          <div className="blog-card">
            <div className="blog-card-image">
              <img src="/images/Blog5.png" alt="JavaScript Frameworks" className="blog-top-img" />
              <span className="blog-tag orange">Blog</span>
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">10 JavaScript Frameworks to Watch in 2024</h3>
              <p className="blog-card-text">
                Discover the emerging JavaScript frameworks that are shaping the future of web
                development.
              </p>
              <div className="blog-card-footer">
                <span className="blog-date">Dec 10, 2024</span>
                <a href="#" className="blog-link orange">Read →</a>
              </div>
            </div>
          </div>

          <div className="blog-card">
            <div className="blog-card-image">
              <img src="/images/Blog6.png" alt="Web Performance" className="blog-top-img" />
              <span className="blog-tag orange">Blog</span>
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">Optimizing Web Performance in 2024</h3>
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

      {/* Industry Insights */}
      <section className="blog-section">
        <h2 className="blog-section-title">Industry Insights</h2>
        <div className="blog-cards">
          <div className="blog-card">
            <div className="blog-card-image">
              <img src="/images/Blog7.png" alt="Quantum Computing" className="blog-top-img" />
              <span className="blog-tag pink">Insight</span>
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">The Rise of Quantum Computing</h3>
              <p className="blog-card-text">
                Understanding the potential impact of quantum computing on various industries.
              </p>
              <div className="blog-card-footer">
                <span className="blog-date">Dec 5, 2024</span>
                <a href="#" className="blog-link pink">Read →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="blog-section">
        <h2 className="blog-section-title">Success Stories</h2>
        <div className="blog-cards">
          <div className="blog-card">
            <div className="blog-card-image">
              <img src="/images/Blog8.png" alt="Startup Success" className="blog-top-img" />
              <span className="blog-tag blue">Success</span>
            </div>
            <div className="blog-card-content">
              <h3 className="blog-card-title">How a Startup Achieved Market Domination</h3>
              <p className="blog-card-text">
                A case study showcasing how a startup leveraged cutting-edge tech to scale rapidly.
              </p>
              <div className="blog-card-footer">
                <span className="blog-date">Nov 20, 2024</span>
                <a href="#" className="blog-link blue">View →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default Blog;
