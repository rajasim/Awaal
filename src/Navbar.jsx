import React, { useRef, useState } from "react";
import "./Navbar.css";
import { FaSearch, FaUser, FaPhone } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [navbaroption, setnavbaroption] = useState("");
  const [hoveredSubItem, setHoveredSubItem] = useState("");
  const centernav = useRef();
  const rightnav = useRef();

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const nav = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://www.barracuda.com/assets/img/logos/barracuda-logo-white.svg"
          alt="Barracuda Logo"
          className="logo"
        />
      </div>

      <div className="navbar-center" ref={centernav}>
        {[
          
          "WHY AWWAL",
          "SERVICES",
          "WHAT WE DO",
          "Insights Hub",
          "CONTACT US",
         
        ].map((item, i) => (
          <div
            key={i}
            style={{
              backgroundColor: navbaroption === item && "white",
              color: navbaroption === item && "black",
            }}
            className="nav-item"
            onMouseEnter={() => {
              handleDropdown(item.toLowerCase());
              setnavbaroption(item);
            }}
            onMouseLeave={() => {
              setOpenDropdown(null);
              setnavbaroption("");
              setHoveredSubItem("");
            }}
            onClick={() => {
              if (item === "WHY AWWAL") nav("/why-awwal");
              else if (item === "CONTACT US") nav("/contact");
              else if (item === "WHAT WE DO") nav("/what-we-do");
            }}
          >
            {item}
            {item === "Insights Hub" && openDropdown === "insights hub" && (
  <div className="insights-hub-menu">
    {/* LEFT SIDE */}
    <div className="insights-left-panel">
      <span className="featured-badge">FEATURED THIS WEEK</span>
      <h2 className="insights-main-title">THE FUTURE OF DIGITAL INNOVATION</h2>
      <p className="insights-main-desc">
        DISCOVER CUTTING-EDGE INSIGHTS, INDUSTRY TRENDS, AND EXPERT ANALYSIS THAT'S SHAPING TOMORROW'S DIGITAL LANDSCAPE.
      </p>
      <div className="insights-stats-box">
        <div className="stat-item">
          <img src="/images/navbar1.png" alt="Articles" />
          <span> ARTICLES</span>
        </div>
        <div className="stat-item">
          <img src="/images/navbar2.png" alt="Readers" />
          <span>READERS</span>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="insights-right-panel">
      <h3 className="categories-title">EXPLORE CATEGORIES</h3>

      <div className="category-box">
        <div className="category-icon"><img src="/images/navbar1.png" alt="Blog" /></div>
        <div className="category-info">
          <h4>BLOG </h4>
          <p>LATEST ARTICLES AND INSIGHTS FROM OUR TEAM</p>
          <div className="category-tags">
            <span>DAILY UPDATES</span>
            <span>MOST POPULAR</span>
          </div>
        </div>
      </div>

      <div className="category-box">
        <div className="category-icon"><img src="/images/navbar2.png" alt="News" /></div>
        <div className="category-info">
          <h4>NEWS </h4>
          <p>INDUSTRY UPDATES AND ANNOUNCEMENTS</p>
          <div className="category-tags">
            <span>BREAKING NEWS</span>
            <span>LIVE UPDATES</span>
          </div>
        </div>
      </div>

      <div className="category-box">
        <div className="category-icon"><img src="/images/navbar3.png" alt="Insights" /></div>
        <div className="category-info">
          <h4>INSIGHTS </h4>
          <p>DATA-DRIVEN ANALYSIS AND RESEARCH</p>
          <div className="category-tags">
            <span>ANALYTICS</span>
            <span>TRENDING</span>
          </div>
        </div>
      </div>

      <div className="category-box">
        <div className="category-icon"><img src="/images/navbar4.png" alt="Case Studies" /></div>
        <div className="category-info">
          <h4>CASE STUDIES </h4>
          <p>REAL-WORLD SUCCESS STORIES</p>
          <div className="category-tags">
            <span>BUSINESS</span>
            <span>PREMIUM</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

            {item === "SERVICES" && openDropdown === "services" && (
              <div className="mega-dropdown">
                <div className="mega-left">
                  <div className="mega-platform-box">
                    <h3 style={{ lineHeight: "1.5rem" }}>
                     Awwal  Platform
                    </h3>
                    <p>
                     Driving Digital Innovation Through
Smart IT and Automation Solutions
                    </p>
                   
                  </div>
                  <div className="mega-left-menu">
                    <div onMouseEnter={() => setHoveredSubItem("CYBERSECURITY")}>
                     CYBERSECURITY
                    </div>
                    
                    <div
                      onMouseEnter={() =>
                        setHoveredSubItem("AI & Automation Services")
                      }
                    >
                      AI & Automation 
                    </div>
                    <div
                      onMouseEnter={() =>
                        setHoveredSubItem("CLOUD")
                      }
                    >
                      CLOUD
                    </div>
                    <div
                      onMouseEnter={() =>
                        setHoveredSubItem("SOFTWARE DEV")
                      }
                    >
                      SOFTWARE DEV
                    </div>
                    <div
                      onMouseEnter={() =>
                        setHoveredSubItem("IT INFRA")
                      }
                    >
                      IT INFRA
                    </div>
                    <div
                      onMouseEnter={() =>
                        setHoveredSubItem("WEBSITE DEV")
                      }
                    >
                      WEBSITE DEV
                    </div>
                    <div
                      onMouseEnter={() =>
                        setHoveredSubItem("MIGRATION")
                      }
                    >
                      MIGRATION
                    </div>
                    
                    
                  </div>
                </div>

                <div className="mega-right">
                  {hoveredSubItem === "CYBERSECURITY" && (
                    <>
                      <h3>Stay Secure, Stay in Control with End-to-End Cybersecurity Solutions</h3>
                      <p>
                       We provide complete cybersecurity solutions to protect your business, detect threats in real time, and ensure compliance keeping you secure and in control.
                      </p>
                      <button className="plans-btnon">Services →</button>

                      <div className="links-grid" onClick={() => nav("/vapt")}>
                        <a href="#">VAPT </a>
                        <a href="#">Managed XDR / MXDR</a>
                        <a href="#">EDR / NGAV Protection</a>
                        <a href="#">Network Security</a>
                        <a href="#">GRC </a>
                        <a href="#">Email Protection</a>
                       
                        
                        <a href="#">Ransomware Defense</a>
                        <a href="#">Data Loss Prevention (DLP)</a>
                      </div>

                     <hr style={{ margin: "1rem 0" }} />
                      <h4>Try at zero cost</h4>
                     
                      <button className="plans-btn">FREE DEMO →</button>
                    </>
                  )}

                  {hoveredSubItem === "CLOUD" && (
                    <>
                      <h3>
                      Powerful, Secure, and Scalable Cloud Solutions Made Simple
                      </h3>
                      <p>
                      We help you migrate, manage, and secure your cloud with ease. We ensure your cloud setup is reliable, scalable, fast, flexible, and fully protected.
                      </p>
                      <button className="plans-btnon">Services →</button>

                      <div
                        className="links-grid"
                        onClick={() => nav("/CLOUD")}
                      >
                        <a href="#">Cloud Deployment </a>
                        <a href="#">Cloud Migration</a>
                        <a href="#">Security & Compliance</a>
                        <a href="#">Monitoring & Management</a>
                        <a href="#">Scalable Virtual Environments</a>
                      </div>

                      
                    <hr style={{ margin: "1rem 0" }} />
                      <h4>Try at zero cost</h4>
                     
                      <button className="plans-btn">FREE DEMO →</button>
                    </>
                  )}

                  {hoveredSubItem === "AI & Automation Services" && (
                    <>
                      <h3>Smarter Systems. Faster Results. Scalable Innovation.</h3>
                      <p>
                       Unlock the power of AI & Automation to accelerate workflows, reduce costs, and make data driven decisions.
                      </p>
                      <button className="plans-btnon">Services →</button>

                      <div className="links-grid"
                       onClick={() => nav("/AI & Automation Services")}>
                        <a href="#">AI driven Process Automation</a>
                        <a href="#">Intelligent Workflow Design</a>
                        <a href="#">Data driven Decision Support</a>
                        <a href="#">AI Model Development & Integration</a>
                        <a href="#">Natural Language Processing (NLP)</a>
                      </div>

                      
                     <hr style={{ margin: "1rem 0" }} />
                      <h4>Try at zero cost</h4>
                     
                      <button className="plans-btn">FREE DEMO →</button>
                    </>
                  )}

                  {hoveredSubItem === "SOFTWARE DEV" && (
                    <>
                      <h3>Smart, Scalable Software and App Development for Every Need</h3>
                      <p>
                       We design and build custom software and mobile apps that match your business needs. From idea to launch, we deliver fast, secure, and user-friendly solutions.
                      </p>
                      <button className="plans-btnon">Explore Network →</button>
                      <div className="links-grid"
                      onClick={() => nav("/SOFTWARE DEV")}>
                        <a href="#">Custom Software Solutions</a>
                        <a href="#">Mobile App Development</a>
                        <a href="#">Web Application Development</a>
                        <a href="#">API Development & Integration</a>
                         <a href="#">Scalable architecture</a>
                      </div>
                     
                    <hr style={{ margin: "1rem 0" }} />
                      <h4>Try at zero cost</h4>
                     
                      <button className="plans-btn">FREE DEMO →</button>
                    </>
                  )}

                  {hoveredSubItem === "IT INFRA" && (
                    <>
                      <h3>
                       Robust and Reliable IT Infrastructure Built for Performance
                      </h3>
                      <p>
                       We build and manage reliable IT setups that power your business. From servers to networks, we ensure everything runs smoothly, securely, and efficiently.
                      </p>
                      <button className="plans-btnon">View Details →</button>
                      <div className="links-grid"
                       onClick={() => nav("/IT INFRA")}>
                       
                        <a href="#">Network Design & Management</a>
                        <a href="#">Data Centre Solutions</a>
                        <a href="#">Server & Storage Solutions</a>
                        <a href="#">Infrastructure Monitoring & Management</a>
                         <a href="#">IT Infrastructure Audits</a>
                         <a href="#">Disaster Recovery</a>
                      </div>
                      <hr style={{ margin: "1rem 0" }} />
                    
                      <h4>Try at zero cost</h4>
                     
                      <button className="plans-btn">FREE DEMO →</button>
                    </>
                  )}

                  {hoveredSubItem === "msps" && (
                    <>
                      <h3>Security for MSPs</h3>
                      <p>[Insert MSPs content here]</p>
                      <button className="plans-btnon">See MSP Solutions →</button>
                    </>
                  )}
                   {hoveredSubItem === "WEBSITE DEV" && (
                    <>
                      <h3>Custom Built Websites That Elevate Your Brand and Drive Results</h3>
<p>
  We create modern, responsive websites that are fast, secure, and built to grow your business. We blend design and tech to give your brand a strong online presence.
</p>
<button className="plans-btnon">Services →</button>

<div className="links-grid"
 onClick={() => nav("/WEBSITE DEV")}>
  <a href="#">Custom Website Development</a>
  <a href="#">eCommerce Website Development</a>
  <a href="#">Responsive Web Design</a>
  <a href="#">Content Management System (CMS) Development</a>
  <a href="#">Landing Page & Microsite Design</a>
</div>
                     
                      <hr style={{ margin: "1rem 0" }} />
                      <h4>Try at zero cost</h4>
                     
                      <button className="plans-btn">FREE DEMO →</button>
                    </>
                  )}
                   {hoveredSubItem === "MIGRATION" && (
                    <>
                      <h3>Seamless Data and System Migration Without Downtime</h3>
<p>
 We help you move your data, apps, or infrastructure to new environments with zero hassle. We ensure smooth, secure, and downtime-free migrations.
</p>
<button className="plans-btnon">Services →</button>

<div className="links-grid"  
onClick={() => nav("/MIGRATION")}>
  <a href="#">End-to-End Migration Services</a>
  <a href="#">Seamless AI & Automation Migration</a>
  <a href="#">Effortless Cloud Migration</a>
  <a href="#">Scalable Software Development Migration</a>
  <a href="#">Accelerate Innovation</a>
</div>
                     
                     <hr style={{ margin: "1rem 0" }} />
                      <h4>Try at zero cost</h4>
                     
                      <button className="plans-btn">FREE DEMO →</button>
                    </>
                  )}
                  {hoveredSubItem === "Managed XDR/MXDR" && (
                    <>
                     <h3>Enhance Your Security with Advanced Detection & Response</h3>
<p>
  Our XDR/MXDR solutions provide real-time threat detection, automated responses, and 24/7 monitoring for complete protection of your infrastructure.
</p>
<button className="plans-btnon">Services →</button>

<div className="links-grid"
 onClick={() => nav("/Managed XDR/MXDR")}>
  <a href="#">Zero Trust Endpoint Access</a>
  <a href="#">AI-powered Endpoint Detection & Response (EDR)</a>
  <a href="#">Unified Threat Detection (Endpoint, Network, Cloud)</a>
  <a href="#">Cloud & SaaS Security Monitoring</a>
  <a href="#">Threat Intelligence-Driven Detection</a>
</div>
                      <hr style={{ margin: "1rem 0" }} />
                      <h4>Free Tools</h4>
                      <div className="links-grid">
                        <a href="#">Free Email Threat Scan</a>
                        <a href="#">Build and Price</a>
                      </div>
                    </>
                  )}
                  {hoveredSubItem === "EDR/NGAV Protection" && (
                    <>
                     <h3>Next-Gen Endpoint Security for Proactive Threat Prevention</h3>
<p>
  Our EDR/NGAV solutions combine advanced AI-driven prevention and real-time behavioral analytics to secure your endpoints against modern cyber threats.
</p>
<button className="plans-btnon">Services →</button>

<div className="links-grid"
 onClick={() => nav("/EDR/NGAV Protection")}>
  <a href="#">AI-Powered Malware & Ransomware Prevention</a>
  <a href="#">Behavior-Based Threat Detection & Response</a>
  <a href="#">Real-Time Endpoint Activity Monitoring</a>
  <a href="#">Automated Threat Containment & Remediation</a>
  <a href="#">Centralized Visibility with Threat Intelligence Integration</a>
</div>

                      <hr style={{ margin: "1rem 0" }} />
                      <h4>Free Tools</h4>
                      <div className="links-grid">
                        <a href="#">Free Email Threat Scan</a>
                        <a href="#">Build and Price</a>
                      </div>
                    </>
                  )}
                  {hoveredSubItem === "Email Protection" && (
                    <>
                     <h3>Prevent Threats Before They Reach Your Inbox</h3>
<p>
  Advanced email security solutions to detect, prevent, and neutralize threats.
</p>
<button className="plans-btnon">Services →</button>

<div className="links-grid" 
 onClick={() => nav("/Email Protection")}>
  <a href="#">Anti-Phishing & Spoofing Protection</a>
  <a href="#">Email Encryption</a>
  <a href="#">Spam Filtering & ATP</a>
  <a href="#">DMARC, DKIM & SPF Setup</a>
  <a href="#">AI-driven Phishing Defense</a>
</div>


                      <hr style={{ margin: "1rem 0" }} />
                      <h4>Free Tools</h4>
                      <div className="links-grid">
                        <a href="#">Free Email Threat Scan</a>
                        <a href="#">Build and Price</a>
                      </div>
                    </>
                  )}
                  



                  {hoveredSubItem === "all" && (
                    <>
                      <h3>All Products</h3>
                      <p>[Insert overview of all products]</p>
                      <button className="plans-btnon">Browse All →</button>
                    </>
                  )}

                  {!hoveredSubItem && (
                    <>
                      <h3>Strengthen Your Organization's Cyber Defence</h3>
                      <p>
                        We provide end-to-end cybersecurity services that reduce
                        risk, detect threats early, and improve your overall
                        security posture.
                      </p>
                      <button className="plans-btnon">Services →</button>

                      <div className="links-grid">
                        <a href="#">Phishing and Impersonation Protection</a>
                        <a href="#">Security Awareness Training</a>
                        <a href="#">Incident Response</a>
                        <a href="#">Email Encryption</a>
                        <a href="#">Account Takeover Protection</a>
                        <a href="#">Microsoft 365 Backup</a>
                        <a href="#">Domain Fraud Protection (DMARC)</a>
                        <a href="#">Cloud Archiving</a>
                        <a href="#">
                          Spam, Malware, and Advanced Threat Protection
                        </a>
                        <a href="#">Data Inspector™</a>
                      </div>

                      <hr style={{ margin: "1rem 0" }} />
                      <h4>Free Tools</h4>
                      <div className="links-grid">
                        <a href="#">Free Email Threat Scan</a>
                        <a href="#">Build and Price</a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="navbar-right" ref={rightnav}>
        <span className="free-trial">FREE TRIAL</span>
        <FaSearch className="icon" />
        <FaUser className="icon" />
        <FaPhone className="icon" />
        <div className="language">
          English <IoMdArrowDropdown />
        </div>
      </div>
      <div
        id="NavbarStaggeredBarsIcon"
        onClick={() => {
          if (
            centernav.current.style.display === "flex" &&
            rightnav.current.style.display === "flex"
          ) {
            centernav.current.style.display = "none";
            rightnav.current.style.display = "none";
          } else {
            centernav.current.style.display = "flex";
            rightnav.current.style.display = "flex";
          }
        }}
      >
        <FaBarsStaggered className="icon" color="white" />
      </div>
    </nav>
  );
};

export default Navbar;
