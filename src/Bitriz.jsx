import React from 'react';
import './Bitriz.css';

const Bitriz = () => {
  return (
    <section className="bitriz">
      <h2 className="bitriz-title">Featured Projects</h2>
      <p className="bitriz-subtitle">
        A showcase of transformative solutions delivered across diverse industries
      </p>

      <div className="bitriz-box">
        <div className="bitriz-image-wrapper">
          <img src="/images/Title .gif" alt="Abu Dhabi Airport" className="airport-img" />
          <div className="bitriz-image-labels">
            <span className="label pink">50K+ Data Ports</span>
            <span className="label purple">700K SQM Coverage</span>
            <span className="label blue">172 Tech Rooms</span>
          </div>
        </div>

        <div className="bitriz-content">
          <div className="bitriz-left">
            <h3 className="highlight-title">
              Abu Dhabi International Airport
            </h3>
            <p className="description">
              Designed and implemented the complete IT infrastructure for the world’s largest airport terminal,
              covering 700,000 square meters with mission-critical reliability and zero-failure tolerance.
            </p>
            <ul className="features">
              <li><span className="dot cyan"></span>50,000+ structured data ports</li>
              <li><span className="dot pink"></span>3 redundant data centers</li>
              <li><span className="dot blue"></span>172 technology rooms</li>
              <li><span className="dot green"></span>Airport-grade reliability standards</li>
            </ul>
          </div>

          <div className="bitriz-right">
            <div className="metric">
              <h4 className="metric-value pink">50K+</h4>
              <p className="metric-label">Data Ports</p>
            </div>
            <div className="metric">
              <h4 className="metric-value purple">700K</h4>
              <p className="metric-label">SQM Coverage</p>
            </div>
            <div className="metric">
              <h4 className="metric-value red">3</h4>
              <p className="metric-label">Data Centers</p>
            </div>
            <div className="metric">
              <h4 className="metric-value green">172</h4>
              <p className="metric-label">Tech Rooms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bitriz;
