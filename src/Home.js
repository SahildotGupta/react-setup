import React from "react";
import { useState } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState([
    { title: "Blog1", body: "This is the blog 1", id: 1 },
    { title: "Blog2", body: "This is the blog 2", id: 2 },
    { title: "Blog3", body: "This is the blog 3", id: 3 },
    { title: "Blog4", body: "This is the blog 4", id: 4 },
  ]);
  return (
    <div>
      <BlogList props={blogs} title="All Blogs!" />
    </div>
  );
}

export default Home;
