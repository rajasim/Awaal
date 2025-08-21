import React from "react";
import "./AdminCase.css";

const Adcasethree = () => {
  return (
    <div className="case-wrapper">
      {/* Left: Article Content */}
       <div className="case-article">
        <h1 className="case-title">
          Why Cloud Is Now the Backbone of Business in 2025
        </h1>
        <p className="case-author">The cloud is no longer a “nice to have” it has become the foundation</p>

        <p className="case-intro">
         which modern businesses are built. In 2025, every competitive company relies on cloud platforms to stay agile, cut costs, and scale without limits. From running business critical applications to storing and analyzing massive datasets, the cloud powers it all. {" "}
          <a href="#" className="case-link">
           he reason is simple: cloud technology gives businesses the flexibility<br></br>
          </a>{" "}<br></br>
          <p>adapt quickly to changing market conditions without heavy upfront investments. Need to launch a new app? The cloud makes it possible in days, not months. Need to handle a sudden surge in customers? You can scale instantly without worrying about physical servers.</p>
        </p>
        <br></br>
        <p>But this power comes with new challenges. As more systems, data, and processes move to the cloud, performance, security, and reliability become mission-critical. A single misconfiguration can lead to costly downtime or security breaches. That’s why businesses are turning to hybrid and multi cloud strategies  mixing different cloud providers and on-premise setups to get the best of all worlds. The downside? Managing these complex environments without expert help can be overwhelming.
</p>
        <br></br>
        <p>We take the complexity out of cloud adoption and management. Whether you’re just starting your cloud journey or already running multiple environments, we help you set up, secure, and optimize your cloud infrastructure. From performance tuning to airtight security, we make sure your cloud works for you not against you.

Cloud done right. Business done better.</p>

      

        
      </div>

      {/* Right: Newsletter Signup */}
      <div className="newsletter-section">
        <div className="newsletter-left-img">
          <img src="./images/iMAEGETitle .gif" alt="Newsletter Visual" />
        </div>
        <div className="newsletter-content">
          <h2>Awwal updates</h2>
          <p>Sign-up to get the latest from Awwal sent straight to your inbox.</p>
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

export default Adcasethree;
