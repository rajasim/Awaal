import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [counts, setCounts] = useState({ blogs: 0, news: 0, caseStudies: 0, insights: 0 });
  const [emails, setEmails] = useState([]);

  const [blogsData, setBlogsData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [caseStudiesData, setCaseStudiesData] = useState([]);
  const [insightsData, setInsightsData] = useState([]);

  const [showForm, setShowForm] = useState({ blogs: false, news: false, caseStudies: false, insights: false });
  const [newContent, setNewContent] = useState({ title: "", content: "", author: "Admin", imageUrl: "", date: "" });

  const API_BASE = "http://localhost:5000/api";

  // Load data from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogsRes, newsRes, casesRes, insightsRes] = await Promise.all([
          axios.get(`${API_BASE}/blogs?page=1&limit=1000`),
          axios.get(`${API_BASE}/news`),
          axios.get(`${API_BASE}/case-studies`),
          axios.get(`${API_BASE}/insights`)
        ]);

        setBlogsData(blogsRes.data.blogs || []);
        setNewsData(newsRes.data || []);
        setCaseStudiesData(casesRes.data || []);
        setInsightsData(insightsRes.data || []);

        setCounts({
          blogs: blogsRes.data.total || 0,
          news: newsRes.data.length,
          caseStudies: casesRes.data.length,
          insights: insightsRes.data.length
        });

        const storedEmails = JSON.parse(localStorage.getItem("formSubmissions")) || [];
        setEmails(storedEmails);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddContent = () => {
    if (activeSection !== "emails" && activeSection !== "dashboard") {
      setShowForm({ ...showForm, [activeSection]: true });
    }
  };

  const handleSubmit = async () => {
    try {
      const endpointMap = {
        blogs: `${API_BASE}/blogs`,
        news: `${API_BASE}/news`,
        caseStudies: `${API_BASE}/case-studies`,
        insights: `${API_BASE}/insights`
      };

      const endpoint = endpointMap[activeSection];
      if (!endpoint) return;

      const payload = {
        title: newContent.title,
        content: newContent.content,
        author: newContent.author || "Admin",
        imageUrl: newContent.imageUrl || "",
        createdAt: newContent.date || new Date()
      };

      const res = await axios.post(endpoint, payload);

      switch (activeSection) {
        case "blogs":
          setBlogsData([res.data, ...blogsData]);
          break;
        case "news":
          setNewsData([res.data, ...newsData]);
          break;
        case "caseStudies":
          setCaseStudiesData([res.data, ...caseStudiesData]);
          break;
        case "insights":
          setInsightsData([res.data, ...insightsData]);
          break;
        default:
          break;
      }

      setCounts((prev) => ({ ...prev, [activeSection]: prev[activeSection] + 1 }));
      setNewContent({ title: "", content: "", author: "Admin", imageUrl: "", date: "" });
      setShowForm({ ...showForm, [activeSection]: false });

    } catch (error) {
      console.error("Error adding content:", error);
    }
  };

  const renderCards = (data, setData, section) => (
    <div className="blog-cards">
      {data.map((item, idx) => (
        <div className="blog-card" key={idx}>
          <div className="blog-card-image">
            <img src={item.imageUrl || item.image} alt={item.title} className="blog-top-img" />
          </div>
          <div className="blog-card-content">
            <h3 className="blog-card-title">{item.title}</h3>
            <p className="blog-card-text">{item.content || item.description}</p>
            <button
              className="delete-button"
              onClick={async () => {
                try {
                  await axios.delete(`${API_BASE}/${section}/${item._id}`);
                  const updated = data.filter((_, i) => i !== idx);
                  setData(updated);
                  setCounts((prev) => ({ ...prev, [section]: prev[section] - 1 }));
                } catch (error) {
                  console.error("Delete failed:", error);
                }
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
            <button className="new-content-btn" onClick={handleAddContent}>+ New Content</button>
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
          <div className="top-bar"><h1 className="dashboard-title">Emails</h1></div>
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
                      <td>{email.contact || email.phone || ""}</td>
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
            <button className="new-content-btn" onClick={handleAddContent}>+ New Content</button>
          </div>
          {showForm[activeSection] && (
            <div className="blog-form">
              <h3>Add New {activeSection}</h3>
              <input
                type="text"
                placeholder="Image URL"
                value={newContent.imageUrl}
                onChange={(e) => setNewContent({ ...newContent, imageUrl: e.target.value })}
              />
              <input
                type="text"
                placeholder="Title"
                value={newContent.title}
                onChange={(e) => setNewContent({ ...newContent, title: e.target.value })}
              />
              <textarea
                placeholder="Content"
                value={newContent.content}
                onChange={(e) => setNewContent({ ...newContent, content: e.target.value })}
              />
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
          <li className={`navv-item ${activeSection === "caseStudies" ? "active" : ""}`} onClick={() => setActiveSection("caseStudies")}>Case Studies</li>
          <li className={`navv-item ${activeSection === "insights" ? "active" : ""}`} onClick={() => setActiveSection("insights")}>Insights</li>
          <li className={`navv-item ${activeSection === "emails" ? "active" : ""}`} onClick={() => setActiveSection("emails")}>Emails</li>
        </ul>
      </div>
      <div className="main-panel">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
