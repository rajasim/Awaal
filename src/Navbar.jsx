import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch, FaUser, FaPhone } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [navbaroption, setnavbaroption] = useState("");
  const [hoveredSubItem, setHoveredSubItem] = useState("");

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://www.barracuda.com/assets/img/logos/barracuda-logo-white.svg"
          alt="Barracuda Logo"
          className="logo"
        />
      </div>

      <div className="navbar-center">
        {["PRODUCTS", "SOLUTIONS", "RESOURCES", "SUPPORT", "PARTNER & MSP", "SMALL BUSINESS CENTER"].map((item, i) => (
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
          >
            {item}
            {item === "PRODUCTS" && openDropdown === "products" && (
              <div className="mega-dropdown">
                <div className="mega-left">
                  <div className="mega-platform-box">
                    <h3 style={{ lineHeight: "1.5rem" }}>
                      Barracuda Cybersecurity Platform
                    </h3>
                    <p>
                      Cyberattacks can come from anywhere.
                      Barracuda protects you everywhere.
                    </p>
                    <a href="#">Explore the platform →</a>
                  </div>
                  <div className="mega-left-menu">
                    <div onMouseEnter={() => setHoveredSubItem("email")}>VAPT</div>
                    <div onMouseEnter={() => setHoveredSubItem("data")}>IT Infrastructure</div>
                    <div onMouseEnter={() => setHoveredSubItem("xdr")}>AI & Automation Services</div>
                    <div onMouseEnter={() => setHoveredSubItem("network")}>Software Development</div>
                    <div onMouseEnter={() => setHoveredSubItem("app")}>Mobile & Web App Development</div>
                    <div onMouseEnter={() => setHoveredSubItem("msps")}></div>
                    <div onMouseEnter={() => setHoveredSubItem("all")}>All Products →</div>
                  </div>
                </div>

                <div className="mega-right">
                  {hoveredSubItem === "email" && (
                    <>
                  <h3>Strengthen Your Organization's Cyber Defence</h3>
                      <p>
                        We provide end-to-end cybersecurity services that reduce risk, detect threats early, and improve your overall security posture.
                      </p>
                      <button className="plans-btn">Services →</button>

                      <div className="links-grid">
                       <a href="#">Network Security</a>
<a href="#">Endpoint Protection</a>
<a href="#">Zero Trust Access</a>
<a href="#">Firewall Management</a>
<a href="#">Threat Intelligence</a>
<a href="#">SIEM Integration</a>
<a href="#">Cloud Security Posture Management</a>
<a href="#">Identity & Access Management</a>
<a href="#">Ransomware Defense</a>
<a href="#">Data Loss Prevention (DLP)</a>

                      </div>

                      <hr style={{ margin: "1rem 0" }} />
                      <h4>Free Tools</h4>
                      <div className="links-grid">
                        <a href="#">Free Email Threat Scan</a>
                        <a href="#">Build and Price</a>
                      </div>
                     
                    </>
                  )}

                  {hoveredSubItem === "data" && (
                    <>
                      <h3>Designing Resilient, Scalable Networks for the Future</h3>
                      <p>
                        We engineer network infrastructure that supports your business today—and scales for tomorrow.
                      </p>
                      <button className="plans-btn">Services →</button>

                      <div className="links-grid">
                       <a href="#">LAN/WAN Design & Implementation</a>
      <a href="#">Wireless Network Design & Optimization</a>
      <a href="#">Data Center & Server Room Setup</a>
      <a href="#">Load Balancing & High Availability</a>
      <a href="#">AI-driven Performance Monitoring</a>
                      </div>

                      <hr style={{ margin: "1rem 0" }} />
                      <h4>Free Tools</h4>
                      <div className="links-grid">
                        <a href="#">Free Email Threat Scan</a>
                        <a href="#">Build and Price</a>
                      </div>
                      <button className="plans-btn">Explore Data →</button>
                    </>
                  )}

                  {hoveredSubItem === "xdr" && (
                    <>
                      <h3>Strengthen Your Organization's Cyber Defence</h3>
                      <p>
                        We provide end-to-end cybersecurity services that reduce risk, detect threats early, and improve your overall security posture.
                      </p>
                      <button className="plans-btn">Services →</button>

                      <div className="links-grid">
                      
   
      <a href="#">Robotic Process Automation (RPA)</a>
      <a href="#">Custom Machine Learning Solutions</a>
      <a href="#">Real-Time Predictive Analytics</a>
      <a href="#">AI Chatbots & Virtual Assistants</a>
      <a href="#">Seamless System Integration</a>
                      </div>

                      <hr style={{ margin: "1rem 0" }} />
                      <h4>Free Tools</h4>
                      <div className="links-grid">
                    
                      </div>
                      <button className="plans-btn">View XDR →</button>
                    </>
                  )}

                  {hoveredSubItem === "network" && (
                    <>
                      <h3>Accelerate Innovation with Tailored Solutions</h3>
                      <p>We turn your ideas into high-performance, scalable applications built with security and agility.</p>
                      <button className="plans-btn">Explore Network →</button>
                      <div className="links-grid">
                      
   
      <a href="#">Fully Customized Application Development</a>
<a href="#">Agile Development & Continuous Delivery</a>
<a href="#">Scalable Architecture & Secure Coding</a>
<a href="#">Integration with Existing Systems</a>

                      </div>
                      <hr style={{ margin: "1rem 0" }} />
                      <h4>Free Tools</h4>
                      <div className="links-grid">
                    
                      </div>
                      <button className="plans-btn">View XDR →</button>
                    </>
                  )}

                  {hoveredSubItem === "app" && (
                    <>
                      <h3>Build Engaging, Cross-Platform Digital Experiences</h3>
                      <p>[We create responsive apps that deliver value across all devices.]</p>
                      <button className="plans-btn">View Details →</button>
                        <div className="links-grid">
                      
   
     <h3>Services</h3>
<a href="#">iOS, Android & Web App Development</a>
<a href="#">User-Centric UI/UX Design</a>
<a href="#">Cloud-Backed, Scalable Architecture</a>
<a href="#">Performance Optimization & Maintenance</a>

                      </div>
                      <hr style={{ margin: "1rem 0" }} />
                      <h4>Free Tools</h4>
                      <div className="links-grid">
                    
                      </div>
                      <button className="plans-btn">View XDR →</button>
                    
                    </>
                  )}

                  {hoveredSubItem === "msps" && (
                    <>
                      <h3>Security for MSPs</h3>
                      <p>[Insert MSPs content here]</p>
                      <button className="plans-btn">See MSP Solutions →</button>
                    </>
                  )}

                  {hoveredSubItem === "all" && (
                    <>
                      <h3>All Products</h3>
                      <p>[Insert overview of all products]</p>
                      <button className="plans-btn">Browse All →</button>
                    </>
                  )}

                  {!hoveredSubItem && (
                    <>
                      <h3>Strengthen Your Organization's Cyber Defence</h3>
                      <p>
                        We provide end-to-end cybersecurity services that reduce risk, detect threats early, and improve your overall security posture.
                      </p>
                      <button className="plans-btn">Services →</button>

                      <div className="links-grid">
                        <a href="#">Phishing and Impersonation Protection</a>
                        <a href="#">Security Awareness Training</a>
                        <a href="#">Incident Response</a>
                        <a href="#">Email Encryption</a>
                        <a href="#">Account Takeover Protection</a>
                        <a href="#">Microsoft 365 Backup</a>
                        <a href="#">Domain Fraud Protection (DMARC)</a>
                        <a href="#">Cloud Archiving</a>
                        <a href="#">Spam, Malware, and Advanced Threat Protection</a>
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

      <div className="navbar-right">
        <span className="free-trial">FREE TRIAL</span>
        <FaSearch className="icon" />
        <FaUser className="icon" />
        <FaPhone className="icon" />
        <div className="language">
          English <IoMdArrowDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
