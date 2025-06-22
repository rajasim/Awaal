import React from "react";
import "./piter.css";

const Piter = () => {
  return (
    <div className="piter-section">
      <img src="/images/Responsive Service Section Design with Animation .png" alt="Background" className="piter-bg-img" />

      <div className="piter-inner">
        <h2 className="piter-heading">Why Choose Our AI Solutions</h2>
        <p className="piter-subheading">
          Our cutting-edge technologies deliver measurable results through intelligent automation and data-driven insights.
        </p>

        <div className="piter-boxes">
          <div className="piter-box">
            <img src="/icons/lightning.svg" alt="Accelerated" />
            <h4>Accelerated Performance</h4>
            <p>
              Boost operational efficiency by up to 300% with our AI-powered automation solutions.
            </p>
          </div>
          <div className="piter-box">
            <img src="/icons/shield.svg" alt="Security" />
            <h4>Enterprise Security</h4>
            <p>
              Bank-grade security with advanced encryption and compliance with global standards.
            </p>
          </div>
          <div className="piter-box">
            <img src="/icons/brain.svg" alt="Learning" />
            <h4>Continuous Learning</h4>
            <p>
              Self-improving systems that evolve with your business needs and market changes.
            </p>
          </div>
          <div className="piter-box">
            <img src="/icons/bar.svg" alt="Insights" />
            <h4>Actionable Insights</h4>
            <p>
              Transform complex data into clear, actionable business intelligence in real-time.
            </p>
          </div>
        </div>

        <h3 className="piter-stack-heading">Our Technology Stack</h3>
        <p className="piter-stack-subheading">
          Powered by cutting-edge technologies that drive innovation and performance.
        </p>

        <div className="piter-tech-icons">
          {["Machine Learning", "Computer Vision", "NLP", "Big Data", "Neural Networks", "Quantum Computing"].map((label, index) => (
            <div className="piter-icon-box" key={index}>
              <img src={`/icons/icon${index + 1}.svg`} alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="piter-bottom-cta">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Join the AI revolution and stay ahead of the competition with our cutting-edge automation solutions.
          </p>
          <div className="piter-buttons">
            <button className="piter-btn-primary">Schedule a Demo</button>
            <button className="piter-btn-outline">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piter;
