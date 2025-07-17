import React from "react";
import "./Piter.css";

const Piter = () => {
  return (
    <div className="piter-section">
      <img
        src="/images/Responsive Service Section Design with Animation .png"
        alt="Background"
        className="piter-bg-img"
      />

      <div className="piter-inner">
        <h2 className="piter-heading">Why Choose Our AI Solutions</h2>
        <p className="piter-subheading">
          Our cutting-edge technologies deliver measurable results through
          intelligent automation and data-driven insights.
        </p>

        <div className="piter-boxes">
          <div className="piter-box">
            <img src="/images/piter1.jpg" alt="Accelerated" />
            <h4>Accelerated Performance</h4>
            <p>
              Boost operational efficiency by up to 300% with our AI-powered
              automation solutions.
            </p>
          </div>
          <div className="piter-box">
            <img src="/images/piter2.jpg" alt="Security" />
            <h4>Enterprise Security</h4>
            <p>
              Bank-grade security with advanced encryption and compliance with
              global standards.
            </p>
          </div>
          <div className="piter-box">
            <img src="/images/piter3.jpg" alt="Learning" />
            <h4>Continuous Learning</h4>
            <p>
              Self-improving systems that evolve with your business needs and
              market changes.
            </p>
          </div>
          <div className="piter-box">
            <img src="/images/piter4.jpg" alt="Insights" />
            <h4>Actionable Insights</h4>
            <p>
              Transform complex data into clear, actionable business
              intelligence in real-time.
            </p>
          </div>
        </div>

        <h3 className="piter-stack-heading">Our Technology Stack</h3>
        <p className="piter-stack-subheading">
          Powered by cutting-edge technologies that drive innovation and
          performance.
        </p>

        <div className="piter-tech-icons">
  {[
    { label: "Machine Learning", imgPath: "/images/box9.jpeg" },
    { label: "Computer Vision", imgPath: "/images/box9.jpeg" },
    { label: "NLP", imgPath: "/images/box9.jpeg3.svg" },
    { label: "Big Data", imgPath: "/images/box9.jpeg4.svg" },
    { label: "Neural Networks", imgPath: "/images/box9.jpeg5.svg" },
    { label: "Quantum Computing", imgPath: "/images/box9.jpeg6.svg" },
  ].map((item, index) => (
    <div className="piter-icon-box" key={index}>
      <img src={item.imgPath} alt={item.label} />
      <span>{item.label}</span>
    </div>
  ))}
</div>

        <div className="piter-bottom-cta">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Join the AI revolution and stay ahead of the competition with our
            cutting-edge automation solutions.
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
