import React, { useEffect, useRef, useState } from "react";
import "./ScrollingLogosSection.css";

function ScrollingLogosSection() {
  const fixedText = useRef();
  const [images, setImages] = useState([]);
  const [positions, setPositions] = useState([]); 

  useEffect(() => {
    if (fixedText.current) {
      const startLeft = fixedText.current.getBoundingClientRect().right;
      const logoCount = (window.innerWidth - parseInt(startLeft))/70;
  
      const tempImages = Array.from({ length: logoCount }, () => "/images/likeslogo.jpeg");
      const tempPositions = tempImages.map((_, i) => startLeft + i * 120);
  
      setImages(tempImages);
      setPositions(tempPositions);
  
      const interval = setInterval(() => {
        setPositions(prev =>
          prev.map(pos => (pos <= -120 ? window.innerWidth : pos - 2))
        );
      }, 1000 / 60);
  
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="scrolling-section">
      <div className="fixed-text" ref={fixedText}>
        <h2>
          Protecting Customers <br />
          Around the Globe is <br />
          Our Passion
        </h2>
      </div>

      <div className="logo-slider">
        <div className="logos-marquee" style={{ position: "relative", height: "100px" }}>
          {images.map((x, i) => (
            <img
              key={i}
              src={x}
              style={{
                position: "absolute",
                top: "0px",
                left: `${positions[i]}px`,
                height: "80px",
            
              }}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollingLogosSection;
