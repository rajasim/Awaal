import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    jobTitle: "",
    teamSize: "",
    service: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow digits in phone field
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissions = JSON.parse(localStorage.getItem("formSubmissions")) || [];
    submissions.push(formData);
    localStorage.setItem("formSubmissions", JSON.stringify(submissions));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      country: "",
      jobTitle: "",
      teamSize: "",
      service: "",
      phone: "",
      message: "",
    });

    setSubmitted(true);
  };

  return (
    <div className="form-section" id="form">
      <div className="form-left">
        <img src="/images/contact-ui.png" alt="Contact Illustration" />
      </div>

      <div className="form-right">
        <h2>
          Let’s Build <span>Together</span>
        </h2>
        <p>
          Ready to transform your vision into reality? Share your ideas and
          let's create something extraordinary.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              placeholder="First Name *"
              required
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Last Name *"
              required
            />
          </div>

          <div className="form-row">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Company Email *"
              required
            />
          </div>

          <div className="form-row">
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text"
              placeholder="Company *"
              required
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
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
            <select
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
            >
              <option value="">Job Title *</option>
              <option>C-Level</option>
              <option>Director</option>
              <option>VP</option>
              <option>Manager</option>
              <option>Architect</option>
              <option>Developer / Engineer</option>
              <option>Other</option>
            </select>

            <select
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              required
            >
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
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
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

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number"
              maxLength="15"
              required
            />
          </div>

          <div className="form-row">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional Message"
            />
          </div>

          <button type="submit">Send Message</button>

          {submitted && (
            <p className="success-msg">Message submitted successfully!</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Form;
