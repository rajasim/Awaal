import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs") // Your API route
      .then((res) => {
        setBlogs(res.data.blogs || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load blogs");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>{error}</p>;

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
    </div>
  );
};

export default Blog;
