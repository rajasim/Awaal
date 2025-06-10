import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./JourneySection.css";

function JourneySection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="journey-wrapper">
      <div className="journey-left">
        <div className="task-card" data-aos="fade-right">
          <div className="task-status">Done!</div>
          <div className="task-icon arrow">↗</div>
        <div className="progress-circle">
  <video
    className="video-inside"
    src="/video/b.mp4"
    autoPlay
    muted
    loop
    playsInline
  ></video>
</div>
          <div className="time-label">2 hr ⓘ</div>
          <div className="check-icon">✔</div>
          <div className="plus-icon">+</div>
          <div className="bottom-avatars">
            <img src="/images/likeslogo.jpeg" alt="Avatar" className="avatar" />
            <img src="/images/likeslogo.jpeg" alt="Avatar" className="avatar highlight" />
          </div>
          <div className="popup-box">
            <ul>
              <li>Task 1 ✅</li>
              <li>Task 2 ✅</li>
              <li>Task 3 ✅</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="journey-right" data-aos="fade-left">
        <h2 className="title">From Idea to Innovation.</h2>
        <p className="description">
          This is the space to introduce visitors to the business or brand.
          Briefly explain who’s behind it, what it does and what makes it
          unique. Share its core values and what this site has to offer.
        </p>
        <button className="learn-more">
          Learn More <span>↗</span>
        </button>
      </div>
    </section>
  );
}

export default JourneySection;
