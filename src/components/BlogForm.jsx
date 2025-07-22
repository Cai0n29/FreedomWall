import React, { useState }from 'react'
import "../style/style.css";
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

            <div className = "Container">
            <div className = 'titleContainer'>
                <label>Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            </div>
            <div className = 'textAreaContainer'>
                <label>Content</label>
                <textarea value ={content} onChange={(e) => setContent(e.target.value)} required></textarea>
            </div>
            </div>
            
            <div className = "notenbutton">
                <h1>The unsaid 
                    <br/>
                    thoughts
                </h1>
                <p>Drop a message on the wall</p>
            <button type ='submit'>Post a Message</button>
            </div>
        </form>
    )
}

export default BlogForm