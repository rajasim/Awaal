import React from "react";
import "./ScrollingLogosSection.css";

function ScrollingLogosSection() {
  return (
    <div className="scrolling-section">
      <div className="fixed-text">
        <h2>
          Protecting Customers <br />
          Around the Globe is <br />
          Our Passion
        </h2>
      </div>

      <div className="logo-slider">
        <div className="logos-marquee">
          <img src="/images/likeslogo.jpeg" alt="St Joseph" />
          <img src="/images/likeslogo.jpeg" alt="Broncos" />
          <img src="/images/likeslogo.jpeg" alt="Midcoast" />
          <img src="/images/likeslogo.jpeg" alt="St Joseph" />
          <img src="/images/likeslogo.jpeg" alt="Broncos" />
          <img src="/images/likeslogo.jpeg" alt="Midcoast" />
           <img src="/images/likeslogo.jpeg" alt="Midcoast" />
            <img src="/images/likeslogo.jpeg" alt="Midcoast" />
             <img src="/images/likeslogo.jpeg" alt="Midcoast" />
        </div>
      </div>
    </div>
  );
}

export default ScrollingLogosSection;