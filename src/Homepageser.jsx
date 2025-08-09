import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepageser.css";

const Homepageser = () => {
  const navigate = useNavigate();

  return (
    <div className="homepageser-container">
      <video autoPlay muted loop playsInline className="homepageser-video">
        <source src="/video/1.mp4" type="video/mp4" />
      </video>

      <div className="homepageser-wrapper">
        <h2 className="homepageser-heading">Our Network Services</h2>
        <p className="homepageser-subheading">
          Comprehensive solutions designed to optimize your network infrastructure
          <br />
          and enhance performance.
        </p>

        <div className="homepageser-grid">
          {/* Box 1 */}
          <div className="homepageser-box">
            <img
              src="/images/ourservices 1.jpg"
              alt="Network Infrastructure"
              className="homepageser-topimg"
            />
            <h3 className="homepageser-title">Cybersecurity</h3>
            <p className="homepageser-desc">
              We provide complete cybersecurity solutions to protect your business, detect threats
              in real time, and ensure compliance keeping you secure and in control.
            </p>
            <img
              src="/images/home1.gif"
              alt="Live Network Simulation"
              className="homepageser-boximg"
            />
            <ul className="homepageser-list">
              <li>Vulnerability Assessment & Penetration Testing </li>
              <li>Managed XDR / MXDR</li>
              <li>EDR / NGAV Protection</li>
            </ul>
            <button
              className="homepageser-btn"
              onClick={() => navigate("/vapt")}
            >
              Explore Solutions →
            </button>
          </div>

          {/* Box 2 */}
          <div className="homepageser-box">
            <img
              src="/images/ourservices  2.jpg"
              alt="Wireless Solutions"
              className="homepageser-topimg"
            />
            <h3 className="homepageser-title">IT Infrastructure</h3>
            <p className="homepageser-desc">
              We build and manage reliable IT setups that power your business. From servers to networks,
              We ensure everything runs smoothly, securely, and efficiently.
            </p>
            <img
              src="/images/home2.gif"
              alt="Coverage Visualization"
              className="homepageser-boximg"
            />
            <ul className="homepageser-list">
              <li>Network Design & Management </li>
              <li>Data Centre Solutions</li>
              <li>Data Centre Solutions</li>
            </ul>
            <button
              className="homepageser-btn"
              onClick={() => navigate("/IT INFRA")}
            >
              Explore Solutions →
            </button>
          </div>

          {/* Box 3 */}
          <div className="homepageser-box">
            <img
              src="/images/ourservices 3.jpg"
              alt="Network Security"
              className="homepageser-topimg"
            />
            <h3 className="homepageser-title">Software & App Development</h3>
            <p className="homepageser-desc">
              We design and build custom software and mobile apps that match your business needs. From idea to launch, We delivers fast, secure, and user-friendly solutions.
            </p>
            <img
              src="/images/home3.gif"
              alt="Threat Protection"
              className="homepageser-boximg"
            />
            <ul className="homepageser-list">
              <li>Custom Software Solutions</li>
              <li>Mobile App Developments</li>
              <li>Web Application Development</li>
            </ul>
            <button
              className="homepageser-btn"
              onClick={() => navigate("/SOFTWARE DEV")}
            >
              Explore Solutions →
            </button>
          </div>

          {/* Box 4 */}
          <div className="homepageser-box">
            <img
              src="/images/ourservices 4.jpg"
              alt="Cloud Networking"
              className="homepageser-topimg"
            />
            <h3 className="homepageser-title">Cloud Services</h3>
            <p className="homepageser-desc">
              We help you migrate, manage, and secure your cloud with ease. We ensure your cloud setup is fast, flexible, and fully protected.
            </p>
            <img
              src="/images/home4.gif"
              alt="Cloud Architecture"
              className="homepageser-boximg"
            />
            <ul className="homepageser-list">
              <li>Cloud Deployment </li>
              <li>Cloud Migration</li>
              <li>Security & Compliance</li>
            </ul>
            <button
              className="homepageser-btn"
              onClick={() => navigate("/CLOUD")}
            >
              Explore Solutions →
            </button>
          </div>

          {/* Box 5 */}
          <div className="homepageser-box">
            <img
              src="/images/ourservices 5.jpg"
              alt="Network Automation"
              className="homepageser-topimg"
            />
            <h3 className="homepageser-title">Website Development</h3>
            <p className="homepageser-desc">
              We create modern, responsive websites that are fast, secure, and built to grow your business. We blend design and tech to give your brand a strong online presence.
            </p>
            <img
              src="/images/home5.gif"
              alt="Automation & AI"
              className="homepageser-boximg"
            />
            <ul className="homepageser-list">
              <li>Custom Website Development</li>
              <li>eCommerce Website Development</li>
              <li>Responsive Web Design</li>
            </ul>
            <button
              className="homepageser-btn"
              onClick={() => navigate("/WEBSITE DEV")}
            >
              Explore Solutions →
            </button>
          </div>

          {/* Box 6 */}
          <div className="homepageser-box">
            <img
              src="/images/ourservices 6.jpg"
              alt="Data Protection"
              className="homepageser-topimg"
            />
            <h3 className="homepageser-title">Migration</h3>
            <p className="homepageser-desc">
              We help you move your data, apps, or infrastructure to new environments with zero hassle. We ensure smooth, secure, and downtime-free migrations.
            </p>
            <img
              src="/images/home6.gif"
              alt="Data Privacy"
              className="homepageser-boximg"
            />
            <ul className="homepageser-list">
              <li>End-to-End Migration Services</li>
              <li>Seamless AI & Automation Migration</li>
              <li>Effortless Cloud Migration</li>
            </ul>
            <button
              className="homepageser-btn"
              onClick={() => navigate("/MIGRATION")}
            >
              Explore Solutions →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepageser;
