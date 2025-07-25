import React from 'react';
import './AdminBlog.css';

const AdminBlog = () => {
  return (
    <div className="admin-blog-container">
      {/* Header Section */}
      <div className="header-section">
        <h1>Stopping a ransomware attack in its tracks</h1>
        <hr />
      </div>

      {/* Blog Content Section */}
      <div className="content-section">
        <div className="main-text">
          <p>
            On a Sunday afternoon, Justin Mirksy, Managing Partner at DBT, received a critical alert from Todyl's detection engineers for one of his clients. 
            DBT was not utilizing Todyl's Managed eXtended Detection and Response (MXDR) or Endpoint Security (EDR+NGAV) modules in place at the time, 
            however the MXDR team periodically reviews critical alerts for accuracy and immediately reached out to DBT as a courtesy due to the severity.
          </p>
          <p>
            Todyl’s detection engineers identified an unknown threat actor attempting to exfiltrate user credentials and data from DBT’s client, 
            which is an indication that ransomware was about to be deployed.
          </p>
          <p>
            Todyl’s MXDR team immediately launched an investigation covering multiple areas of concern: logon activities, credential dumping, 
            lateral movement, and the attempted loading of several malicious binaries. The team identified the compromised account by looking at 
            a multitude of signals across the platform.
          </p>
        </div>

        <div className="quote-box">
          <p>
            “It was clear that Todyl’s MXDR was truly looking out for us 24/7. When I got the call from their detection engineers on a Sunday, 
            I asked them to jump in and help us and they agreed right away.”
          </p>
          <p><strong>— Justin Mirksy, Managing Partner, DBT</strong></p>
        </div>
      </div>

      {/* Email Subscription Section with Image */}
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

export default AdminBlog;
