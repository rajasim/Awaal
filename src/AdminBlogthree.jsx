import React from 'react';
import './AdminBlog.css';

const AdminBlogthree = () => {
  return (
    <div className="admin-blog-container">
      {/* Header Section */}
      <div className="header-section">
        <h1>Hotel Booking Software</h1>
        <hr />
      </div>

      {/* Blog Content Section */}
      <div className="content-section">
        <div className="main-text">
          <p>
         

Goals & Objectives<br></br>

Simple Hotel Search by city, dates, guests 
Detailed Hotel Information
Instant Booking with confirmation
Personal Dashboard for booking management
Secure Payment Gateway
Cancellation & Refund Tracking
User Authentication
<br></br><br></br>

Challenges Faced<br></br>

Implementing dynamic room availability updates
Integrating secure payment gateway with refunds
Designing a mobile-friendly, clean UI
Managing concurrent bookings for limited room inventories
<br></br><br></br>

Solutions Implemented<br></br>

Used optimistic locking in the database
Integrated Razorpay API for secure payments
Custom refund tracking system with admin approval
Responsive interface using Bootstrap 5 and interactive modals.
<br></br>

Results & Outcomes <br></br>

Improved User Experience with centralized booking dashboard
Faster Booking Process (under 3 minutes)
Secure Transactions with 100% payment success
Increased mobile responsiveness by 40%
          </p>
          <p>
         Future Enhancements<br></br>

AI-based hotel recommendations
Loyalty points and rewards management
Multi-language support
Voice search for hotel discovery
24/7 chatbot support
         
          </p>
          
         
        </div>

        <div className="quote-box">
          <p>
            “The hotel booking software successfully delivered a fast, secure, and user friendly platform that simplifies the booking process while ensuring smooth payment handling and real time room availability. By overcoming challenges like concurrent bookings, secure transactions, and responsive design, the system has significantly improved user satisfaction and operational efficiency. <br></br><br></br>

With planned future upgrades such as AI powered recommendations, loyalty programs, and multi language support, the platform is well-positioned to enhance customer engagement and maintain a competitive edge in the hospitality market.<br></br><br></br>



          </p>
          <p><strong>— conclusion </strong></p>
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

export default AdminBlogthree;
