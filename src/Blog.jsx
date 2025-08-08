import React, { useEffect, useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 6; // blogs per page
  const backendURL = "http://localhost:5000/api/blogs";

 // update if needed

  useEffect(() => {
    fetch(`${backendURL}?page=${page}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs || []);
        setTotalPages(Math.ceil(data.total / limit));
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, [page]);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className="blog-wrapper">
      {/* Header */}
      <section className="blog-header">
        <h1 className="blog-title">Tech Insights Hub</h1>
        <p className="blog-subtitle">
          Stay ahead with the latest technology trends, insights, and more.
        </p>
      </section>

      {/* Blog Cards */}
      <section className="blog-list">
  {blogs.length === 0 ? (
    <p className="no-blogs">No blogs found.</p>
  ) : (
    blogs.map((blog) => (
      <div className="blog-card" key={blog.id}>
        <h2 className="blog-card-title">{blog.title}</h2>
        <p className="blog-card-content">{blog.content}</p>
      </div>
    ))
  )}
</section>


      {/* Pagination Controls */}
      <div className="pagination-controls">
        <button onClick={handlePrev} disabled={page === 1}>
          ⬅ Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={page === totalPages}>
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Blog;
