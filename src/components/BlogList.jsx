import React from "react";
//LANDING PAGE
// blogs = [] - ensures that blogs is at least an empty array even if not passed and we define blogs prop

function BlogList({  blogs = [], openBlog, deleteBlog }) {
    return (
        <div>
            
            <ul>
                {blogs.map((blog) => (
                    <li className="listitem" key={blog.id}>
                        <span onClick={() => openBlog(blog.id)}>{blog.title}</span>
                        <button onClick={() => deleteBlog(blog.id)}>Delete</button>
                    </li>
            ))}
            </ul>
        </div>
    );
}

export default BlogList