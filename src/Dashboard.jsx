import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  // Separate content counters
  const [counts, setCounts] = useState({
    blogs: 2,
    news: 3,
    caseStudies: 1,
    insights: 4,
  });

  const handleAddContent = () => {
    setCounts((prev) => ({
      ...prev,
      [activeSection]: prev[activeSection] + 1,
    }));
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
          <li
            className={`nav-item ${activeSection === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveSection("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={`nav-item ${activeSection === "blogs" ? "active" : ""}`}
            onClick={() => setActiveSection("blogs")}
          >
            Blogs
          </li>
          <li
            className={`nav-item ${activeSection === "news" ? "active" : ""}`}
            onClick={() => setActiveSection("news")}
          >
            News
          </li>
          <li
            className={`nav-item ${activeSection === "caseStudies" ? "active" : ""}`}
            onClick={() => setActiveSection("caseStudies")}
          >
            Case Studies
          </li>
          <li
            className={`nav-item ${activeSection === "insights" ? "active" : ""}`}
            onClick={() => setActiveSection("insights")}
          >
            Insights
          </li>
        </ul>
      </div>

      <div className="main-panel">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
