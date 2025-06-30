import React from "react";
import "./Eater.css";

function Eater() {
  return (
    <div className="pater-section">
      {/* Background image */}
      <img src="/images/Responsive Service Section Design with Animation .png" alt="Background" className="pater-bg-img" />

      <div className="pater-inner">
        {/* Header */}
        <h1 className="pater-title">Next-Gen AI Solutions</h1>
        <p className="pater-subtitle">
          Transforming businesses with cutting-edge artificial intelligence and automation technologies that adapt, learn, and evolve with your enterprise.
        </p>

        {/* Cards */}
        <div className="pater-cards">
          <div className="pater-card">
            <img src="/images/box9.jpeg" alt="" className="pater-card-img" />
            <h4>AI-driven Process Automation</h4>
            <p>
              Intelligent systems that learn your operations, eliminate bottlenecks,
              and continuously optimize workflows without human intervention.
            </p>
            <div className="pater-card-line"></div>
          </div>

          <div className="pater-card">
            <img src="/icons/workflow.png" alt="" className="pater-card-img" />
            <h4>Intelligent Workflow Design</h4>
            <p>
              Adaptive workflow architectures that dynamically reconfigure based on
              real-time conditions and predictive analytics.
            </p>
            <div className="pater-card-line"></div>
          </div>

          <div className="pater-card">
            <img src="/icons/decision.png" alt="" className="pater-card-img" />
            <h4>Data-driven Decision Support</h4>
            <p>
              Quantum-inspired analytics that process vast datasets to surface
              insights beyond traditional computational capabilities.
            </p>
            <div className="pater-card-line"></div>
          </div>

          <div className="pater-card">
            <img src="/icons/vision.png" alt="" className="pater-card-img" />
            <h4>Computer Vision Solutions</h4>
            <p>
              Neural network-powered visual systems that recognize patterns,
              anomalies, and objects with superhuman accuracy and speed.
            </p>
            <div className="pater-card-line"></div>
          </div>

          <div className="pater-card">
            <img src="/icons/model-dev.png" alt="" className="pater-card-img" />
            <h4>AI Model Development</h4>
            <p>
              Custom neural architectures designed for your specific business
              challenges, seamlessly integrated with existing enterprise systems.
            </p>
            <div className="pater-card-line"></div>
          </div>

          <div className="pater-card">
            <img src="/icons/nlp.png" alt="" className="pater-card-img" />
            <h4>Natural Language Processing</h4>
            <p>
              Advanced language models that understand context, sentiment, and
              intent, enabling human-like interactions with your digital systems.
            </p>
            <div className="pater-card-line"></div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="pater-bottom">
          <div className="pater-bottom-left">
            <h3>Transform Your Enterprise with Next-Gen AI</h3>
            <p>
              Our intelligent systems don’t just automate—they evolve, adapt, and
              optimize to meet your strategic needs through advanced machine learning.
            </p>
            <div className="pater-buttons">
              <button className="pater-btn-primary">Get Started</button>
              <button className="pater-btn-outline">Learn More</button>
            </div>
          </div>
          <div className="pater-bottom-right">
            <img src="/pater-graph.png" alt="AI Graphic" className="pater-bottom-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eater;
