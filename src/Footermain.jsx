import React from "react";
import "./Footermain.css";

const Footermain = () => {
  return (
    <footer className="footermain-wrapper">
      {/* Newsletter / CTA */}
      <div className="footermain-cta-block">
        <h2 className="footermain-cta-head">
          Stay ahead with <span className="footermain-brand-accent">Awwal</span> insights, trends,<br />
          and updates sent right to your inbox.
        </h2>
        <form
          className="footermain-cta-form"
          onSubmit={(e) => {
            e.preventDefault();
            // handle submit
          }}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="footermain-cta-input"
          />
          <button type="submit" className="footermain-cta-btn">
            SEND
          </button>
        </form>
        <p className="footermain-cta-tagline">
          Big enough to serve you, small enough to know you.
        </p>
      </div>

      {/* Services Row */}
      <div className="footermain-services-row">
        <button className="footermain-svc-btn">
          <img src="/images/foter1.png" alt="" className="footermain-svc-ico" />
          <span>Cybersecurity</span>
        </button>
        <button className="footermain-svc-btn">
         <img src="/images/foter2.png" alt="" className="footermain-svc-ico" />
          <span>AI/Automation</span>
        </button>
        <button className="footermain-svc-btn">
          <img src="/images/foter3.png" alt="" className="footermain-svc-ico" />
          <span>Cloud</span>
        </button>
        <button className="footermain-svc-btn">
          <img src="/images/foter4.png" alt="" className="footermain-svc-ico" />
          <span>Software Dev</span>
        </button>
        <button className="footermain-svc-btn">
          <img src="/images/foter5.png" alt="" className="footermain-svc-ico" />
          <span>IT Infra</span>
        </button>
        <button className="footermain-svc-btn">
          <img src="/images/foter6.png" alt="" className="footermain-svc-ico" />
          <span>Website Dev</span>
        </button>
        <button className="footermain-svc-btn">
          <img src="/images/foter7.png" alt="" className="footermain-svc-ico" />
          <span>Migration</span>
        </button>
      </div>

      {/* Divider line */}
      <div className="footermain-divider" />

      {/* Main Footer Grid */}
      <div className="footermain-grid">
        {/* Brand / About */}
        <div className="footermain-col footermain-col-brand">
          <div className="footermain-brand-row">
            <img
              src="/images/Awwal (8).png"
              alt="Awwal logo"
              className="footermain-brand-logo"
            />
           
          </div>
          <div className="footermain-brand-line"></div>

          <p className="footermain-brand-desc">
            Driving Digital Innovation<br />
            Through Smart IT and<br />
            Automation Solutions
          </p>
        </div>

        {/* Quick Links */}
        <div className="footermain-col">
          <h4 className="footermain-col-head">Quick Links</h4>
          <ul className="footermain-link-list">
            <li><a href="/why-awwal">› Why Awwal</a></li>
            <li><a href="/what-we-do">› What We do</a></li>
            <li><a href="/contact">› Contact</a></li>
          </ul>
        </div>

        {/* Insights Hub */}
        <div className="footermain-col">
          <h4 className="footermain-col-head">Insights Hub</h4>
          <ul className="footermain-link-list">
            <li><a href="/blogs">› Blogs</a></li>
            <li><a href="/case-studies">› Case Studies</a></li>
            <li><a href="/news">› News</a></li>
          </ul>
        </div>
       


        {/* Get In Touch */}
        <div className="footermain-col footermain-col-contact">
          <h4 className="footermain-col-head">Get In Touch</h4>
          <ul className="footermain-contact-list">
            <li>
              <img src="/img/icons/location.svg" alt="" />
              <span>Headquarters<br />Pune, IN</span>
            </li>
            <li>
              <img src="/img/icons/phone.svg" alt="" />
              <a href="tel:+918500008902">+91 85 0000 8902</a>
            </li>
            <li>
              <img src="/img/icons/mail.svg" alt="" />
              <a href="mailto:info@awwalsecurity.com">info@awwalsecurity.com</a>
            </li>
          </ul>
          <div className="footermain-socials">
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="footermain-social-link">
              <img src="/img/icons/linkedin.svg" alt="" />
            </a>
            <a href="https://www.youtube.com" aria-label="YouTube" className="footermain-social-link">
              <img src="/img/icons/youtube.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
       

      {/* Watermark / Brand Banner */}
     <div className="footermain-watermark-wrap">
  <span className="footermain-watermark-text">AWW</span>
  <img
    src="/images/A.png"
    alt="A"
    className="footermain-watermark-mark"
  />
  <span className="footermain-watermark-text">L</span>
</div>


      {/* Bottom Line */}
      <div className="footermain-legal">
        © 2025 Awwal Security. All rights reserved.
      </div>
    </footer>
  );
};

export default Footermain;
