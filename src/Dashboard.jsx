import React, { useState, useEffect } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const [counts, setCounts] = useState({
    blogs: 2,
    news: 3,
    caseStudies: 1,
    insights: 4,
  });

  // Store email submissions from localStorage (or backend in real use)
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // Load email submissions from localStorage
    const storedEmails = JSON.parse(localStorage.getItem("formSubmissions")) || [];
    setEmails(storedEmails);
  }, []);

  const handleAddContent = () => {
    if (activeSection !== "emails") {
      setCounts((prev) => ({
        ...prev,
        [activeSection]: prev[activeSection] + 1,
      }));
    }
  };

  const renderContent = () => {
    if (activeSection === "dashboard") {
      return (
        <>
          <div className="top-bar">
            <h1 className="dashboard-title">Dashboard</h1>
            <button className="new-content-btn" onClick={handleAddContent}>
              + New Content
            </button>
          </div>

          <div className="cards-section">
            <div className="info-card">
              <p>Blogs</p>
              <h2>{counts.blogs}</h2>
              <button className="add-btn" onClick={() => setActiveSection("blogs")}>View</button>
            </div>
            <div className="info-card">
              <p>News</p>
              <h2>{counts.news}</h2>
              <button className="add-btn" onClick={() => setActiveSection("news")}>View</button>
            </div>
            <div className="info-card">
              <p>Case Studies</p>
              <h2>{counts.caseStudies}</h2>
              <button className="add-btn" onClick={() => setActiveSection("caseStudies")}>View</button>
            </div>
            <div className="info-card">
              <p>Insights</p>
              <h2>{counts.insights}</h2>
              <button className="add-btn" onClick={() => setActiveSection("insights")}>View</button>
            </div>
            <div className="info-card">
              <p>Emails</p>
              <h2>{emails.length}</h2>
              <button className="add-btn" onClick={() => setActiveSection("emails")}>View</button>
            </div>
          </div>
        </>
      );
    }

    if (activeSection === "emails") {
      return (
        <>
          <div className="top-bar">
            <h1 className="dashboard-title">Emails</h1>
          </div>
          <div className="email-list">
            {emails.length === 0 ? (
              <p>No email submissions yet.</p>
            ) : (
              <table className="email-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Country</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {emails.map((email, idx) => (
                    <tr key={idx}>
                      <td>{email.firstName} {email.lastName}</td>
                      <td>{email.email}</td>
                      <td>{email.company}</td>
                      <td>{email.country}</td>
                      <td>{email.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      );
    }

    // Generic content section
    return (
      <>
        <div className="top-bar">
          <h1 className="dashboard-title">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1>
          <button className="new-content-btn" onClick={handleAddContent}>
            + New Content
          </button>
        </div>
        <div className="activity-section">
          <h3>All {activeSection}</h3>
          <ul className="activity-list">
            {[...Array(counts[activeSection])].map((_, idx) => (
              <li key={idx}>
                <span className={`dot ${activeSection === "news" ? "blue" : "green"}`}></span>
                Sample {activeSection} content #{idx + 1}
                <span className="time">Today</span>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="nav-list">
          <li className={`nav-item ${activeSection === "dashboard" ? "active" : ""}`} onClick={() => setActiveSection("dashboard")}>Dashboard</li>
          <li className={`nav-item ${activeSection === "blogs" ? "active" : ""}`} onClick={() => setActiveSection("blogs")}>Blogs</li>
          <li className={`nav-item ${activeSection === "news" ? "active" : ""}`} onClick={() => setActiveSection("news")}>News</li>
          <li className={`nav-item ${activeSection === "caseStudies" ? "active" : ""}`} onClick={() => setActiveSection("caseStudies")}>Case Studies</li>
          <li className={`nav-item ${activeSection === "insights" ? "active" : ""}`} onClick={() => setActiveSection("insights")}>Insights</li>
          <li className={`nav-item ${activeSection === "emails" ? "active" : ""}`} onClick={() => setActiveSection("emails")}>Emails</li>
        </ul>
      </div>
      <div className="main-panel">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
