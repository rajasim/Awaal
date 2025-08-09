import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Rofter.css';

const Rofter = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/form'); // Redirect to your form route
  };

  return (
    <div className="rof-wrapper">
      <h2 className="rof-heading">Our Web Development Process</h2>
      <p className="rof-subtext">
        We follow a structured approach to deliver exceptional web solutions that meet your business goals and exceed user expectations.
      </p>

      <div className="rof-grid">
        <div className="rof-box">
          <div className="rof-step">1</div>
          <h3>Discovery & Strategy</h3>
          <img src="/images/Our Web Development Process1.png" alt="Step 1" />
          <p>Define goals, target audience, and technical scope to create a solid foundation for your project.</p>
        </div>

        <div className="rof-box">
          <div className="rof-step">2</div>
          <h3>Wireframes & UI Design</h3>
          <img src="/images/Our Web Development Process2.png" alt="Step 2" />
          <p>Create visual architecture, branding elements, and user flows that deliver exceptional user experiences.</p>
        </div>

        <div className="rof-box">
          <div className="rof-step">3</div>
          <h3>Development & Testing</h3>
          <img src="/images/Our Web Development Process3.png" alt="Step 3" />
          <p>Build responsive websites with modern coding practices, set up CMS, and perform thorough testing.</p>
        </div>

        <div className="rof-box">
          <div className="rof-step">4</div>
          <h3>Launch & Optimization</h3>
          <img src="/images/Our Web Development Process4.png" alt="Step 4" />
          <p>Implement SEO best practices, optimize site speed, and set up reliable hosting for your website.</p>
        </div>

        <div className="rof-box">
          <div className="rof-step">5</div>
          <h3>Support & Maintenance</h3>
          <img src="/images/Our Web Development Process5.png" alt="Step 5" />
          <p>Provide ongoing updates, regular backups, and continuous performance monitoring to keep your site running smoothly.</p>
        </div>

        <div className="rof-box rof-cta">
          <h3>Ready to Start Your Project?</h3>
          <p>Let’s discuss how our web development process can help bring your vision to life.</p>
          <button onClick={handleGetStartedClick}>Get Started</button>
        </div>
      </div>

      <div className="rof-bottom">
        {/* Possibly add content or remove if empty */}
      </div>
    </div>
  );
};

export default Rofter;
