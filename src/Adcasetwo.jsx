import React from "react";
import "./AdminCase.css";

const Adcasetwo = () => {
  return (
    <div className="case-wrapper">
      {/* Left: Article Content */}
        <div className="case-article">
        <h1 className="case-title">
          AI, Automation & the Future of Work  What Businesses Need to Know in 2025
        </h1>
        <p className="case-author">AI and Machine Learning have moved from buzzwords to business essentials.</p>

        <p className="case-intro">
         They’re powering modern transformation automating repetitive tasks, predicting customer behavior, strengthening security, and creating more personalized user experiences. {" "}
          <a href="#" className="case-link">
           In 2025, the leaders aren’t just using AI to save time<br></br>
          </a>{" "}<br></br>
          <p> they’re using it to make smarter decisions, innovate faster, and stay ahead of the curve. Automation is going deeper than ever. IT teams are managing entire infrastructures with AI-driven monitoring, developers are building and deploying software faster with AI-assisted coding, and customer service is being redefined by intelligent chatbots and real-time personalization.</p>
        </p>
        <br></br>
        <p>The difference now is scale and sophistication. AI is no longer an optional upgrade it’s embedded in everyday business operations. The key to success lies in using it strategically, with clear goals, quality data, and robust security.</p>
        <br></br>
        <p>Wee don’t just plug in AI tools. We tailor them to your business streamlining workflows, building intelligent applications, and creating systems that deliver measurable results.

Smarter tech. Real results.</p>

      

        
      </div>

      {/* Right: Newsletter Signup */}
      <div className="newsletter-section">
        <div className="newsletter-left-img">
          <img src="./images/iMAEGETitle .gif" alt="Newsletter Visual" />
        </div>
        <div className="newsletter-content">
          <h2>Awwal updates</h2>
          <p>Sign-up to get the latest from Awwal sent straight to your inbox.</p>
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

export default Adcasetwo;
