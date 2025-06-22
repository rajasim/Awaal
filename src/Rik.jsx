import React from "react";
import "./rik.css";

function Rik() {
  return (
    <div className="rik-section">
      <div className="rik-heading">
      
        <div className="rik-icon">⚡</div>
        <h1>
          Automation <span>Benefits</span>
        </h1>
        <p>Transform your business operations with our cutting-edge automation solutions</p>
      </div>

     <div className="rik-cards">
  <div className="rik-card blue">
    <div className="rik-line"></div>
    <div className="rik-top-icon">
      <img src="/icons/gear.svg" alt="Productivity Icon" />
    </div>
    <h4>Increased Productivity</h4>
    <p>Automate <b>40–70%</b> of repetitive tasks, freeing your team to focus on high-value work.</p>
    <div className="rik-stat">
      <label>AUTOMATION IMPACT</label>
      <div className="rik-bar">
        <div className="rik-fill blue-fill" style={{ width: "70%" }}></div>
      </div>
    </div>
    <div className="rik-footer">⚙️ 40–65%+ ROI</div>
  </div>

  <div className="rik-card purple">
    <div className="rik-line"></div>
    <div className="rik-top-icon">
      <img src="/icons/speed.svg" alt="Speed Icon" />
    </div>
    <h4>Faster Decision-Making</h4>
    <p>Access <b>real-time</b> insights based on live data, enabling immediate and informed decisions.</p>
    <div className="rik-stat">
      <label>SPEED IMPROVEMENT</label>
      <div className="rik-bar">
        <div className="rik-fill purple-fill" style={{ width: "85%" }}></div>
      </div>
    </div>
    <div className="rik-footer">⚡ Real-time data processing</div>
  </div>

  <div className="rik-card green">
    <div className="rik-line"></div>
    <div className="rik-top-icon">
      <img src="/icons/cost.svg" alt="Cost Icon" />
    </div>
    <h4>Lower Operational Costs</h4>
    <p>Achieve significant cost savings through streamlined processes and reduced manual intervention.</p>
    <div className="rik-stat">
      <label>COST REDUCTION</label>
      <div className="rik-bar">
        <div className="rik-fill green-fill" style={{ width: "60%" }}></div>
      </div>
    </div>
    <div className="rik-footer">💰 ROI within 6 months</div>
  </div>

  <div className="rik-card yellow">
    <div className="rik-line"></div>
    <div className="rik-top-icon">
      <img src="/icons/accuracy.svg" alt="Accuracy Icon" />
    </div>
    <h4>Higher Accuracy</h4>
    <p>Eliminate human error and ensure consistent outputs across all your business processes.</p>
    <div className="rik-stat">
      <label>ACCURACY RATE</label>
      <div className="rik-bar">
        <div className="rik-fill yellow-fill" style={{ width: "99%" }}></div>
      </div>
    </div>
    <div className="rik-footer">🎯 Error-free operations</div>
  </div>

  <div className="rik-card pink">
    <div className="rik-line"></div>
    <div className="rik-top-icon">
      <img src="/icons/customer.svg" alt="Customer Experience Icon" />
    </div>
    <h4>Better Customer Experience</h4>
    <p>Deliver faster response times and personalized engagement that delights your customers.</p>
    <div className="rik-stat">
      <label>SATISFACTION RATE</label>
      <div className="rik-bar">
        <div className="rik-fill pink-fill" style={{ width: "90%" }}></div>
      </div>
    </div>
    <div className="rik-footer">💗 Personalized Interactions</div>
  </div>

  <div className="rik-card cyan">
    <div className="rik-line"></div>
    <div className="rik-top-icon">
      <img src="/icons/architecture.svg" alt="Scalable Icon" />
    </div>
    <h4>Scalable Architecture</h4>
    <p>Build once, scale across your entire organization without additional development costs.</p>
    <div className="rik-stat">
      <label>SCALABILITY</label>
      <div className="rik-bar">
        <div className="rik-fill cyan-fill" style={{ width: "100%" }}></div>
      </div>
    </div>
    <div className="rik-footer">📦 Enterprise-ready</div>
  </div>
</div>


      <div className="rik-cta">
        <h2>Ready to transform your business?</h2>
        <p>Join thousands of companies already using our automation platform.</p>
        <div className="rik-cta-buttons">
          <button className="rik-btn-primary">Get Started Today →</button>
          <div className="rik-tags">
            <span className="blue-dot">Free Demo</span>
            <span className="pink-dot">24/7 Support</span>
            <span className="green-dot">No Credit Card</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rik;
