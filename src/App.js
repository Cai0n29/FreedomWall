import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useSyncExternalStore} from 'react'
import Blog from './components/Blog.jsx'
import BlogForm from './components/BlogForm.jsx';
import BlogList from './components/BlogList.jsx';
import LandingPage from "./components/LandingPage.jsx";

function App() {

  //The blogs that are saved in storage
  const [blogs, setBlogs] = useState([])
  const [currentBlog, setCurrentBlog] = useState(null)

  useEffect(()=>{
    const savedBlogs = JSON.parse(localStorage.getItem('blogs'));
    if(savedBlogs){
      setBlogs(savedBlogs)
    }
  }, [])

  const  addBlog = (title, content) => {
    const newBlog = {id: Date.now(), title, content};
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs))
  }

  const deleteBlog = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
  }
  //open Blog
  const openBlog =(id) => {
    const blog = blogs.find((blog) => blog.id === id);
    setCurrentBlog(blog)
  }

  // close Blog
  const closeBlog = () =>{
    setCurrentBlog(null)
  }

  return (
    <div className = "App">
      <LandingPage />
      {
        currentBlog ? (
          <Blog blog = {currentBlog} closeBlog={closeBlog}/>
        ) : (
          <>
          <BlogForm addBlog={addBlog} />

          <BlogList blogs={blogs} openBlog={openBlog} deleteBlog={deleteBlog} />
          </>
        )        
      }
    </div>
  );
}

export default App;
