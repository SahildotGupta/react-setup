import React from "react";
import { useState } from "react";

function Home() {
  const [blogs, setBlogs] = useState([
    { title: "Blog1", body: "This is the blog 1", id: 1 },
    { title: "Blog2", body: "This is the blog 2", id: 2 },
    { title: "Blog3", body: "This is the blog 3", id: 3 },
    { title: "Blog4", body: "This is the blog 4", id: 4 },
  ]);
  return (
    <div>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {blog.title}
          {blog.body}
        </div>
      ))}
    </div>
  );
}

export default Home;
