import React from 'react';
import './AdminBlog.css';

const AdminBlogtwo = () => {
  return (
    <div className="admin-blog-container">
      {/* Header Section */}
      <div className="header-section">
        <h1>Transforming Healthcare Efficiency</h1>
        <hr />
      </div>

      {/* Blog Content Section */}
      <div className="content-section">
        <div className="main-text">
          <p>
         

Challenge:
Hospital was facing delays in processing diagnostic reports and managing patient data efficiently. Test results were manually entered, reviewed, and passed on to the concerned doctors leading to time lags, occasional human errors, and reduced patient satisfaction. Doctors were spending excessive time on administrative tasks instead of patient care.
<br></br>

Solution:
In February 2025, the hospital partnered with Awwal, a smart hospital automation and analytics system. The AI was integrated into the hospital’s diagnostic labs,patient database, and administrative systems.
<br></br>

Key Implementations

Real Time Data Flow
Once a test was complete, Alpha automatically pushed the report to the respective doctor’s dashboard and notified them in real-time.

<br></br>

24/7 Medical Data Access
Doctors could securely access patient records anytime through a secure cloud dashboard.<br></br>
<br></br>
          </p>
          <p>
         Patient Record Summarization
The AI summarized historical patient data, previous visits, test outcomes, and prescribed treatments into one smart overview.

         <br></br>

Daily Summary Alerts
Alpha provided automated summaries of patient activity, incoming test loads, and scheduled appointments.


          </p>
          <p>
        Admin Efficiency Tools<br></br>
Administrative staff used Alpha to track diagnostics trends, optimize lab workloads, and manage scheduling.
          </p>
          <p>Implementation Results<br></br>

Key Improvements
Test report delivery time reduced by 95%
Doctor-patient consultation time doubled
Report errors reduced by 85%
Patient satisfaction increased by 17%</p>

        </div>

        <div className="quote-box">
          <p>
            “Company proved to be a game changer in streamlining healthcare operations. From accelerating report generation to providing<br></br><br></br>

doctors with actionable insights instantly, Company significantly enhanced both efficiency and care quality. This success has led<br></br><br></br>

the hospital to plan expansion of Company into their radiology and pharmacy departments.”<br></br> 

          </p>
          <p><strong>— Conclusion </strong></p>
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

export default AdminBlogtwo;
