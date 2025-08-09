import React from "react";
import { useNavigate } from "react-router-dom";
import "./Piter.css";

const Piter = () => {
  const navigate = useNavigate();

  const handleScheduleDemoClick = () => {
    navigate("/Form"); // Redirect to Form page
  };

  return (
    <div className="piter-section">
      <img
        src="/images/AI bg.jpg"
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
            <img src="/images/Our Technology Stack1.png" alt="Accelerated" />
            <h4>Accelerated Performance</h4>
            <p>
              Boost operational efficiency by up to 300% with our AI-powered
              automation solutions.
            </p>
          </div>
          <div className="piter-box">
            <img src="/images/Our Technology Stack2.png" alt="Security" />
            <h4>Enterprise Security</h4>
            <p>
              Bank-grade security with advanced encryption and compliance with
              global standards.
            </p>
          </div>
          <div className="piter-box">
            <img src="/images/Our Technology Stack3.png" alt="Learning" />
            <h4>Continuous Learning</h4>
            <p>
              Self-improving systems that evolve with your business needs and
              market changes.
            </p>
          </div>
          <div className="piter-box">
            <img src="/images/Our Technology Stack4.png" alt="Insights" />
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
            { label: "Machine Learning", imgPath: "/images/Our Technology Stack1.png" },
            { label: "Computer Vision", imgPath: "/images/Our Technology Stack2.png" },
            { label: "NLP", imgPath: "/images/Our Technology Stack3.png" },
            { label: "Big Data", imgPath: "/images/Our Technology Stack4.png" },
            { label: "Neural Networks", imgPath: "/images/Our Technology Stack5.png" },
            { label: "Quantum Computing", imgPath: "/images/Our Technology Stack6.png" },
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
            <button
              className="piter-btn-primary"
              onClick={handleScheduleDemoClick}
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piter;
