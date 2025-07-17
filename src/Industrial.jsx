import React from 'react';
import './Industrial.css';

function Industrial() {
  return (
    <div className="industrial-section">
      <img className="bg-image" src="/images/Untitled (1920 x 1000 px) .jpg" alt="bg" />

      <div className="industrial-content">
        <h2>
          Industries We Serve <span>Globally</span>
        </h2>
        <p>
          We are serving diverse industries worldwide, delivering tailored solutions that drive
          growth and innovation across multiple sectors.
        </p>

        <div className="industries-grid">
          <div className="industry-box">
            <img src="/images/box9.jpeg" alt="Finance" />
            <h3>Finance</h3>
            <p>Comprehensive financial solutions and services</p>
          </div>
          <div className="industry-box">
            <img src="/img/retail.png" alt="Retail" />
            <h3>Retail</h3>
            <p>Modern retail and customer experience solutions</p>
          </div>
          <div className="industry-box">
            <img src="/img/healthcare.png" alt="Healthcare" />
            <h3>Healthcare</h3>
            <p>Advanced healthcare technology and services</p>
          </div>
          <div className="industry-box">
            <img src="/img/banking.png" alt="Banking" />
            <h3>Banking</h3>
            <p>Secure banking and financial institution services</p>
          </div>
          <div className="industry-box">
            <img src="/img/education.png" alt="Education" />
            <h3>Education</h3>
            <p>Innovative educational technology solutions</p>
          </div>
          <div className="industry-box">
            <img src="/img/hotel.png" alt="Hotel" />
            <h3>Hotel</h3>
            <p>Hospitality management and guest services</p>
          </div>
          <div className="industry-box">
            <img src="/img/realestate.png" alt="Real Estate" />
            <h3>Real Estate</h3>
            <p>Property management and real estate solutions</p>
          </div>
          <div className="industry-box">
            <img src="/img/ecommerce.png" alt="E-commerce" />
            <h3>E-commerce</h3>
            <p>Complete online commerce and digital solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industrial;
