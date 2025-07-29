import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form-section">
      <div className="form-left">
        <img src="/images/contact-ui.png" alt="Contact Illustration" />
      </div>

      <div className="form-right">
        <h2>
          Let’s Build <span>Together</span>
        </h2>
        <p>
          Ready to transform your vision into reality? Share your ideas and let's
          create something extraordinary.
        </p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First Name *" required />
            <input type="text" placeholder="Last Name *" required />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Company Email *" required />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Company *" required />
            <select required>
              <option value="">Country *</option>
              <option>United States</option>
              <option>India</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-row">
            <select required>
              <option value="">Job Title *</option>
              <option>C-Level</option>
              <option>Director</option>
              <option>VP</option>
              <option>Manager</option>
              <option>Architect</option>
              <option>Developer / Engineer</option>
              <option>Other</option>
            </select>

            <select required>
              <option value="">Team Size *</option>
              <option>0–5</option>
              <option>6–10</option>
              <option>11–25</option>
              <option>26–50</option>
              <option>51–100</option>
              <option>101–250</option>
              <option>251–500</option>
              <option>500+</option>
            </select>
          </div>

          <div className="form-row">
            <select required>
              <option value="">Select a Service *</option>
              <option>Cybersecurity</option>
              <option>AI & Automation</option>
              <option>Cloud Services</option>
              <option>Software Development</option>
              <option>IT Infrastructure</option>
              <option>Website Development</option>
              <option>Migration</option>
              <option>Technical Issue / Bug</option>
              <option>Partnership / Collaboration</option>
              <option>Other</option>
            </select>

            <input type="tel" placeholder="Phone Number" />
          </div>

          <div className="form-row">
            <textarea placeholder="Additional Message"></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
