import React from "react";
import "./SoftDevelopSection.css";

const SoftDevelop = () => {
  return (
    <div className="softdevelop-section">
      {/* Background Image */}
      <img
        src="/images/webdevlobg.jpg"
        alt="Background"
        className="softdevelop-bg-img"
      />

      <div className="softdevelop-content-wrapper">
        <div className="softdevelop-heading-tag">● STRATEGIC ADVANTAGE</div>

        <h1 className="softdevelop-title">
         Why Choose Us for <span>Software </span> Development?
        </h1>

        <p className="softdevelop-subtitle">
         In a world driven by technology, off the shelf software often falls short. Our end-to-end development services ensure that every solution we build is customized, scalable, secure, and aligned to your business goals.
        </p>

        <div className="softdevelop-content">
          <div className="softdevelop-left-box">
            <h3 className="softdevelop-box-title">Customized Software Development</h3>
            <img
              src="/images/robot side.gif"
              alt="Modern Data Center"
              className="softdevelop-data-img"
            />
          </div>

          <div className="softdevelop-right-box">
            <h3 className="softdevelop-box-title-right">Smart Software Solutions</h3>
            <p className="softdevelop-right-text">
             Your software is more than just code it’s the engine that powers your digital strategy, customer experience, and competitive edge. Choosing the right development partner directly impacts
            </p>

            <ul className="softdevelop-points">
              <li>
                <strong>Custom Fit to Your Business</strong><br />
                Tailor made software aligns perfectly with your goals, workflows, and industry needs giving you exactly what you need, not just what’s available off the shelf.
              </li>
              <li>
                <strong>Faster Time to Market</strong><br />
                With agile development methods and streamlined workflows, we ensure rapid prototyping, faster releases, and continuous updates helping you stay ahead of competitors.
              </li>
              <li>
                <strong>Better User Experience</strong><br />
                We prioritize intuitive design and smooth functionality, ensuring your users get an experience that’s fast, responsive, and enjoyable across all devices.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftDevelop;
