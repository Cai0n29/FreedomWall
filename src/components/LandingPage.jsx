import "../style/style.css";
import { useEffect } from 'react';
export const LandingPage = () => {
    useEffect (() => {
        document.title = "FreedomWall"; //It updates doc title and runs after the component mounts
    }, []); // empty array means only running it once
    return  ( 
    <div className = "Heading">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Amaranth&display=swap"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Antic&display=swap"></link>
        <h1 className = "title">FreedomWall</h1> {/*To make the title visible*/ }
    <div className ="links">
    <a href = "" target = "_self">Home</a>
    <a href = "" target = "_self">Post</a>
    <a href = "" target = "_self">Wall</a>
    <a href = "" target = "_self">About</a>
    
    </div>
    </div>
    );
};

export default LandingPage;