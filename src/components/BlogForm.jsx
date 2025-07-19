import React, { useState }from 'react'

function BlogForm({addBlog}) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addBlog(title, content);
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit = {handleSubmit}>
            <div className = 'titleContainer'>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </div>
            <div className = 'textAreaContainer'>
                <label>Content</label>
                <textarea value ={content} onChange={(e) => setContent(e.target.value)} required></textarea>
            </div>
            <button type ='submit'>Add Blog</button>
        </form>
    )
}

export default BlogForm