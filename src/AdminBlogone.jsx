import React from 'react';
import './AdminBlog.css';

const AdminBlogone = () => {
  return (
    <div className="admin-blog-container">
      {/* Header Section */}
      <div className="header-section">
        <h1>Financial Transactions Monitoring System Using Apache Kafka</h1>
        <hr />
      </div>

      {/* Blog Content Section */}
      <div className="content-section">
        <div className="main-text">
          <p>
         

Banking Applications : Real-time Streaming**: Banking applications act as primary data producers, streaming transaction data continuously in real-time.
<br></br>

Payment Gateways: Event Pushing**: Payment gateways push diverse financial events to Kafka topics for centralized collection and processing.
<br></br>

Multi-broker Cluster: High-throughput**: A multi-broker Kafka cluster ensures scalable, fault-tolerant, and highthroughput data ingestion.
<br></br>

Topic Management : Structured Processing**: Individual topic management isolates transaction types, enabling organized processing and analytics.<br></br>
<br></br>
          </p>
          <p>
         Challenges Faced  Message Duplication and Consumer Group Rebalancing
         <br></br>

Message Duplication Challenge
Network retries cause duplicate messages, impacting data accuracy in financial transactions.

          </p>
          <p>
         Idempotent Producers Solution<br></br>
Enable idempotence with unique Producer-ID and sequence numbers to ensure exactly once delivery.
          </p>
          <p>CConsumer Rebalancing Challenge<br></br>
Frequent rebalancing pauses consumption, increasing latency and reducing throughput.</p>
<p>Static Membership Solution<br></br>
Use static membership and cooperative-sticky assignment to minimize rebalancing interruptions.</p>
        </div>

        <div className="quote-box">
          <p>
            “Robust Analytics Framework
The system delivers a real-time analytics and fraud detection framework tailored for financial services, ensuring low latency and high throughput.<br></br><br></br>

High Availability and Resilience
Leveraging Apache Kafka enables fault tolerance, operational resilience, and scalability to handle high-volume transaction data streams.<br></br><br></br>

Effective in Dynamic Environments
Supports dynamic regulatory requirements with data integrity mechanisms and comprehensive monitoring for proactive system health management.”<br></br> 

          </p>
          <p><strong>— Conclusion </strong></p>
        </div>
      </div>

      {/* Email Subscription Section with Image */}
      <div className="newsletter-section">
        <div className="newsletter-left-img">
          <img src="./images/box9.jpeg" alt="Newsletter Visual" />
        </div>
        <div className="newsletter-content">
          <h2>Todyl updates</h2>
          <p>Sign-up to get the latest from Todyl sent straight to your inbox.</p>
          <label>
            <span>Business Email<span className="required">*</span></span>
            <input type="email" placeholder="you@yourcompany.com" />
          </label>
          <button>Sign-up now</button>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogone;
