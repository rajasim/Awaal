import React from 'react';
import './Form.css';

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
          Ready to transform your vision into reality? Share your ideas and let's create something extraordinary.
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
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Job Title" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Country" />
          </div>
          <div className="form-row">
            <select required>
              <option value="">Select a service...</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Mobile App</option>
              <option>Consulting</option>
            </select>
          </div>
          <div className="form-row">
            <input type="text" placeholder="Team Size" />
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
