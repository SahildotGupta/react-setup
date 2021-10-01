import React from "react";

function BlogList({ props, title }) {
  //   const blogs = props.props;
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {props.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
