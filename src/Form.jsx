import React, { useState, useEffect } from "react";
import "./Form.css";
import countryData from "./countryCodes.json"; // JSON with 250+ countries

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    dialCode: "",
    jobTitle: "",
    teamSize: "",
    service: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Auto-detect country from browser locale
  useEffect(() => {
    try {
      const locale = Intl.DateTimeFormat().resolvedOptions().locale; // e.g. "en-IN"
      const countryCode = locale.split("-")[1]; // "IN"

      const match = countryData.find((c) => c.code === countryCode);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          country: match.name,
          dialCode: match.dial_code,
          phone: match.dial_code, // Initially set phone number to just dial code
        }));
      }
    } catch (error) {
      console.log("Country detection failed:", error);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "country") {
      const [countryName, dialCode] = value.split("|");
      setFormData((prev) => ({
        ...prev,
        country: countryName,
        dialCode: dialCode,
        phone: prev.phone && prev.phone.startsWith(dialCode) ? prev.phone : dialCode, // Set phone with dial code only if it's not already there
      }));
    } else if (name === "phone") {
      let phoneValue = value.replace(/\D/g, ""); // Remove all non-numeric characters

      // If phone is empty, just set it to the dial code
      if (phoneValue === "" && formData.dialCode) {
        phoneValue = formData.dialCode;
      }

      // Ensure the phone number starts with the dial code, if not, prepend it
      if (formData.dialCode && !phoneValue.startsWith(formData.dialCode)) {
        phoneValue = formData.dialCode + phoneValue; // Prepend dial code if not present
      }

      setFormData((prev) => ({
        ...prev,
        phone: phoneValue,
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

    const submissions =
      JSON.parse(localStorage.getItem("formSubmissions")) || [];
    submissions.push(formData);
    localStorage.setItem("formSubmissions", JSON.stringify(submissions));

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      country: "",
      dialCode: "",
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
        <img src="/images/migrationside.gif" alt="Contact Illustration" />
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
            <div className="custom-select-wrapper">
              <select
                name="country"
                value={
                  formData.country && formData.dialCode
                    ? `${formData.country}|${formData.dialCode}`
                    : ""
                }
                onChange={handleChange}
                required
              >
                <option value="">Country *</option>
                {countryData.map((country) => (
                  <option
                    key={country.code}
                    value={`${country.name}|${country.dial_code}`}
                  >
                    {country.name} ({country.dial_code})
                  </option>
                ))}
              </select>
            </div>
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
