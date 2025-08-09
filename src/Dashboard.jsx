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

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // Get submissions from contact form
    const storedEmails = JSON.parse(localStorage.getItem("formSubmissions")) || [];
    setEmails(storedEmails);
  }, []);

  const [blogsData, setBlogsData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [caseStudiesData, setCaseStudiesData] = useState([]);
  const [insightsData, setInsightsData] = useState([]);

  const [showForm, setShowForm] = useState({
    blogs: false,
    news: false,
    caseStudies: false,
    insights: false,
  });

  const [newContent, setNewContent] = useState({
    image: "",
    title: "",
    description: "",
    date: "",
  });

  const handleAddContent = () => {
    if (activeSection !== "emails" && activeSection !== "dashboard") {
      setShowForm({ ...showForm, [activeSection]: true });
    }
  };

  const handleSubmit = () => {
    const contentToAdd = { ...newContent };
    switch (activeSection) {
      case "blogs":
        setBlogsData([...blogsData, contentToAdd]);
        break;
      case "news":
        setNewsData([...newsData, contentToAdd]);
        break;
      case "caseStudies":
        setCaseStudiesData([...caseStudiesData, contentToAdd]);
        break;
      case "insights":
        setInsightsData([...insightsData, contentToAdd]);
        break;
      default:
        return;
    }
    setNewContent({ image: "", title: "", description: "", date: "" });
    setShowForm({ ...showForm, [activeSection]: false });
    setCounts((prev) => ({ ...prev, [activeSection]: prev[activeSection] + 1 }));
  };

  const renderCards = (data, setData, section) => (
    <div className="blog-cards">
      {data.map((item, idx) => (
        <div className="blog-card" key={idx}>
          <div className="blog-card-image">
            <img src={item.image} alt={item.title} className="blog-top-img" />
          </div>
          <div className="blog-card-content">
            <h3 className="blog-card-title">{item.title}</h3>
            <p className="blog-card-text">{item.description}</p>
            <button
              className="delete-button"
              onClick={() => {
                const updated = data.filter((_, i) => i !== idx);
                setData(updated);
                setCounts((prev) => ({ ...prev, [section]: prev[section] - 1 }));
              }}
            >
              Delete
            </button>
            <div className="blog-card-footer">
              <span className="blog-date">{item.date}</span>
              <span className="blog-link purple">Read →</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

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
            {Object.entries(counts).map(([key, value]) => (
              <div className="info-card" key={key}>
                <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                <h2>{value}</h2>
                <button className="add-btn" onClick={() => setActiveSection(key)}>View</button>
              </div>
            ))}
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
                    <th>Contact No</th>
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
                      {/* FIX: fallback for different field names */}
                      <td>{email.contact || email.phone || email.phoneNumber || ""}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      );
    }

    const sectionMap = {
      blogs: [blogsData, setBlogsData],
      news: [newsData, setNewsData],
      caseStudies: [caseStudiesData, setCaseStudiesData],
      insights: [insightsData, setInsightsData],
    };

    if (sectionMap[activeSection]) {
      const [data, setData] = sectionMap[activeSection];
      return (
        <>
          <div className="top-bar">
            <h1 className="dashboard-title">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1>
            <button className="new-content-btn" onClick={handleAddContent}>
              + New Content
            </button>
          </div>
          {showForm[activeSection] && (
            <div className="blog-form">
              <h3>Add New {activeSection}</h3>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setNewContent({
                    ...newContent,
                    image: URL.createObjectURL(e.target.files[0]),
                  })
                }
              />
              <input
                type="text"
                placeholder="Title"
                value={newContent.title}
                onChange={(e) => setNewContent({ ...newContent, title: e.target.value })}
              />
              <textarea
                placeholder="Description"
                value={newContent.description}
                onChange={(e) => setNewContent({ ...newContent, description: e.target.value })}
              ></textarea>
              <input
                type="date"
                value={newContent.date}
                onChange={(e) => setNewContent({ ...newContent, date: e.target.value })}
              />
              <button onClick={handleSubmit}>Submit</button>
            </div>
          )}
          {renderCards(data, setData, activeSection)}
        </>
      );
    }

    return null;
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="nav-list">
          <li className={`navv-item ${activeSection === "dashboard" ? "active" : ""}`} onClick={() => setActiveSection("dashboard")}>Dashboard</li>
          <li className={`navv-item ${activeSection === "blogs" ? "active" : ""}`} onClick={() => setActiveSection("blogs")}>Blogs</li>
          <li className={`navv-item ${activeSection === "news" ? "active" : ""}`} onClick={() => setActiveSection("news")}>News</li>
          <li className={`nav-item ${activeSection === "caseStudies" ? "active" : ""}`} onClick={() => setActiveSection("caseStudies")}>Case Studies</li>
          <li className={`navv-item ${activeSection === "insights" ? "active" : ""}`} onClick={() => setActiveSection("insights")}>Insights</li>
          <li className={`navv-item ${activeSection === "emails" ? "active" : ""}`} onClick={() => setActiveSection("emails")}>Emails</li>
        </ul>
      </div>
      <div className="main-panel">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
