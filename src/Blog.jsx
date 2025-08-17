import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 6; // Blogs per page
  const totalPages = Math.ceil(total / limit);

  const fetchBlogs = async (pageNumber) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/blogs?page=${pageNumber}&limit=${limit}`
      );
      setBlogs(res.data.blogs || []);
      setTotal(res.data.total || 0);
      setPage(res.data.page || 1);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to load blogs");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>{error}</p>;

  // Generate array of page numbers for numbered buttons
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="blog-wrapper">
      <section className="blog-header">
        <h1 className="blog-title">Tech Insights Hub</h1>
        <p className="blog-subtitle">
          Stay ahead with the latest technology trends, insights, and more.
        </p>
      </section>

      <section className="blog-list">
        {blogs.length === 0 ? (
          <p>No blogs found</p>
        ) : (
          blogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="blog-card-image"
                />
              )}
              <h2 className="blog-card-title">{blog.title}</h2>
              <p className="blog-card-content">{blog.content}</p>
              <span className="blog-card-date">
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
              <span className="blog-card-author">By {blog.author}</span>
            </div>
          ))
        )}
      </section>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>

          {/* Numbered page buttons */}
          {pageNumbers.map((num) => (
            <button
              key={num}
              className={num === page ? "active" : ""}
              onClick={() => setPage(num)}
            >
              {num}
            </button>
          ))}

          <button
            disabled={page >= totalPages}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
