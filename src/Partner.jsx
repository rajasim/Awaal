import React from "react";
import "./Partner.css";

export default function Partner() {
  const logos = [
    "/images/box9.jpeg",
    "/images/isro.png",
    "/images/atlascopco.png",
    "/images/kirloskar.png",
  ];

  const repeatedLogos = [...logos, ...logos]; // doubled to create infinite scroll effect

  return (
    <div className="partner-section">
      <h3>Trusted by:</h3>
      <h2>Some Of The Well-Known Companies</h2>
      <div className="logo-slider">
        <div className="slider-track">
          {repeatedLogos.map((logo, index) => (
            <div className="logo-box" key={index}>
              <img src={logo} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
