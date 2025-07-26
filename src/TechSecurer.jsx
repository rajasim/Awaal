import React from "react";
import "./TechSecure.css";

const TechSecure = () => {
  return (
    <div className="ts-container">
      {/* Background Image */}
      <img
        src="/images/BG Home.jpg"
        alt="Background"
        className="ts-bg-image"
      />

      <h2 className="ts-heading">
        About <span className="ts-highlight">Awwal </span>
      </h2>
      <p className="ts-subheading">
        we blend technical expertise with a focus on digital resilience to deliver smart, secure, and future-ready solutions.
      </p>

      <div className="ts-section">
        <div className="ts-story-box">
          <h3 className="ts-story-heading">Our Story</h3>
          <p className="ts-story-text">
            We began with a clear purpose to deliver secure, reliable, and intelligent tech solutions in a digital first world. From day one, our focus has been on combining deep technical expertise with a commitment to quality,  and innovation.
          </p>
          <p className="ts-story-text">
          We stands as a full-scale tech solutions partner, offering everything from AI powered automation and Cloud services to Software development, IT infrastructure, Cybersecurity and Website solutions.
          </p>
          <p className="ts-story-text">
            Our growth is rooted in curiosity, innovation, and a relentless drive to stay ahead of the curve. We work with businesses of all sizes, helping them simplify technology, strengthen security, and scale smarter.
          </p>
        </div>

        <div className="ts-image-box">
          <img
            src="/images/Screenshot 2025-06-29 230424.png"
            alt="TechSecure Visual"
            className="ts-image"
          />
        </div>
      </div>

      <h3 className="ts-values-title">
        Our <span className="ts-highlight">Values</span>
      </h3>

      <div className="ts-values">
        <div className="ts-value-box">
          <img
            src="/images/About Awwal 1.png"
            alt="Security Icon"
            className="ts-icon"
          />
          <h4>Security First</h4>
          <p>
            We prioritize security in everything we do, ensuring your data and
            systems are protected.
          </p>
        </div>

        <div className="ts-value-box">
          <img
            src="/images/About Awwal 2.png"
            alt="Innovation Icon"
            className="ts-icon"
          />
          <h4>Innovation</h4>
          <p>
            We explore new technologies and approaches to deliver
            cutting-edge solutions.
          </p>
        </div>

        <div className="ts-value-box">
          <img
            src="/images/About Awwal 3.png"
            alt="Client Icon"
            className="ts-icon"
          />
          <h4>Client Partnership</h4>
          <p>
            We build lasting relationships and understand the unique needs of
            each client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechSecure;
