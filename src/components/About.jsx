import React from 'react'
import logo from "./logo1.png"
import "./Home.css"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
            <div className='nav'>
            <Link to="/"><div className="logo"><img src={logo} alt="yo" /></div></Link>
            <div className='navc'>
            <p><Link to="/">Home</Link></p>
           <p> <Link to="/search">Search</Link></p>
            <p><Link to="/watchlist">Watchlist</Link></p>
            <p><Link to="/about">About Us</Link></p>
            </div>
      </div> 
        <div className='aboutviewly'>
        <h1>About Viewly</h1>
        <p>
        <strong>Viewly</strong> is a modern movie discovery web app that lets users explore trending movies, search by name, watch trailers, and build a personal watchlist.
        </p>
        
        <h1>🎬 Features</h1>
        <ul>
        <li>Search movies using The Movie name</li>
        <li>See detailed movie info like release date, popularity, rating, and budget</li>
        <li>Watch trailers via <strong>YouTube</strong></li>
        <li>Add or remove movies from your watchlist (with <strong>localStorage support</strong>)</li>
        </ul>
        <h1>👨‍💻 Developer</h1>
        <p>
        This project was built by <strong>Sanath P Waraikar</strong>, a CS & AI student passionate about frontend and full-stack development. Viewly is part of his <strong>React learning journey.</strong>
        </p>
        <h1>📬 Get in Touch</h1>
        <p>Have feedback or questions? Feel free to connect:</p>
        <ul>
        <li>Email: sanathwaraikar@gmail.com</li>
        <li>GitHub: <a href="https://github.com/sanath-2512" >sanath-2512</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/sanath-waraikar/" target="_blank">Sanath Waraikar</a></li>
        </ul>
        </div>
      </div>
  )
}

export default About
