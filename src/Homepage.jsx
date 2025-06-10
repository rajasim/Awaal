import React, { useEffect, useState } from "react";
import "./Videopage.css";

const Homepage = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const container = document.querySelector(".cube-scene");
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    setMouse({
      x: (e.clientX - centerX) / (rect.width / 2),
      y: (e.clientY - centerY) / (rect.height / 2),
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const boxes = [
    { top: "5%", left: "10%" },
    { top: "15%", left: "35%" },
    { top: "20%", left: "65%" },
    { top: "30%", left: "80%" },
    { top: "35%", left: "20%" },
    { top: "50%", left: "50%" },
    { top: "55%", left: "75%" },
    { top: "65%", left: "15%" },
    { top: "70%", left: "40%" },
    { top: "80%", left: "70%" },
    { top: "85%", left: "25%" },
  ];

  return (
    <div className="container">
      <div
        className="cube-scene"
        style={{
          backgroundImage: `url("/images/awalbg.jpeg")`,
        }}
      >
        {boxes.map((pos, idx) => (
          <div
            key={idx}
            className="floating-box"
            style={{
              top: pos.top,
              left: pos.left,
              transform: `translate(${mouse.x * 30}px, ${mouse.y * 30}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;