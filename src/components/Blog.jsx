import React from 'react'

function Blog ({blog, closeBlog}){
    return(
        <div>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <button onClick = {closeBlog}>Back to Home</button>
        </div>
    )
}

export default Blog