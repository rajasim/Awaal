import React from 'react';
import './Ioteor.css';

const Ioteor = () => {
  return (
    <div className="ioteor-container">
      <button className="approach-button">⚡ Our Approach</button>

      <h1 className="ioteor-heading">
        It's Not Just What We Do 
        <br />
        <span className="gradient-heading">It's How We Do It</span>
      </h1>

      <p className="ioteor-subtext">
        Our methodology ensures every project delivers real value, not just technical solutions
      </p>

      <div className="ioteor-cards">
        <div className="carddd">
          <div className="icon blue">🧠</div>
          <h3>We Listen First</h3>
          <p>We don’t just tackle challenges we solve the right ones, with purpose <em>built IT solutions</em>.</p>
          <span className="link-text blue">Discovery driven approach</span>
        </div>

        <div className="carddd">
          <div className="icon green">🤝</div>
          <h3>We Work Collaboratively</h3>
          <p>Updating you at <em>every step</em> of the journey.</p>
          <span className="link-text green">Transparent communication</span>
        </div>

        <div className="carddd">
          <div className="icon purple">🛠️</div>
          <h3>We Build Transparently</h3>
          <p>So you always know <em>what’s deployed, where, and why</em>.</p>
          <span className="link-text purple">Complete visibility</span>
        </div>

        <div className="carddd">
          <div className="icon orange">🎯</div>
          <h3>We Deliver Outcomes</h3>
          <p>Not just software  we deliver <em>measurable business results</em>.</p>
          <span className="link-text orange">Results focused delivery</span>
        </div>
      </div>

      <div className="process-flow">
        <h2>Our Process in Action</h2>
        <div className="steps">
          <div className="step"><span className="circle blue">1</span> Listen & Discover</div>
          <span className="dash">–</span>
          <div className="step"><span className="circle green">2</span> Collaborate & Plan</div>
          <span className="dash">–</span>
          <div className="step"><span className="circle purple">3</span> Build & Communicate</div>
          <span className="dash">–</span>
          <div className="step"><span className="circle orange">4</span> Deliver & Measure</div>
        </div>
      </div>
    </div>
  );
};

export default Ioteor;
