import React from "react";
import "./AdminCase.css";

const Adcaseone = () => {
  return (
    <div className="case-wrapper">
      {/* Left: Article Content */}
      <div className="case-article">
        <h1 className="case-title">
          The New Face of Cyber Threats in 2025 – Are You Prepared?
        </h1>
        <p className="case-author">Cybersecurity isn’t just about firewalls and antivirus anymore. In 2025,</p>

        <p className="case-intro">
         Cybersecurity in 2025 looks nothing like it did a few years ago. Firewalls and antivirus software are still part of the toolkit, but they are no longer enough to stop the new wave of attacks. Hackers have stepped up their game, using artificial intelligence to launch smarter, faster, and more targeted threats. {" "}
          <a href="#" className="case-link">
           Modern businesses are moving beyond traditional protection<br></br>
          </a>{" "}<br></br>
          <p>From deepfake scams that can fool even the most cautious eyes to AI powered phishing emails that perfectly mimic a colleague’s tone and writing style, these attacks are harder to spot and far more dangerous. They don’t just break through weak defenses they blend in so well that they can go unnoticed until the damage is done.</p>
        </p>
        <br></br>
        <p>The good news is that defense technology is evolving just as fast. Forward-thinking businesses are no longer relying only on prevention they are investing in real-time monitoring, behavior-based threat detection, and automated incident response systems. The focus has shifted from simply blocking attacks to predicting, detecting, and outsmarting them before they can cause harm.</p>
        <br></br>
        <p>@ Awwal, we build proactive cybersecurity strategies designed for today’s threats, not yesterday’s. Our solutions combine advanced AI driven detection, continuous monitoring, and rapid response to give businesses the edge they need in this new era of cyber warfare.

Stay secure. Stay ahead.</p>

      

        
      </div>

      {/* Right: Newsletter Signup */}
      <div className="newsletter-section">
        <div className="newsletter-left-img">
          <img src="./images/box9.jpeg" alt="Newsletter Visual" />
        </div>
        <div className="newsletter-content">
          <h2>Todyl updates</h2>
          <p>Sign-up to get the latest from Todyl sent straight to your inbox.</p>
          <label>
            <span>Business Email<span className="required">*</span></span>
            <input type="email" placeholder="you@yourcompany.com" />
          </label>
          <button>Sign-up now</button>
        </div>
      </div>
    </div>
  );
};

export default Adcaseone;
